// server/routes/exhibitions.js
const express = require('express');
const router = express.Router();
const Exhibition = require('../models/Exhibition');

// Get all exhibitions
router.get('/', async (req, res) => {
  try {
    const exhibitions = await Exhibition.find();
    res.json(exhibitions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new exhibition
router.post('/', async (req, res) => {
  const exhibition = new Exhibition({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newExhibition = await exhibition.save();
    res.status(201).json(newExhibition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
