const mongoose = require('mongoose');


const skillsSchema = new mongoose.Schema({
  languages: [String],
  frameworks: [String],
  backendAndDatabase: [String],
  toolsAndPlatforms: [String],
  cloudDevOps: [String],
  operatingSystems: [String],
  coursework: [String]
}, { _id: false });

const linkSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  portfolio: String
});

const projectLinkSchema = new mongoose.Schema({
  github: String,
  live: String
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: projectLinkSchema
});


const workLinksSchema = new mongoose.Schema({
  certificate: String,
  lor: String,
  offerLetter: String
}, { _id: false });

const workSchema = new mongoose.Schema({
  company: String,
  role: String,
  startDate: String,
  endDate: String,
  description: String,
  links: workLinksSchema 
});


const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  education: String,
  skills: skillsSchema,
  projects: [projectSchema],
  work: [workSchema],
  links: linkSchema,
  resume: String
});

profileSchema.index({
  "skills.languages": "text",
  "skills.frameworks": "text",
  "projects.title": "text",
  "projects.description": "text"
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;