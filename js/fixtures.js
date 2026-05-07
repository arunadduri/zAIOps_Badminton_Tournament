// Tournament Fixtures Data - Static from TOURNAMENT_FIXTURES.md
const fixturesData = {
    mensSingles: {
        title: "Men's Singles",
        players: 25,
        matches: 24,
        rounds: [
            {
                name: "Round 1",
                matches: [
                    { id: 1, player1: "Vijay Kantanavar", player2: "Sathish kumar S" },
                    { id: 2, player1: "Devendar Rao", player2: "Ved" },
                    { id: 3, player1: "Karthik Gunturi", player2: "Rishabh Gupta" },
                    { id: 4, player1: "Sandeep Ambekar", player2: "Patan Amrulla Khan" },
                    { id: 5, player1: "Amit kumar", player2: "Shaikh Sufyan" },
                    { id: 6, player1: "bharathikannan", player2: "Pranesh Sridhar" },
                    { id: 7, player1: "Dharunraj R", player2: "Hariram K" },
                    { id: 8, player1: "Sumit Gaurav", player2: "VARUN PATTNAIK" },
                    { id: 9, player1: "Moorthy M", player2: "Sushant Kumar" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 10, player1: "Winner M1", player2: "Kiran Kumar H N" },
                    { id: 11, player1: "Winner M2", player2: "Manas Manna" },
                    { id: 12, player1: "Winner M3", player2: "Chandan n bhat" },
                    { id: 13, player1: "Winner M4", player2: "Chirag A" },
                    { id: 14, player1: "Winner M5", player2: "Shriram Rao" },
                    { id: 15, player1: "Winner M6", player2: "Riju KK" },
                    { id: 16, player1: "Winner M7", player2: "Arun" },
                    { id: 17, player1: "Winner M8", player2: "Winner M9" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 18, player1: "Winner M10", player2: "Winner M11" },
                    { id: 19, player1: "Winner M12", player2: "Winner M13" },
                    { id: 20, player1: "Winner M14", player2: "Winner M15" },
                    { id: 21, player1: "Winner M16", player2: "Winner M17" }
                ]
            },
            {
                name: "Semifinals",
                matches: [
                    { id: 22, player1: "Winner M18", player2: "Winner M19" },
                    { id: 23, player1: "Winner M20", player2: "Winner M21" }
                ]
            },
            {
                name: "Final",
                matches: [
                    { id: 24, player1: "Winner M22", player2: "Winner M23" }
                ]
            }
        ]
    },
    mensDoubles: {
        title: "Men's Doubles",
        teams: 12,
        matches: 11,
        rounds: [
            {
                name: "Round 1",
                matches: [
                    { id: 1, team1: "Sathish Kumar S / Bharathikannan Kuppan", team2: "Shaikh Sufyan / Hariprasad" },
                    { id: 2, team1: "Dharunraj R / Akhil J", team2: "Amit Kumar / Moorthy M" },
                    { id: 3, team1: "Vijay Kantanavar / Sushant Kumar", team2: "Patan Amrulla Khan / Sandeep Ambekar" },
                    { id: 4, team1: "Sumit Gaurav / Rishabh Gupta", team2: "Pranesh Sridhar / Hariram K" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 5, team1: "Winner M1", team2: "Kiran Kumar H N / Chandan N Bhat" },
                    { id: 6, team1: "Winner M2", team2: "Karthik Gunturi / Arun Adduri" },
                    { id: 7, team1: "Winner M3", team2: "Manas Manna / Chirag A" },
                    { id: 8, team1: "Winner M4", team2: "Riju KK / Shriram Rao" }
                ]
            },
            {
                name: "Semifinals",
                matches: [
                    { id: 9, team1: "Winner M5", team2: "Winner M6" },
                    { id: 10, team1: "Winner M7", team2: "Winner M8" }
                ]
            },
            {
                name: "Final",
                matches: [
                    { id: 11, team1: "Winner M9", team2: "Winner M10" }
                ]
            }
        ]
    },
    womensSingles: {
        title: "Women's Singles",
        players: 19,
        matches: 18,
        rounds: [
            {
                name: "Round 1",
                matches: [
                    { id: 1, player1: "Bhavya Rajeev Joshi", player2: "Prathyusha Chaganti" },
                    { id: 2, player1: "Palak Thareja", player2: "Arya Raj" },
                    { id: 3, player1: "Pooja B", player2: "Shreetama" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 4, player1: "Winner M1", player2: "Aarthy Reddy Sontam" },
                    { id: 5, player1: "Winner M2", player2: "Anupama Menon" },
                    { id: 6, player1: "Asmita Gharat", player2: "Sahithi Budem" },
                    { id: 7, player1: "Winner M3", player2: "Rashi Mathur" },
                    { id: 8, player1: "Farheen Shaik", player2: "Vanathi Ponnasami" },
                    { id: 9, player1: "Amisha Goel", player2: "Adapala Lohitha" },
                    { id: 10, player1: "Sangeeta Hegde", player2: "Manju Nair" },
                    { id: 11, player1: "Debadrita Dey", player2: "Geethika" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 12, player1: "Winner M4", player2: "Winner M5" },
                    { id: 13, player1: "Winner M6", player2: "Winner M7" },
                    { id: 14, player1: "Winner M8", player2: "Winner M9" },
                    { id: 15, player1: "Winner M10", player2: "Winner M11" }
                ]
            },
            {
                name: "Semifinals",
                matches: [
                    { id: 16, player1: "Winner M12", player2: "Winner M13" },
                    { id: 17, player1: "Winner M14", player2: "Winner M15" }
                ]
            },
            {
                name: "Final",
                matches: [
                    { id: 18, player1: "Winner M16", player2: "Winner M17" }
                ]
            }
        ]
    },
    womensDoubles: {
        title: "Women's Doubles",
        teams: 7,
        matches: 8,
        format: "Group A Round Robin + Group B Limited Pool → Final",
        groups: [
            {
                name: "Group A",
                teams: [
                    "Aarthy Reddy Sontam / Sahithi Budem",
                    "Debadrita Dey / Bhavya Joshi",
                    "Vanathi Ponnasami / Geethika Bondalakunta"
                ],
                matches: [
                    { id: 1, team1: "Aarthy Reddy Sontam / Sahithi Budem", team2: "Debadrita Dey / Bhavya Joshi" },
                    { id: 2, team1: "Aarthy Reddy Sontam / Sahithi Budem", team2: "Vanathi Ponnasami / Geethika Bondalakunta" },
                    { id: 3, team1: "Debadrita Dey / Bhavya Joshi", team2: "Vanathi Ponnasami / Geethika Bondalakunta" }
                ]
            },
            {
                name: "Group B",
                teams: [
                    "Farheen Shaik / Anupama Menon",
                    "Sangeeta Hegde / Asmita Gharat",
                    "Shreetama / Rashi Mathur",
                    "Palak Thareja / Pooja B"
                ],
                matches: [
                    { id: 4, team1: "Farheen Shaik / Anupama Menon", team2: "Shreetama / Rashi Mathur" },
                    { id: 5, team1: "Sangeeta Hegde / Asmita Gharat", team2: "Palak Thareja / Pooja B" },
                    { id: 6, team1: "Farheen Shaik / Anupama Menon", team2: "Sangeeta Hegde / Asmita Gharat" },
                    { id: 7, team1: "Shreetama / Rashi Mathur", team2: "Palak Thareja / Pooja B" }
                ]
            }
        ],
        final: { id: 8, team1: "Group A Winner", team2: "Group B Winner" }
    },
    mixedDoubles: {
        title: "Mixed Doubles",
        teams: 19,
        matches: 18,
        rounds: [
            {
                name: "Round 1",
                matches: [
                    { id: 1, team1: "Pooja B / Varun Pattnaik", team2: "Arya Raj / Sandeep Ambekar" },
                    { id: 2, team1: "Dharunraj R / Aarthy Reddy Sontam", team2: "Riju KK / Manju Nair" },
                    { id: 3, team1: "Chirag A / Bhavya Joshi", team2: "Chandan n bhat / Sahithi Budem" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 4, team1: "Winner M1", team2: "Asmita Gharat / Shriram Rao" },
                    { id: 5, team1: "Winner M2", team2: "Winner M3" },
                    { id: 6, team1: "Amisha Goel / Pranesh Sridhar", team2: "Rashi Mathur / Bharathikannan Kuppan" },
                    { id: 7, team1: "Kiran Kumar H N / Vanathi Ponnasami", team2: "Amit Kumar / Geethika Bondalakunta" },
                    { id: 8, team1: "Anupama Menon / Patan Amrulla Khan", team2: "Karthik Gunturi / Palak Thareja" },
                    { id: 9, team1: "Rishabh Gupta / Prathyusha Chaganti", team2: "Farheen Shaik / Arun Adduri" },
                    { id: 10, team1: "Sangeeta Hegde / Sushant Kumar", team2: "Adapala Lohitha / Sathish Kumar S" },
                    { id: 11, team1: "Shreetama / Akhil J", team2: "Manas Manna / Debadrita Dey" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 12, team1: "Winner M4", team2: "Winner M5" },
                    { id: 13, team1: "Winner M6", team2: "Winner M7" },
                    { id: 14, team1: "Winner M8", team2: "Winner M9" },
                    { id: 15, team1: "Winner M10", team2: "Winner M11" }
                ]
            },
            {
                name: "Semifinals",
                matches: [
                    { id: 16, team1: "Winner M12", team2: "Winner M13" },
                    { id: 17, team1: "Winner M14", team2: "Winner M15" }
                ]
            },
            {
                name: "Final",
                matches: [
                    { id: 18, team1: "Winner M16", team2: "Winner M17" }
                ]
            }
        ]
    }
};

