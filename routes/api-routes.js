const router = require("express").Router();
const fs = require("fs");
const {v4: generateID} = require("uuid");

router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});
    
router.post('/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = generateID();
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNotes = notes.filter((note) => note.id !== id);
        fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err) => {
            if (err) throw err;
            res.json({ ok: true });
        });
    });
});

module.exports = router;