import express from 'express';
import Master from '../models/Master.js';
import Detail from '../models/Detail.js';

const router = express.Router();

// Get all masters
router.get('/masters', async (req, res) => {
  try {
    const masters = await Master.find();
    res.json(masters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching masters.' });
  }
});

// Add a master
router.post('/masters', async (req, res) => {
  try {
    const master = new Master(req.body);
    await master.save();
    res.json(master);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred while saving the master.' });
  }
});

// Get details by master ID
router.get('/details/:masterId', async (req, res) => {
  try {
    // Ensure we're querying by category, which is the masterId in this case
    const details = await Detail.find({ category: req.params.masterId }).populate('category');
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching details.' });
  }
});

// Add a detail
router.post('/details', async (req, res) => {
  try {
    const { question, category } = req.body;
    const detail = new Detail({
      question,
      category, // This category is the masterId
    });
    await detail.save();
    res.json(detail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred while saving the detail.' });
  }
});

// Get all details
router.get('/details(/)?', async (req, res) => {
  try {
    const details = await Detail.find().populate('category'); // Populate category to include its details
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred while fetching details.' });
  }
});



export default router;