// Initialize curated UI match scheduling
let globalSchedule = null;

function initializeScheduling() {
    if (globalSchedule) return globalSchedule;

    const schedule = new Map();
    const curatedSchedule = {
        mensSingles_1: { time: '11:00 AM', court: 6 },
        mensSingles_2: { time: '11:00 AM', court: 4 },
        mensSingles_3: { time: '11:20 AM', court: 6 },
        mensSingles_4: { time: '11:40 AM', court: 1 },
        mensSingles_5: { time: '12:00 PM', court: 6 },
        mensSingles_6: { time: '11:40 AM', court: 4 },
        mensSingles_7: { time: '11:40 AM', court: 6 },
        mensSingles_8: { time: '11:40 AM', court: 5 },
        mensSingles_9: { time: '11:20 AM', court: 4 },
        mensSingles_10: { time: '12:20 PM', court: 4 },
        mensSingles_11: { time: '12:20 PM', court: 5 },
        mensSingles_12: { time: '12:20 PM', court: 6 },
        mensSingles_13: { time: '1:00 PM', court: 6 },
        mensSingles_14: { time: '1:20 PM', court: 6 },
        mensSingles_15: { time: '1:40 PM', court: 3 },
        mensSingles_16: { time: '1:40 PM', court: 4 },
        mensSingles_17: { time: '1:40 PM', court: 5 },
        mensSingles_18: { time: '2:20 PM', court: 6 },
        mensSingles_19: { time: '2:40 PM', court: 1 },
        mensSingles_20: { time: '2:40 PM', court: 2 },
        mensSingles_21: { time: '2:40 PM', court: 3 },
        mensSingles_22: { time: '3:00 PM', court: 4 },
        mensSingles_23: { time: '3:00 PM', court: 5 },
        mensSingles_24: { time: '3:20 PM', court: 1 },

        mensDoubles_1: { time: '11:00 AM', court: 2 },
        mensDoubles_2: { time: '11:00 AM', court: 2 },
        mensDoubles_3: { time: '11:00 AM', court: 2 },
        mensDoubles_4: { time: '11:20 AM', court: 2 },
        mensDoubles_5: { time: '1:20 PM', court: 3 },
        mensDoubles_6: { time: '1:20 PM', court: 4 },
        mensDoubles_7: { time: '1:20 PM', court: 5 },
        mensDoubles_8: { time: '1:40 PM', court: 2 },
        mensDoubles_9: { time: '2:40 PM', court: 4 },
        mensDoubles_10: { time: '2:40 PM', court: 5 },
        mensDoubles_11: { time: '3:20 PM', court: 2 },

        womensSingles_1: { time: '11:40 AM', court: 3 },
        womensSingles_2: { time: '11:20 AM', court: 3 },
        womensSingles_3: { time: '11:00 AM', court: 5 },
        womensSingles_4: { time: '12:20 PM', court: 1 },
        womensSingles_5: { time: '12:20 PM', court: 2 },
        womensSingles_6: { time: '12:00 PM', court: 1 },
        womensSingles_7: { time: '12:20 PM', court: 3 },
        womensSingles_8: { time: '12:00 PM', court: 2 },
        womensSingles_9: { time: '12:00 PM', court: 3 },
        womensSingles_10: { time: '12:00 PM', court: 4 },
        womensSingles_11: { time: '12:00 PM', court: 5 },
        womensSingles_12: { time: '2:00 PM', court: 3 },
        womensSingles_13: { time: '2:00 PM', court: 4 },
        womensSingles_14: { time: '2:00 PM', court: 5 },
        womensSingles_15: { time: '2:00 PM', court: 6 },
        womensSingles_16: { time: '2:40 PM', court: 6 },
        womensSingles_17: { time: '3:00 PM', court: 1 },
        womensSingles_18: { time: '3:20 PM', court: 4 },

        womensDoubles_1: { time: '11:00 AM', court: 1 },
        womensDoubles_2: { time: '11:20 AM', court: 1 },
        womensDoubles_3: { time: '11:40 AM', court: 1 },
        womensDoubles_4: { time: '1:40 PM', court: 6 },
        womensDoubles_5: { time: '2:00 PM', court: 1 },
        womensDoubles_6: { time: '2:00 PM', court: 2 },
        womensDoubles_7: { time: '2:20 PM', court: 1 },
        womensDoubles_8: { time: '3:20 PM', court: 3 },

        mixedDoubles_1: { time: '11:00 AM', court: 3 },
        mixedDoubles_2: { time: '11:20 AM', court: 5 },
        mixedDoubles_3: { time: '11:40 AM', court: 2 },
        mixedDoubles_4: { time: '1:20 PM', court: 1 },
        mixedDoubles_5: { time: '1:20 PM', court: 2 },
        mixedDoubles_6: { time: '1:00 PM', court: 1 },
        mixedDoubles_7: { time: '1:40 PM', court: 1 },
        mixedDoubles_8: { time: '1:00 PM', court: 2 },
        mixedDoubles_9: { time: '1:00 PM', court: 3 },
        mixedDoubles_10: { time: '1:00 PM', court: 4 },
        mixedDoubles_11: { time: '1:00 PM', court: 5 },
        mixedDoubles_12: { time: '2:20 PM', court: 2 },
        mixedDoubles_13: { time: '2:20 PM', court: 3 },
        mixedDoubles_14: { time: '2:20 PM', court: 4 },
        mixedDoubles_15: { time: '2:20 PM', court: 5 },
        mixedDoubles_16: { time: '3:00 PM', court: 2 },
        mixedDoubles_17: { time: '3:00 PM', court: 3 },
        mixedDoubles_18: { time: '3:20 PM', court: 5 }
    };

    Object.entries(curatedSchedule).forEach(([matchKey, matchSchedule]) => {
        schedule.set(matchKey, matchSchedule);
    });

    console.log(`Loaded curated UI schedule with ${schedule.size} matches`);
    globalSchedule = schedule;
    return schedule;
}

