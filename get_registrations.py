#!/usr/bin/env python3
"""
Script to fetch all badminton registrations from Supabase
"""

import requests
import json
from datetime import datetime
from collections import defaultdict

# Supabase Configuration
SUPABASE_URL = 'https://yvzfnotfpmoitzyljbfd.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2emZub3RmcG1vaXR6eWxqYmZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTQzODIsImV4cCI6MjA5MTY3MDM4Mn0.bSN6hGtv1keJMFjjPUBGD6d4Vg6Ks3YuuFA7E8UArfE'

def fetch_registrations():
    """Fetch all registrations from Supabase"""
    url = f'{SUPABASE_URL}/rest/v1/registrations'
    headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': f'Bearer {SUPABASE_KEY}',
        'Content-Type': 'application/json'
    }
    
    params = {
        'order': 'created_at.desc'
    }
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f'Error fetching registrations: {e}')
        return None

def display_registrations(data):
    """Display registrations in a formatted way"""
    if not data:
        print('No registrations found.')
        return
    
    print(f'\nTotal Registrations: {len(data)}\n')
    print('=' * 100)
    
    # Category labels
    category_labels = {
        'mensSingles': "Men's Singles",
        'mensDoubles': "Men's Doubles",
        'womensSingles': "Women's Singles",
        'womensDoubles': "Women's Doubles",
        'mixedDoubles': "Mixed Doubles"
    }
    
    # Group by category
    categories = defaultdict(list)
    for reg in data:
        categories[reg.get('category', 'unknown')].append(reg)
    
    # Display by category
    for category in ['mensSingles', 'mensDoubles', 'womensSingles', 'womensDoubles', 'mixedDoubles']:
        registrations = categories.get(category, [])
        if registrations:
            print(f"\n{category_labels.get(category, category)} ({len(registrations)} registrations)")
            print('-' * 100)
            
            for idx, reg in enumerate(registrations, 1):
                print(f"{idx}. {reg.get('name', 'N/A')} ({reg.get('email', 'N/A')})")
                
                if reg.get('partner_name') and reg.get('partner_email'):
                    print(f"   Partner: {reg['partner_name']} ({reg['partner_email']})")
                
                if reg.get('created_at'):
                    try:
                        dt = datetime.fromisoformat(reg['created_at'].replace('Z', '+00:00'))
                        print(f"   Registered: {dt.strftime('%d %b %Y, %I:%M %p')}")
                    except:
                        print(f"   Registered: {reg['created_at']}")
                
                print()
    
    # Summary statistics
    print('\n' + '=' * 100)
    print('\nSUMMARY:')
    print('-' * 100)
    
    # Unique participants
    unique_emails = set()
    for reg in data:
        if reg.get('email'):
            unique_emails.add(reg['email'].lower())
        if reg.get('partner_email'):
            unique_emails.add(reg['partner_email'].lower())
    
    print(f"Total Unique Participants: {len(unique_emails)}")
    print(f"Total Category Registrations: {len(data)}")
    
    for category, registrations in categories.items():
        if registrations:
            label = category_labels.get(category, category)
            print(f"  - {label}: {len(registrations)}")
    
    # Gender breakdown
    male_count = sum(1 for r in data if r.get('gender') == 'Male')
    female_count = sum(1 for r in data if r.get('gender') == 'Female')
    
    print(f"\nGender Distribution:")
    print(f"  - Male: {male_count} registrations")
    print(f"  - Female: {female_count} registrations")
    
    print('\n' + '=' * 100)
    
    # List all unique participants
    print('\n\nALL REGISTERED PARTICIPANTS:')
    print('-' * 100)
    
    # Create a dict of all participants with their details
    participants = {}
    for reg in data:
        email = reg.get('email', '').lower()
        if email and email not in participants:
            participants[email] = {
                'name': reg.get('name', 'N/A'),
                'email': email,
                'gender': reg.get('gender', 'N/A'),
                'categories': []
            }
        if email in participants:
            participants[email]['categories'].append(category_labels.get(reg.get('category'), reg.get('category', 'Unknown')))
        
        # Add partner if exists
        partner_email = reg.get('partner_email', '').lower()
        if partner_email and partner_email not in participants:
            participants[partner_email] = {
                'name': reg.get('partner_name', 'N/A'),
                'email': partner_email,
                'gender': 'N/A',  # Partner gender not stored
                'categories': []
            }
    
    # Sort by name
    sorted_participants = sorted(participants.values(), key=lambda x: x['name'])
    
    for idx, participant in enumerate(sorted_participants, 1):
        print(f"{idx}. {participant['name']}")
        print(f"   Email: {participant['email']}")
        print(f"   Gender: {participant['gender']}")
        if participant['categories']:
            print(f"   Categories: {', '.join(set(participant['categories']))}")
        print()
    
    print('=' * 100)

def main():
    print('Fetching all badminton registrations...\n')
    data = fetch_registrations()
    
    if data is not None:
        display_registrations(data)
    else:
        print('Failed to fetch registrations.')

if __name__ == '__main__':
    main()

# Made with Bob
