import React, { useState, useEffect } from 'react';
import { fetchProfile } from '../api';

function ProfileView() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
      setLoading(false);
    };
    getProfile();
  }, []);

  if (loading) return <p className="loading-text">Loading profile data...</p>;
  if (!profile) return <p className="not-found-text">Profile not found. Please seed the database.</p>;

  
  const formatTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="profile-view-container">
     
      <div className="header">
        <h2>{profile.name}</h2>
        <p>{profile.education}</p>
        <div className="profile-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.links.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
      </div>

   
      <div className="section">
        <h3 className="section-title">Technical Skills</h3>
        {Object.keys(profile.skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h4>• {formatTitle(category)}:</h4>
            <div className="skills-list">
              {profile.skills[category].map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      
      <div className="section">
        <h3 className="section-title">Work Experience</h3>
        {profile.work.map((job, index) => (
          <div key={index} className="work-item">
            <div className="item-header">
              <h4>{job.role} at {job.company}</h4>
              <span>{job.startDate} – {job.endDate}</span>
            </div>
            <p className="item-description">{job.description}</p>
           
            <div className="work-links-container" style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
              {job.links?.certificate && (
                <a href={job.links.certificate} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Certificate</a>
              )}
              {job.links?.lor && (
                <a href={job.links.lor} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>LOR</a>
              )}
              {job.links?.offerLetter && (
                <a href={job.links.offerLetter} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Offer Letter</a>
              )}
            </div>
          </div>
        ))}
      </div>

      
      <div className="section">
        <h3 className="section-title">Projects</h3>
        {profile.projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="item-header">
              <h4>{project.title}</h4>
              <div className="project-links">
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </div>
            <p className="item-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileView;