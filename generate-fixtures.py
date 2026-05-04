#!/usr/bin/env python3
"""
Generate Tournament Fixtures from Supabase Database
Fetches all registrations and creates knockout brackets
"""

import os
import sys
import random
import math

# You'll need to install: pip install supabase
try:
    from supabase import create_client, Client
except ImportError:
    print("Please install supabase: pip install supabase")
    sys.exit(1)

# Supabase configuration
SUPABASE_URL = os.getenv('SUPABASE_URL', 'YOUR_SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY', 'YOUR_SUPABASE_ANON_KEY')

def get_next_power_of_2(n):
    """Calculate next power of 2 for bracket size"""
    return 2 ** math.ceil(math.log2(n))

def generate_bracket(participants, category_name):
    """Generate clean single-elimination knockout bracket with natural flow"""
    if not participants:
        return
    
    n = len(participants)
    bracket_size = get_next_power_of_2(n)
    
    print("\n" + "=" * 80)
    print(f"{category_name.upper()}")
    print("=" * 80)
    print(f"Total Participants: {n}")
    print("=" * 80 + "\n")
    
    # Shuffle for random seeding
    shuffled = participants.copy()
    random.shuffle(shuffled)
    
    # Assign player numbers sequentially
    player_slots = []
    for i, participant in enumerate(shuffled, 1):
        player_slots.append({
            'number': i,
            'name': format_participant(participant),
            'is_real': True
        })
    
    # Fill remaining slots with placeholders (these will start in later rounds)
    for i in range(n + 1, bracket_size + 1):
        player_slots.append({
            'number': i,
            'name': f"Player {i}",
            'is_real': False
        })
    
    match_number = 1
    current_round = player_slots.copy()
    
    # Determine starting round based on bracket size
    total_rounds = int(math.log2(bracket_size))
    round_num = 1
    
    # Calculate how many matches in first round
    first_round_matches = n - (bracket_size // 2)
    
    while len(current_round) > 1:
        # Determine round name
        remaining = len(current_round)
        if remaining == 2:
            round_name = "FINAL"
        elif remaining == 4:
            round_name = "SEMI-FINALS"
        elif remaining == 8:
            round_name = "QUARTER-FINALS"
        elif remaining == 16:
            round_name = "ROUND OF 16"
        else:
            round_name = f"ROUND {round_num}"
        
        # For first round, only create matches for players who need to play
        if round_num == 1 and first_round_matches > 0:
            print(f"{round_name} ({first_round_matches} matches)")
            print("-" * 80)
            
            next_round = []
            matches_created = 0
            i = 0
            
            while i < len(current_round) and matches_created < first_round_matches:
                p1 = current_round[i]
                p2 = current_round[i + 1]
                
                # Only create match if both are real players
                if p1['is_real'] and p2['is_real']:
                    print(f"Match {match_number}: {p1['name']} vs {p2['name']}")
                    next_round.append({
                        'name': f"Winner of Match {match_number}",
                        'is_real': True
                    })
                    match_number += 1
                    matches_created += 1
                    i += 2
                else:
                    # One or both are placeholders, advance the real player
                    if p1['is_real']:
                        next_round.append(p1)
                    elif p2['is_real']:
                        next_round.append(p2)
                    i += 2
            
            # Add remaining players who didn't play in round 1
            while i < len(current_round):
                if current_round[i]['is_real']:
                    next_round.append(current_round[i])
                i += 1
                
        else:
            # Regular round - all matches
            print(f"\n{round_name} ({len(current_round) // 2} matches)")
            print("-" * 80)
            
            next_round = []
            for i in range(0, len(current_round), 2):
                p1 = current_round[i]['name']
                p2 = current_round[i + 1]['name']
                print(f"Match {match_number}: {p1} vs {p2}")
                next_round.append({
                    'name': f"Winner of Match {match_number}",
                    'is_real': True
                })
                match_number += 1
        
        current_round = next_round
        round_num += 1
    
    print()

def format_participant(participant):
    """Format participant name (with partner if doubles)"""
    if not participant:
        return "TBD"
    
    name = participant.get('name', 'Unknown')
    partner = participant.get('partner_name')
    
    if partner:
        return f"{name} / {partner}"
    return name

def main():
    """Main function to generate fixtures"""
    try:
        # Create Supabase client
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        
        print("Fetching registrations from Supabase...\n")
        
        # Fetch all registrations
        response = supabase.table('registrations').select('*').order('created_at').execute()
        registrations = response.data
        
        print(f"Total Registrations: {len(registrations)}\n")
        
        # Group by category
        categories = {
            'menssingles': {"name": "Men's Singles", "participants": []},
            'mensdoubles': {"name": "Men's Doubles", "participants": []},
            'womenssingles': {"name": "Women's Singles", "participants": []},
            'womensdoubles': {"name": "Women's Doubles", "participants": []},
            'mixeddoubles': {"name": "Mixed Doubles", "participants": []}
        }
        
        # Organize participants by category
        for reg in registrations:
            category_key = reg['category'].lower().replace("'", "").replace(" ", "")
            
            if category_key in categories:
                participant = {
                    'name': reg['name'],
                    'email': reg['email'],
                    'partner_name': reg.get('partner_name'),
                    'partner_email': reg.get('partner_email')
                }
                categories[category_key]['participants'].append(participant)
        
        # Generate brackets for each category
        for key, category in categories.items():
            if category['participants']:
                generate_bracket(category['participants'], category['name'])
        
        # Calculate unique players
        unique_players = set()
        for reg in registrations:
            unique_players.add(reg['email'].lower())
            if reg.get('partner_email'):
                unique_players.add(reg['partner_email'].lower())
        
        # Summary
        print("\n" + "=" * 80)
        print("SUMMARY")
        print("=" * 80)
        print(f"Total Registrations: {len(registrations)}")
        print(f"Unique Players: {len(unique_players)}")
        print("-" * 80)
        for key, category in categories.items():
            if category['participants']:
                print(f"{category['name']}: {len(category['participants'])} participants")
        print("=" * 80 + "\n")
        
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

# Made with Bob