// Switch between fixture tabs
function switchFixturesTab(category, element) {
    // Remove active class from all tabs
    document.querySelectorAll('.registration-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    if (element) {
        element.classList.add('active');
    } else {
        // Fallback: find and activate the correct tab
        const tabs = document.querySelectorAll('.registration-tab');
        tabs.forEach(tab => {
            if (tab.getAttribute('onclick').includes(category)) {
                tab.classList.add('active');
            }
        });
    }
    
    // Load fixtures for the selected category
    loadFixtures(category);
}

// Load fixtures for a category
function loadFixtures(category) {
    const container = document.getElementById('fixturesContainer');
    const loading = document.getElementById('fixturesLoading');
    
    if (!container) {
        console.error('Fixtures container not found');
        return;
    }
    
    if (loading) {
        loading.style.display = 'block';
    }
    
    setTimeout(() => {
        let html = '';
        
        switch(category) {
            case 'mensSingles':
                html = renderSinglesFixtures(fixturesData.mensSingles, 'mensSingles');
                break;
            case 'mensDoubles':
                html = renderDoublesFixtures(fixturesData.mensDoubles, 'mensDoubles');
                break;
            case 'womensSingles':
                html = renderSinglesFixtures(fixturesData.womensSingles, 'womensSingles');
                break;
            case 'womensDoubles':
                html = renderWomensDoublesFixtures(fixturesData.womensDoubles, 'womensDoubles');
                break;
            case 'mixedDoubles':
                html = renderDoublesFixtures(fixturesData.mixedDoubles, 'mixedDoubles');
                break;
        }
        
        container.innerHTML = html;
        if (loading) {
            loading.style.display = 'none';
        }
    }, 300);
}

