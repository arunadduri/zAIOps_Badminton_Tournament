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
                    { id: 2, player1: "Amit kumar", player2: "Ved" },
                    { id: 3, player1: "Moorthy M", player2: "Riju KK" },
                    { id: 4, player1: "Sushant Kumar", player2: "Patan Amrulla Khan" },
                    { id: 5, player1: "Devendar Rao", player2: "Shaikh Sufyan" },
                    { id: 6, player1: "bharathikannan", player2: "Pranav Kandukuru" },
                    { id: 7, player1: "Dharunraj R", player2: "Hariram K" },
                    { id: 8, player1: "Sumit Gaurav", player2: "VARUN PATTNAIK" },
                    { id: 9, player1: "Sandeep Ambekar", player2: "Devendar Rao" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 10, player1: "Kiran Kumar H N", player2: "Winner M1" },
                    { id: 11, player1: "Winner M2", player2: "Manas Manna" },
                    { id: 12, player1: "Chandan n bhat", player2: "Winner M3" },
                    { id: 13, player1: "Winner M4", player2: "Chirag A" },
                    { id: 14, player1: "Shriram Rao", player2: "Winner M9" },
                    { id: 15, player1: "Winner M6", player2: "Rishabh Gupta" },
                    { id: 16, player1: "Arun", player2: "Winner M7" },
                    { id: 17, player1: "Winner M8", player2: "Karthik Gunturi" }
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
                    { id: 1, team1: "Kiran Kumar H N / Chandan N Bhat", team2: "Sathish kumar S / Bharathikannan" },
                    { id: 2, team1: "Shaikh Sufyan / Hariprasad", team2: "Dharunraj R / Akhil J" },
                    { id: 3, team1: "Manas Manna / Chirag A", team2: "Amit Kumar / Moorthy M" },
                    { id: 4, team1: "Sumit Gaurav / Rishabh Gupta", team2: "Karthik / Arun" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 5, team1: "Winner M1", team2: "Winner M2" },
                    { id: 6, team1: "Patan Amrulla Khan / Sandeep Ambekar", team2: "Sushant Kumar / Ravindra Rao" },
                    { id: 7, team1: "Winner M3", team2: "Winner M4" },
                    { id: 8, team1: "Riju KK / Shriram", team2: "Pranav Kandukuru / Hariram K" }
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
        players: 17,
        matches: 16,
        rounds: [
            {
                name: "Round 1",
                matches: [
                    { id: 1, player1: "Bhavya Rajeev Joshi", player2: "Prathyusha Chaganti" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 2, player1: "Winner M1", player2: "Aarthy Reddy Sontam" },
                    { id: 3, player1: "Arya Raj", player2: "Anupama Menon" },
                    { id: 4, player1: "Asmita Gharat", player2: "Sahithi Budem" },
                    { id: 5, player1: "Shreetama", player2: "Rashi Mathur" },
                    { id: 6, player1: "Farheen Shaik", player2: "Vanathi Ponnasami" },
                    { id: 7, player1: "Amisha Goel", player2: "Adapala Lohitha" },
                    { id: 8, player1: "Sangeeta Hegde", player2: "Manju Nair" },
                    { id: 9, player1: "Geethika", player2: "Debadrita Dey" }
                ]
            },
            {
                name: "Quarterfinals",
                matches: [
                    { id: 10, player1: "Winner M2", player2: "Winner M3" },
                    { id: 11, player1: "Winner M4", player2: "Winner M5" },
                    { id: 12, player1: "Winner M6", player2: "Winner M7" },
                    { id: 13, player1: "Winner M8", player2: "Winner M9" }
                ]
            },
            {
                name: "Semifinals",
                matches: [
                    { id: 14, player1: "Winner M10", player2: "Winner M11" },
                    { id: 15, player1: "Winner M12", player2: "Winner M13" }
                ]
            },
            {
                name: "Final",
                matches: [
                    { id: 16, player1: "Winner M14", player2: "Winner M15" }
                ]
            }
        ]
    },
    womensDoubles: {
        title: "Women's Doubles",
        teams: 6,
        matches: 7,
        format: "2 Groups → Round Robin → Final",
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
                    "Sangeeta Hegde / Asmita Garat",
                    "Shreetama / Amisha Goel"
                ],
                matches: [
                    { id: 4, team1: "Farheen Shaik / Anupama Menon", team2: "Sangeeta Hegde / Asmita Garat" },
                    { id: 5, team1: "Farheen Shaik / Anupama Menon", team2: "Shreetama / Amisha Goel" },
                    { id: 6, team1: "Sangeeta Hegde / Asmita Garat", team2: "Shreetama / Amisha Goel" }
                ]
            }
        ],
        final: { id: 7, team1: "Group A Winner", team2: "Group B Winner" }
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
                    { id: 3, team1: "Chirag A / Bhavya Joshi", team2: "Chandan n bhat / Sahithi budem" }
                ]
            },
            {
                name: "Round 2",
                matches: [
                    { id: 4, team1: "Winner M1", team2: "Asmita Gharat / Shriram Rao" },
                    { id: 5, team1: "Winner M2", team2: "Winner M3" },
                    { id: 6, team1: "Amisha Goel / Pranav Kandukuru", team2: "Rashi Mathur / Bharathikannan kuppan" },
                    { id: 7, team1: "Kiran Kumar H N / Vanathi Ponnasami", team2: "Amit Kumar / Geethika Bondalakunta" },
                    { id: 8, team1: "Anupama Menon / Patan Amrulla Khan", team2: "Karthik Gunturi / Palak Thareja" },
                    { id: 9, team1: "Rishabh Gupta / Prathyusha Chaganti", team2: "Farheen Shaik / Arun" },
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

// Initialize match scheduling with conflict detection
let globalSchedule = null;

function initializeScheduling() {
    if (globalSchedule) return globalSchedule;
    
    const schedule = new Map(); // matchId -> {time, court}
    const playerBusy = new Map(); // player -> [times]
    
    // Time slots (30 min intervals, skipping lunch 12:30-1:00 PM)
    const times = [
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        // LUNCH BREAK 1:00 PM
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM'
    ];
    
    let currentTimeIdx = 0;
    let currentCourt = 1;
    let matchesScheduled = 0;
    const totalCourts = 6;
    
    function getPlayers(match, isDoubles) {
        const players = [];
        if (isDoubles) {
            ['team1', 'team2'].forEach(key => {
                if (match[key] && !match[key].startsWith('Winner') && !match[key].includes('Group')) {
                    players.push(...match[key].split('/').map(p => p.trim().toLowerCase()));
                }
            });
        } else {
            ['player1', 'player2'].forEach(key => {
                if (match[key] && !match[key].startsWith('Winner')) {
                    players.push(match[key].trim().toLowerCase());
                }
            });
        }
        return players;
    }
    
    function canSchedule(players, time) {
        return players.every(p => !playerBusy.has(p) || !playerBusy.get(p).includes(time));
    }
    
    function scheduleMatch(match, isDoubles, categoryKey) {
        const players = getPlayers(match, isDoubles);
        const matchKey = `${categoryKey}_${match.id}`;
        
        // Ensure we don't go past available time slots
        if (currentTimeIdx >= times.length) {
            console.warn(`No more time slots available for match ${matchKey}`);
            currentTimeIdx = times.length - 1;
        }
        
        // Try to schedule at current time slot
        if (canSchedule(players, times[currentTimeIdx])) {
            schedule.set(matchKey, { time: times[currentTimeIdx], court: currentCourt });
            players.forEach(p => {
                if (!playerBusy.has(p)) playerBusy.set(p, []);
                playerBusy.get(p).push(times[currentTimeIdx]);
            });
            matchesScheduled++;
            
            // Move to next court
            currentCourt++;
            if (currentCourt > totalCourts) {
                currentCourt = 1;
                currentTimeIdx++;
            }
        } else {
            // Find next available time slot for these players
            let scheduled = false;
            for (let i = currentTimeIdx; i < times.length && !scheduled; i++) {
                if (canSchedule(players, times[i])) {
                    schedule.set(matchKey, { time: times[i], court: currentCourt });
                    players.forEach(p => {
                        if (!playerBusy.has(p)) playerBusy.set(p, []);
                        playerBusy.get(p).push(times[i]);
                    });
                    matchesScheduled++;
                    currentCourt++;
                    if (currentCourt > totalCourts) {
                        currentCourt = 1;
                        currentTimeIdx = i + 1;
                    }
                    scheduled = true;
                }
            }
            
            if (!scheduled) {
                // Fallback: force schedule at next available slot
                if (currentTimeIdx < times.length) {
                    schedule.set(matchKey, { time: times[currentTimeIdx], court: currentCourt });
                    matchesScheduled++;
                    currentCourt++;
                    if (currentCourt > totalCourts) {
                        currentCourt = 1;
                        currentTimeIdx++;
                    }
                }
            }
        }
    }
    
    // Schedule all matches
    [
        { key: 'mensSingles', data: fixturesData.mensSingles, isDoubles: false },
        { key: 'womensSingles', data: fixturesData.womensSingles, isDoubles: false },
        { key: 'mensDoubles', data: fixturesData.mensDoubles, isDoubles: true },
        { key: 'womensDoubles', data: fixturesData.womensDoubles, isDoubles: true },
        { key: 'mixedDoubles', data: fixturesData.mixedDoubles, isDoubles: true }
    ].forEach(({ key, data, isDoubles }) => {
        if (data.rounds) {
            data.rounds.forEach(round => {
                round.matches.forEach(match => scheduleMatch(match, isDoubles, key));
            });
        }
        if (data.groups) {
            data.groups.forEach(group => {
                group.matches.forEach(match => scheduleMatch(match, isDoubles, key));
            });
            if (data.final) scheduleMatch(data.final, isDoubles, key);
        }
    });
    
    console.log(`Scheduled ${matchesScheduled} matches across ${times.length} time slots`);
    console.log(`Schedule size: ${schedule.size}`);
    
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
