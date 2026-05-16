// Script to fetch all badminton registrations from Supabase
const { createClient } = require('@supabase/supabase-js');

// Supabase Configuration
const SUPABASE_URL = 'https://yvzfnotfpmoitzyljbfd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2emZub3RmcG1vaXR6eWxqYmZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTQzODIsImV4cCI6MjA5MTY3MDM4Mn0.bSN6hGtv1keJMFjjPUBGD6d4Vg6Ks3YuuFA7E8UArfE';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function getAllRegistrations() {
    try {
        console.log('Fetching all badminton registrations...\n');
        
        // Fetch all registrations
        const { data, error } = await supabase
            .from('registrations')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching registrations:', error);
            return;
        }
        
        if (!data || data.length === 0) {
            console.log('No registrations found.');
            return;
        }
        
        console.log(`Total Registrations: ${data.length}\n`);
        console.log('='.repeat(100));
        
        // Group by category
        const categories = {
            'mensSingles': [],
            'mensDoubles': [],
            'womensSingles': [],
            'womensDoubles': [],
            'mixedDoubles': []
        };
        
        data.forEach(reg => {
            if (categories[reg.category]) {
                categories[reg.category].push(reg);
            }
        });
        
        // Display by category
        const categoryLabels = {
            'mensSingles': "Men's Singles",
            'mensDoubles': "Men's Doubles",
            'womensSingles': "Women's Singles",
            'womensDoubles': "Women's Doubles",
            'mixedDoubles': "Mixed Doubles"
        };
        
        for (const [category, registrations] of Object.entries(categories)) {
            if (registrations.length > 0) {
                console.log(`\n${categoryLabels[category]} (${registrations.length} registrations)`);
                console.log('-'.repeat(100));
                
                registrations.forEach((reg, index) => {
                    console.log(`${index + 1}. ${reg.name} (${reg.email})`);
                    if (reg.partner_name && reg.partner_email) {
                        console.log(`   Partner: ${reg.partner_name} (${reg.partner_email})`);
                    }
                    if (reg.created_at) {
                        const date = new Date(reg.created_at);
                        console.log(`   Registered: ${date.toLocaleString('en-IN')}`);
                    }
                    console.log();
                });
            }
        }
        
        // Summary statistics
        console.log('\n' + '='.repeat(100));
        console.log('\nSUMMARY:');
        console.log('-'.repeat(100));
        
        // Unique participants
        const uniqueEmails = new Set();
        data.forEach(reg => {
            uniqueEmails.add(reg.email.toLowerCase());
            if (reg.partner_email) {
                uniqueEmails.add(reg.partner_email.toLowerCase());
            }
        });
        
        console.log(`Total Unique Participants: ${uniqueEmails.size}`);
        console.log(`Total Category Registrations: ${data.length}`);
        
        Object.entries(categories).forEach(([category, regs]) => {
            if (regs.length > 0) {
                console.log(`  - ${categoryLabels[category]}: ${regs.length}`);
            }
        });
        
        // Gender breakdown
        const maleCount = data.filter(r => r.gender === 'Male').length;
        const femaleCount = data.filter(r => r.gender === 'Female').length;
        console.log(`\nGender Distribution:`);
        console.log(`  - Male: ${maleCount} registrations`);
        console.log(`  - Female: ${femaleCount} registrations`);
        
        console.log('\n' + '='.repeat(100));
        
    } catch (error) {
        console.error('Unexpected error:', error);
    }
}

// Run the script
getAllRegistrations();

// Made with Bob