// Render singles fixtures
function renderSinglesFixtures(data, categoryKey) {
    // Generate format path based on rounds
    const roundNames = data.rounds.map(r => r.name).join(' → ');
    
    let html = `
        <div class="category-header-enhanced">
            <div class="category-header-left">
                <h2 class="category-title-enhanced">${data.title}</h2>
                <div class="category-badge-enhanced">${data.players} Players</div>
            </div>
            <div class="format-path-inline">${roundNames}</div>
        </div>
    `;
    
    data.rounds.forEach(round => {
        html += `
            <div class="round-section">
                <h3 class="round-title">${round.name} <span class="match-count">${round.matches.length} matches</span></h3>
                <div class="matches-grid">
        `;
        
        round.matches.forEach((match, index) => {
            const schedule = globalSchedule || initializeScheduling();
            const compositeKey = `${categoryKey}_${match.id}`;
            const matchSchedule = schedule.get(compositeKey) || { time: '11:00 AM', court: 1 };
            const time = matchSchedule.time;
            const court = matchSchedule.court;
            
            html += `
                <div class="match-card">
                    <div class="match-header">
                        <div class="match-id">M${match.id}</div>
                        <div class="match-meta">
                            <span class="match-court">Court ${court}</span>
                            <span class="match-time">${time}</span>
                        </div>
                    </div>
                    <div class="match-players">
                        <div class="player-row">
                            <span class="player-name">${match.player1}</span>
                        </div>
                        <div class="vs-divider">VS</div>
                        <div class="player-row">
                            <span class="player-name">${match.player2}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    return html;
}

// Render doubles fixtures
function renderDoublesFixtures(data, categoryKey) {
    // Generate format path based on rounds
    const roundNames = data.rounds.map(r => r.name).join(' → ');
    
    let html = `
        <div class="category-header-enhanced">
            <div class="category-header-left">
                <h2 class="category-title-enhanced">${data.title}</h2>
                <div class="category-badge-enhanced">${data.teams} Teams</div>
            </div>
            <div class="format-path-inline">${roundNames}</div>
        </div>
    `;
    
    data.rounds.forEach(round => {
        html += `
            <div class="round-section">
                <h3 class="round-title">${round.name} <span class="match-count">${round.matches.length} matches</span></h3>
                <div class="matches-grid">
        `;
        
        round.matches.forEach((match, index) => {
            const schedule = globalSchedule || initializeScheduling();
            const compositeKey = `${categoryKey}_${match.id}`;
            const matchSchedule = schedule.get(compositeKey) || { time: '11:00 AM', court: 1 };
            const time = matchSchedule.time;
            const court = matchSchedule.court;
            
            const team1Display = match.team1.replace(' / ', ' • ');
            const team2Display = match.team2.replace(' / ', ' • ');
            
            html += `
                <div class="match-card">
                    <div class="match-header">
                        <div class="match-id">M${match.id}</div>
                        <div class="match-meta">
                            <span class="match-court">Court ${court}</span>
                            <span class="match-time">${time}</span>
                        </div>
                    </div>
                    <div class="match-players">
                        <div class="player-row">
                            <span class="player-name">${team1Display}</span>
                        </div>
                        <div class="vs-divider">VS</div>
                        <div class="player-row">
                            <span class="player-name">${team2Display}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    return html;
}

// Render women's doubles fixtures (group format)
function renderWomensDoublesFixtures(data, categoryKey) {
    let html = `
        <div class="category-header-enhanced">
            <div class="category-header-left">
                <h2 class="category-title-enhanced">${data.title}</h2>
                <div class="category-badge-enhanced">${data.teams} Teams</div>
            </div>
            <div class="format-path-inline">${data.format}</div>
        </div>
    `;
    
    data.groups.forEach(group => {
        html += `
            <div class="round-section">
                <h3 class="round-title">${group.name} - Round Robin <span class="match-count">${group.matches.length} matches</span></h3>
                <div class="group-teams">
                    <span class="group-teams-label">Teams (${group.teams.length})</span>
                    <div class="group-teams-grid">
                        ${group.teams.map(team => `<div class="group-team">${team.replace(' / ', ' & ')}</div>`).join('')}
                    </div>
                </div>
                <div class="matches-grid">
        `;
        
        group.matches.forEach((match, index) => {
            const schedule = globalSchedule || initializeScheduling();
            const compositeKey = `${categoryKey}_${match.id}`;
            const matchSchedule = schedule.get(compositeKey) || { time: '11:00 AM', court: 1 };
            const time = matchSchedule.time;
            const court = matchSchedule.court;
            
            const team1Display = match.team1.replace(' / ', ' • ');
            const team2Display = match.team2.replace(' / ', ' • ');
            
            html += `
                <div class="match-card">
                    <div class="match-header">
                        <div class="match-id">M${match.id}</div>
                        <div class="match-meta">
                            <span class="match-court">Court ${court}</span>
                            <span class="match-time">${time}</span>
                        </div>
                    </div>
                    <div class="match-players">
                        <div class="player-row">
                            <span class="player-name">${team1Display}</span>
                        </div>
                        <div class="vs-divider">VS</div>
                        <div class="player-row">
                            <span class="player-name">${team2Display}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    // Final match with dynamic scheduling
    const schedule = globalSchedule || initializeScheduling();
    const finalCompositeKey = `${categoryKey}_${data.final.id}`;
    const finalSchedule = schedule.get(finalCompositeKey) || { time: '3:00 PM', court: 1 };
    const finalTime = finalSchedule.time;
    const finalCourt = finalSchedule.court;
    
    html += `
        <div class="round-section">
            <h3 class="round-title">Final <span class="match-count">1 match</span></h3>
            <div class="matches-grid">
                <div class="match-card">
                    <div class="match-header">
                        <div class="match-id">M${data.final.id}</div>
                        <div class="match-meta">
                            <span class="match-court">🏸 Court ${finalCourt}</span>
                            <span class="match-time">🕐 ${finalTime}</span>
                        </div>
                    </div>
                    <div class="match-players">
                        <div class="player-row">
                            <span class="player-name">${data.final.team1}</span>
                        </div>
                        <div class="vs-divider">VS</div>
                        <div class="player-row">
                            <span class="player-name">${data.final.team2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Filter fixtures by search
function filterFixtures(searchTerm) {
    const matchCards = document.querySelectorAll('.match-card');
    const term = searchTerm.toLowerCase();
    
    matchCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize fixtures on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load Men's Singles by default when fixtures section is shown
    const fixturesSection = document.getElementById('fixturesSection');
    if (fixturesSection) {
        loadFixtures('mensSingles');
    }
});

// Made with Bob
