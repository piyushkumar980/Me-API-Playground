import React, { useState } from 'react';
import ProfileView from './components/ProfileView';
import ProjectsList from './components/ProjectsList';
import SkillSearch from './components/SkillSearch';

function App() {
  const [activeView, setActiveView] = useState('profile');

  const renderView = () => {
    switch (activeView) {
      case 'projects':
        return <ProjectsList />;
      case 'search':
        return <SkillSearch />;
      default:
        return <ProfileView />;
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <header className="header">
          <h1>Piyush Kumar's Profile</h1>
          <p>Full Stack Developer | Electrical and Electronics Engineering</p>
        </header>

        <nav className="nav-tabs">
          <button 
            onClick={() => setActiveView('profile')} 
            className={`nav-tab-button ${activeView === 'profile' ? 'active' : ''}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveView('projects')} 
            className={`nav-tab-button ${activeView === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveView('search')} 
            className={`nav-tab-button ${activeView === 'search' ? 'active' : ''}`}
          >
            Search
          </button>
        </nav>

        <main>
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;