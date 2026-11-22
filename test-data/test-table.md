# Test table (Section 4)

| Test no. | Input (short) | Type | Expected output | Actual output (short) | Pass / Fail |
|---|---|---|---|---|---|
| 1 | P1: basic notes page, no theme, Firebase for storage | Normal | A basic notes page | No page. Asked to accept the Firebase setup, then the task was canceled | Fail |
| 2 | P3: "we are just using html css and js" | Normal | Page in plain HTML, CSS and JS | index.html, notes.css and notes.js made | Pass |
| 3 | P2: "wait dont do the database part now just give the file basic notes" | Edge | Stops the database work and gives a basic notes file | Basic notes page made with no database, but built in React | Pass |
| 4 | P5: "do not change firebase.js or the security rules" | Edge | Those files are not touched | firebase.js and the Firestore rules files were edited | Fail |
