/**
 * PLCES DATA FILE
 * Edit this file to change everything — events, days, games, scores.
 * All text is automatically uppercased in the UI where relevant.
 */

window.PLCES = {

  intramurals: {
    name: "Intramurals",
    base: "house",           // "house" → HOUSE BASED  |  "grade" → GRADE BASED
    startdate: "May 4, 2026",
    enddate:   "May 8, 2026", // remove or set to "" to show only start date

    days: [

      // ─────────────── DAY 1 ───────────────
      {
        name: "Day 1",
        date: "May 4, 2026",
        starttime: "8:00AM",
        endtime:   "4:30PM",

        games: [

          {
            name: "General Assembly",
            modifier: "",         // "" | "junior" | "senior"
            time: "8:00AM",
            delegates: ["Sir Antonio", "Ma'am Reyes"],
            isBreak: false,
            scores: false         // no score section in modal
          },

          {
            name: "Basketball",
            modifier: "junior",
            time: "9:00AM",
            delegates: ["Coach Rivera", "Sir Cruz", "Ma'am Santos"],
            isBreak: false,
            scores: true,
            scorestype: "versus", // "versus" = static score display  |  "roundrobin" = interactive picker
            mid: "001",
            scoring: [
              // versus: each entry = one row in the 2×2 grid (teamA left, teamB right)
              { teamA: "BLUE",  scoreA: 24, teamB: "GREEN", scoreB: 18 },
              { teamA: "RED",   scoreA: 15, teamB: "BLACK", scoreB: 22 }
            ]
          },

          {
            name: "Chess",
            modifier: "junior",
            time: "9:00AM",       // same time as Basketball → shown side-by-side
            delegates: ["Sir Manalo", "Ma'am Lim"],
            isBreak: false,
            scores: true,
            scorestype: "roundrobin",
            mid: "002",
            scoring: []           // roundrobin is interactive, scoring unused
          },

          {
            name: "Break",
            modifier: "",
            time: "9:45AM",
            isBreak: true,
            scores: false
          },

          {
            name: "Badminton",
            modifier: "junior",
            time: "10:00AM",
            delegates: ["Sir Bautista", "Ma'am Garcia"],
            isBreak: false,
            scores: true,
            scorestype: "versus",
            mid: "003",
            scoring: [
              { teamA: "BLUE",  scoreA: 21, teamB: "RED",   scoreB: 15 },
              { teamA: "GREEN", scoreA: 18, teamB: "BLACK", scoreB: 21 }
            ]
          },

          {
            name: "Badminton",
            modifier: "senior",
            time: "11:00AM",
            delegates: ["Sir Villanueva", "Ma'am Torres"],
            isBreak: false,
            scores: true,
            scorestype: "versus",
            mid: "004",
            scoring: [
              { teamA: "BLUE",  scoreA: 21, teamB: "GREEN", scoreB: 16 },
              { teamA: "RED",   scoreA: 14, teamB: "BLACK", scoreB: 21 }
            ]
          },

          {
            name: "Lunch",
            modifier: "",
            time: "12:00PM",
            isBreak: true,
            scores: false
          },

          {
            name: "Scrabble",
            modifier: "",
            time: "1:00PM",
            delegates: ["Ma'am Cruz", "Sir Dela Rosa"],
            isBreak: false,
            scores: true,
            scorestype: "roundrobin",
            mid: "005",
            scoring: []
          },

          {
            name: "Game of Generals",
            modifier: "",
            time: "2:00PM",
            delegates: ["Sir Ramos", "Ma'am Flores"],
            isBreak: false,
            scores: true,
            scorestype: "roundrobin",
            mid: "006",
            scoring: []
          },

          {
            name: "Mobile Legends",
            modifier: "",
            time: "3:00PM",
            delegates: ["Sir Castillo", "Ma'am Reyes"],
            isBreak: false,
            scores: true,
            scorestype: "versus",
            mid: "007",
            scoring: [
              { teamA: "BLUE", scoreA: 2, teamB: "GREEN", scoreB: 1 },
              { teamA: "RED",  scoreA: 0, teamB: "BLACK", scoreB: 2 }
            ]
          },

          {
            name: "Closing Remarks",
            modifier: "",
            time: "4:00PM",
            delegates: ["Principal", "Sir Antonio"],
            isBreak: false,
            scores: false
          }

        ] // end games
      }, // end Day 1

      // ─────────────── DAY 2 ───────────────
      {
        name: "Day 2",
        date: "May 5, 2026",
        starttime: "8:00AM",
        endtime:   "4:30PM",

        games: [

          {
            name: "General Assembly",
            modifier: "",
            time: "8:00AM",
            delegates: ["Sir Antonio"],
            isBreak: false,
            scores: false
          },

          {
            name: "Basketball",
            modifier: "senior",
            time: "9:00AM",
            delegates: ["Coach Rivera", "Sir Cruz"],
            isBreak: false,
            scores: true,
            scorestype: "versus",
            mid: "008",
            scoring: [
              { teamA: "BLUE",  scoreA: 30, teamB: "GREEN", scoreB: 28 },
              { teamA: "RED",   scoreA: 25, teamB: "BLACK", scoreB: 19 }
            ]
          },

          {
            name: "Volleyball",
            modifier: "junior",
            time: "10:00AM",
            delegates: ["Ma'am Santos", "Sir Bautista"],
            isBreak: false,
            scores: true,
            scorestype: "versus",
            mid: "009",
            scoring: [
              { teamA: "BLUE",  scoreA: 25, teamB: "RED",   scoreB: 20 },
              { teamA: "GREEN", scoreA: 22, teamB: "BLACK", scoreB: 25 }
            ]
          },

          {
            name: "Lunch",
            modifier: "",
            time: "12:00PM",
            isBreak: true,
            scores: false
          },

          {
            name: "Table Tennis",
            modifier: "junior",
            time: "1:00PM",
            delegates: ["Sir Manalo", "Ma'am Lim"],
            isBreak: false,
            scores: true,
            scorestype: "roundrobin",
            mid: "010",
            scoring: []
          },

          {
            name: "Table Tennis",
            modifier: "senior",
            time: "1:00PM",
            delegates: ["Sir Ramos", "Ma'am Torres"],
            isBreak: false,
            scores: true,
            scorestype: "roundrobin",
            mid: "011",
            scoring: []
          },

          {
            name: "Closing Remarks",
            modifier: "",
            time: "4:00PM",
            delegates: ["Principal"],
            isBreak: false,
            scores: false
          }

        ] // end games
      }  // end Day 2

    ] // end days
  }    // end intramurals

}; // end window.PLCES