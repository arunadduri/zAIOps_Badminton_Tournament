// Tournament Match Scheduler with Conflict Detection
// Schedules matches across all formats while avoiding player conflicts
// Includes lunch break from 12:30 PM - 1:00 PM

class TournamentScheduler {
    constructor() {
        this.courts = 3;
        this.startTime = 11 * 60; // 11:00 AM in minutes
        this.endTime = 16 * 60; // 4:00 PM in minutes
        this.lunchStart = 12 * 60 + 30; // 12:30 PM
        this.lunchEnd = 13 * 60; // 1:00 PM
        this.matchDuration = 30; // minutes per match
        this.playerSchedule = new Map(); // Track when each player is busy
        this.schedule = []; // Final schedule
    }

    // Extract player names from a match
    getPlayersFromMatch(match, format) {
        const players = [];
        
        if (format === 'singles') {
            if (match.player1 && !match.player1.startsWith('Winner')) {
                players.push(match.player1.toLowerCase().trim());
            }
            if (match.player2 && !match.player2.startsWith('Winner')) {
                players.push(match.player2.toLowerCase().trim());
            }
        } else if (format === 'doubles') {
            // Extract players from team format "Player1 / Player2"
            if (match.team1 && !match.team1.startsWith('Winner') && !match.team1.includes('Group')) {
                const team1Players = match.team1.split('/').map(p => p.toLowerCase().trim());
                players.push(...team1Players);
            }
            if (match.team2 && !match.team2.startsWith('Winner') && !match.team2.includes('Group')) {
                const team2Players = match.team2.split('/').map(p => p.toLowerCase().trim());
                players.push(...team2Players);
            }
        }
        
        return players;
    }

    // Check if a player is available at a given time
    isPlayerAvailable(player, time) {
        if (!this.playerSchedule.has(player)) {
            return true;
        }
        
        const busyTimes = this.playerSchedule.get(player);
        for (const busyTime of busyTimes) {
            // Check if there's overlap
            if (time < busyTime + this.matchDuration && time + this.matchDuration > busyTime) {
                return false;
            }
        }
        return true;
    }

    // Check if all players in a match are available
    areAllPlayersAvailable(players, time) {
        return players.every(player => this.isPlayerAvailable(player, time));
    }

    // Mark players as busy at a specific time
    markPlayersBusy(players, time) {
        players.forEach(player => {
            if (!this.playerSchedule.has(player)) {
                this.playerSchedule.set(player, []);
            }
            this.playerSchedule.get(player).push(time);
        });
    }

    // Check if time slot is during lunch break
    isDuringLunch(time) {
        return time >= this.lunchStart && time < this.lunchEnd;
    }

    // Find next available time slot for a match
    findNextAvailableSlot(players, startFrom = this.startTime) {
        let currentTime = startFrom;
        
        while (currentTime < this.endTime) {
            // Skip lunch break
            if (this.isDuringLunch(currentTime)) {
                currentTime = this.lunchEnd;
                continue;
            }
            
            // Check if all players are available
            if (this.areAllPlayersAvailable(players, currentTime)) {
                return currentTime;
            }
            
            // Move to next 30-minute slot
            currentTime += this.matchDuration;
        }
        
        return null; // No available slot found
    }

    // Convert minutes to time string
    minutesToTimeString(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHour = hours > 12 ? hours - 12 : hours;
        return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
    }

    // Schedule a single match
    scheduleMatch(match, format, category, roundName) {
        const players = this.getPlayersFromMatch(match, format);
        
        // Find available slot
        const timeSlot = this.findNextAvailableSlot(players);
        
        if (timeSlot === null) {
            console.warn(`Could not schedule match ${match.id} in ${category}`);
            return null;
        }
        
        // Mark players as busy
        this.markPlayersBusy(players, timeSlot);
        
        // Assign court (simple round-robin)
        const court = (this.schedule.length % this.courts) + 1;
        
        // Create scheduled match
        const scheduledMatch = {
            ...match,
            time: this.minutesToTimeString(timeSlot),
            timeMinutes: timeSlot,
            court: court,
            category: category,
            round: roundName
        };
        
        this.schedule.push(scheduledMatch);
        return scheduledMatch;
    }

    // Schedule all matches from fixtures data
    scheduleAllMatches(fixturesData) {
        const categories = [
            { key: 'mensSingles', format: 'singles' },
            { key: 'womensSingles', format: 'singles' },
            { key: 'mensDoubles', format: 'doubles' },
            { key: 'womensDoubles', format: 'doubles' },
            { key: 'mixedDoubles', format: 'doubles' }
        ];

        categories.forEach(({ key, format }) => {
            const categoryData = fixturesData[key];
            
            if (categoryData.rounds) {
                // Standard rounds format
                categoryData.rounds.forEach(round => {
                    round.matches.forEach(match => {
                        this.scheduleMatch(match, format, categoryData.title, round.name);
                    });
                });
            } else if (categoryData.groups) {
                // Group stage format (Women's Doubles)
                categoryData.groups.forEach(group => {
                    group.matches.forEach(match => {
                        this.scheduleMatch(match, format, categoryData.title, group.name);
                    });
                });
                
                // Schedule final
                if (categoryData.final) {
                    this.scheduleMatch(categoryData.final, format, categoryData.title, 'Final');
                }
            }
        });

        return this.schedule;
    }

    // Get schedule sorted by time
    getSortedSchedule() {
        return this.schedule.sort((a, b) => a.timeMinutes - b.timeMinutes);
    }

    // Get schedule for a specific category
    getCategorySchedule(category) {
        return this.schedule.filter(match => match.category === category);
    }

    // Generate summary report
    generateReport() {
        const report = {
            totalMatches: this.schedule.length,
            byCategory: {},
            conflicts: [],
            timeRange: {
                start: this.minutesToTimeString(this.startTime),
                end: this.minutesToTimeString(Math.max(...this.schedule.map(m => m.timeMinutes))),
                lunchBreak: `${this.minutesToTimeString(this.lunchStart)} - ${this.minutesToTimeString(this.lunchEnd)}`
            }
        };

        // Count matches by category
        this.schedule.forEach(match => {
            if (!report.byCategory[match.category]) {
                report.byCategory[match.category] = 0;
            }
            report.byCategory[match.category]++;
        });

        return report;
    }
}

// Export for use in fixtures.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TournamentScheduler;
}

// Made with Bob
