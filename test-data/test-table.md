# Test table (Section 4)

| Test no. | Input (short) | Type | Expected output | Actual output (short) | Pass / Fail |
|---|---|---|---|---|---|
| 1 | P1: basic notes page, no theme, Firebase for storage | Normal | A basic notes page | No page. Asked to accept the Firebase setup, then the task was canceled | Fail |
| 2 | P1 with spelling mistakes ("litercat platformy") | Edge | Gemini still understands the request | Understood it was the Phone Saathi notes page | Pass |
| 3 | P2: "wait dont do the database part now just give the file basic notes" | Edge | Stops the database work and gives a basic notes file | Basic notes page made with no database, but built in React | Pass |
| 4 | P3: "we are just using html css and js" | Normal | Page in plain HTML, CSS and JS | index.html, notes.css and notes.js made, no theme | Pass |
| 5 | P4: "add a todo option, arrange the page, make it look better" | Normal | To-do added and a tidier page | Two-column layout with a Practice To-Do section | Pass |
| 6 | P4: "give html css in one file" | Normal | HTML and CSS in one file | HTML and CSS in one file, JS still in a separate notes.js | Pass |
| 7 | P5 first send: prompt text ends mid-sentence at "Preserve the" | Invalid | Gemini asks for the missing part or still gives a file | Task was canceled, no output | Fail |
| 8 | P5 second send: full prompt with the P4 file attached | Normal | One notes.html with all features kept | notes.html made with notes, 3 entry types, 6 colours, search, sort, filter and Skills to Practise | Pass |
| 9 | P5: "use the exact brand colours, Playfair Display and DM Sans" | Normal | Those colours and fonts are used | All five brand colours and both fonts found in the code | Pass |
| 10 | P5: "do not change firebase.js or the security rules" | Edge | Those files are not touched | firebase.js and the Firestore rules files were edited | Fail |
