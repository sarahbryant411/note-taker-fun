const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../views/notes.html'))
);

// GET Route for homepage
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../views/index.html'))
);

module.exports = router;