// Script to generate conflict-free match schedule
// Run with: node generate_schedule.js

const fixturesData = require('./js/fixtures.js');

// Time slots (30 min each)
const timeSlots = [
    '11:00 AM', '11:30 AM',
    '12:00 PM', // 12:30 PM - 1:00 PM is LUNCH BREAK
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM'
];

// Track player availability
const playerSchedule = new Map();

function getPlayers(match, isDoubles) {
    const players = [];
    if (isDoubles) {
        if (match.team1 && !match.team1.startsWith('Winner')) {
            players.push(...match.team1.split('/').map(p => p.trim().toLowerCase()));
        }
        if (match.team2 && !match.team2.startsWith('Winner')) {
            players.push(...match.team2.split('/').map(p => p.trim().toLowerCase()));
        }
    } else {
        if (match.player1 && !match.player1.startsWith('Winner')) {
            players.push(match.player1.trim().toLowerCase());
        }
        if (match.player2 && !match.player2.startsWith('Winner')) {
            players.push(match.player2.trim().toLowerCase());
        }
    }
    return players;
}

function isAvailable(players, time) {
    return players.every(player => {
        const schedule = playerSchedule.get(player);
        return !schedule || !schedule.includes(time);
    });
}

function markBusy(players, time) {
    players.forEach(player => {
        if (!playerSchedule.has(player)) {
            playerSchedule.set(player, []);
        }
        playerSchedule.get(player).push(time);
    });
}

function scheduleMatches() {
    const schedule = [];
    let timeIndex = 0;
    let court = 1;
    
    // Process all categories
    const categories = [
        { data: fixturesData.mensSingles, isDoubles: false, name: "Men's Singles" },
        { data: fixturesData.womensSingles, isDoubles: false, name: "Women's Singles" },
        { data: fixturesData.mensDoubles, isDoubles: true, name: "Men's Doubles" },
        { data: fixturesData.mixedDoubles, isDoubles: true, name: "Mixed Doubles" }
    ];
    
    categories.forEach(category => {
        if (category.data.rounds) {
            category.data.rounds.forEach(round => {
                round.matches.forEach(match => {
                    const players = getPlayers(match, category.isDoubles);
                    
                    // Find available time slot
                    let assigned = false;
                    for (let i = timeIndex; i < timeSlots.length && !assigned; i++) {
                        if (isAvailable(players, timeSlots[i])) {
                            schedule.push({
                                category: category.name,
                                round: round.name,
                                matchId: match.id,
                                time: timeSlots[i],
                                court: court,
                                players: players
                            });
                            markBusy(players, timeSlots[i]);
                            court = (court % 3) + 1;
                            assigned = true;
                        }
                    }
                    
                    if (!assigned) {
                        console.warn(`Could not schedule match ${match.id} in ${category.name}`);
                    }
                });
            });
        }
    });
    
    return schedule;
}

const schedule = scheduleMatches();
console.log(JSON.stringify(schedule, null, 2));
console.log(`\nTotal matches scheduled: ${schedule.length}`);
console.log(`Player conflicts detected: ${Array.from(playerSchedule.entries()).filter(([p, times]) => times.length > 1).length}`);

// Made with Bob
