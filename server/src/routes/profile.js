const router = require('express').Router();
const Profile = require('../models/Profile');
const { authenticate } = require('../middleware/auth');
const logger = require('../utils/logger');


router.get('/', async (req, res, next) => {
  try {
    const profile = await Profile.findOne({});
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }
    res.json(profile);
  } catch (err) {
    next(err);
  }
});

router.post('/', authenticate, async (req, res, next) => {
  try {
    const existingProfile = await Profile.findOne({});
    if (existingProfile) {
      return res.status(409).json({ message: "Profile already exists. Use PUT to update." });
    }
    const profile = new Profile(req.body);
    await profile.save();
    logger.info('Profile created successfully.');
    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
});

router.put('/', authenticate, async (req, res, next) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate({}, req.body, { new: true, runValidators: true });
    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found. Use POST to create." });
    }
    logger.info('Profile updated successfully.');
    res.json(updatedProfile);
  } catch (err) {
    next(err);
  }
});

module.exports = router;