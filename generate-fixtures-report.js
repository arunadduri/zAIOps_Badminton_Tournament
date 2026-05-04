// Script to generate fixtures report from Supabase data
// Run this with: node generate-fixtures-report.js

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration (you'll need to add your credentials)
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Shuffle array for random seeding
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Calculate next power of 2
function getNextPowerOf2(n) {
    return Math.pow(2, Math.ceil(Math.log2(n)));
}

// Generate knockout bracket
function generateKnockoutBracket(participants, categoryName) {
    const bracketSize = getNextPowerOf2(participants.length);
    const byes = bracketSize - participants.length;
    
    console.log(`\n${'='.repeat(80)}`);
    console.log(`${categoryName.toUpperCase()}`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Total Participants: ${participants.length}`);
    console.log(`Bracket Size: ${bracketSize}`);
    console.log(`BYEs: ${byes}`);
    console.log(`${'='.repeat(80)}\n`);
    
    // Shuffle for random seeding
    const shuffled = shuffleArray(participants);
    
    // Generate all rounds
    const totalRounds = Math.log2(bracketSize);
    let currentRound = [];
    let matchNumber = 1;
    
    // Round 1
    console.log(`ROUND 1 (${bracketSize / 2} matches)`);
    console.log('-'.repeat(80));
    
    for (let i = 0; i < bracketSize / 2; i++) {
        const p1 = i * 2 < shuffled.length ? shuffled[i * 2] : null;
        const p2 = i * 2 + 1 < shuffled.length ? shuffled[i * 2 + 1] : null;
        
        const p1Name = p1 ? (p1.partnerName ? `${p1.name} / ${p1.partnerName}` : p1.name) : 'TBD';
        const p2Name = p2 ? (p2.partnerName ? `${p2.name} / ${p2.partnerName}` : p2.name) : 'TBD';
        
        if (!p2) {
            console.log(`Match ${matchNumber}: ${p1Name} (BYE - Auto advances)`);
            currentRound.push({ winner: p1Name, matchNumber });
        } else {
            console.log(`Match ${matchNumber}: ${p1Name} vs ${p2Name}`);
            currentRound.push({ p1: p1Name, p2: p2Name, matchNumber });
        }
        matchNumber++;
    }
    
    // Subsequent rounds
    for (let round = 2; round <= totalRounds; round++) {
        const roundName = round === totalRounds ? 'FINAL' : 
                         round === totalRounds - 1 ? 'SEMI-FINALS' : 
                         round === totalRounds - 2 ? 'QUARTER-FINALS' : 
                         `ROUND ${round}`;
        
        console.log(`\n${roundName} (${currentRound.length / 2} matches)`);
        console.log('-'.repeat(80));
        
        const nextRound = [];
        for (let i = 0; i < currentRound.length; i += 2) {
            const match1 = currentRound[i];
            const match2 = currentRound[i + 1];
            
            const p1 = match1.winner || `Winner of Match ${match1.matchNumber}`;
            const p2 = match2 ? (match2.winner || `Winner of Match ${match2.matchNumber}`) : 'TBD';
            
            console.log(`Match ${matchNumber}: ${p1} vs ${p2}`);
            nextRound.push({ p1, p2, matchNumber });
            matchNumber++;
        }
        
        currentRound = nextRound;
    }
    
    console.log('\n');
}

// Main function
async function generateFixturesReport() {
    try {
        console.log('Fetching registrations from Supabase...\n');
        
        const { data: registrations, error } = await supabase
            .from('registrations')
            .select('*')
            .order('created_at', { ascending: true });
        
        if (error) throw error;
        
        console.log(`Total Registrations: ${registrations.length}\n`);
        
        // Group by category
        const categories = {
            'menssingles': { name: "Men's Singles", participants: [] },
            'mensdoubles': { name: "Men's Doubles", participants: [] },
            'womenssingles': { name: "Women's Singles", participants: [] },
            'womensdoubles': { name: "Women's Doubles", participants: [] },
            'mixeddoubles': { name: "Mixed Doubles", participants: [] }
        };
        
        // Organize participants
        registrations.forEach(reg => {
            const category = reg.category.toLowerCase().replace(/[^a-z]/g, '');
            if (categories[category]) {
                categories[category].participants.push({
                    name: reg.name,
                    email: reg.email,
                    partnerName: reg.partner_name,
                    partnerEmail: reg.partner_email
                });
            }
        });
        
        // Generate brackets for each category
        Object.keys(categories).forEach(key => {
            const category = categories[key];
            if (category.participants.length > 0) {
                generateKnockoutBracket(category.participants, category.name);
            }
        });
        
        // Summary
        console.log('\n' + '='.repeat(80));
        console.log('SUMMARY');
        console.log('='.repeat(80));
        Object.keys(categories).forEach(key => {
            const category = categories[key];
            if (category.participants.length > 0) {
                console.log(`${category.name}: ${category.participants.length} participants`);
            }
        });
        console.log('='.repeat(80) + '\n');
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Run the report
generateFixturesReport();

// Made with Bob
