const router = require('express').Router();
const Profile = require('../models/Profile');

router.get('/projects', async (req, res, next) => {
  const { skill } = req.query;
  try {
    const profile = await Profile.findOne({});
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }
    if (skill) {
      const filteredProjects = profile.projects.filter(project =>
        project.description.toLowerCase().includes(skill.toLowerCase()) ||
        project.title.toLowerCase().includes(skill.toLowerCase())
      );
      return res.json(filteredProjects);
    }
    res.json(profile.projects);
  } catch (err) {
    next(err);
  }
});


router.get('/skills/top', async (req, res, next) => {
  try {
    const profile = await Profile.findOne({});
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }
    
    res.json(profile.skills.slice(0, 5));
  } catch (err) {
    next(err);
  }
});


router.get('/search', async (req, res, next) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ message: "Search query 'q' is required." });
  }

  try {
    const profile = await Profile.findOne({ $text: { $search: q } }, { score: { $meta: "textScore" } });

    if (!profile) {
      return res.status(404).json({ message: "No results found." });
    }

    res.json(profile);
  } catch (err) {
    next(err);
  }
});

module.exports = router;