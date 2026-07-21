import React, {useContext} from "react";
import "./ProjectDetail.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";

export default function ProjectDetail({projectId}) {
  const {isDark} = useContext(StyleContext);

  // Find project in config
  const project = bigProjects.projects.find(p => p.id === projectId);

  if (!project || !project.details) {
    return (
      <div
        className={
          isDark ? "dark-mode project-detail-page" : "project-detail-page"
        }
      >
        <div className="error-container">
          <h2>Project Not Found</h2>
          <p>The requested project details could not be loaded.</p>
          <a href="#projects" className="back-btn-link">
            <span className="back-btn">&larr; Back to Projects</span>
          </a>
        </div>
      </div>
    );
  }

  const {details} = project;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={
          isDark ? "dark-mode project-detail-page" : "project-detail-page"
        }
      >
        <div className="project-detail-container">
          {/* Back Button */}
          <div className="back-navigation">
            <a href="#projects" className="back-btn-link">
              <span className="back-btn">&larr; Back to Projects</span>
            </a>
          </div>

          {/* Hero Section */}
          <div className="project-hero">
            <h1
              className={isDark ? "dark-mode project-title" : "project-title"}
            >
              {project.projectName}
            </h1>
            <p className="project-tagline">{project.projectDesc}</p>

            {/* Download/Store Links */}
            {details.links && details.links.length > 0 && (
              <div className="store-links">
                {details.links.map((link, idx) => {
                  let iconClass = "fas fa-external-link-alt";
                  if (link.name.toLowerCase().includes("play")) {
                    iconClass = "fab fa-google-play";
                  } else if (
                    link.name.toLowerCase().includes("app store") ||
                    link.name.toLowerCase().includes("apple")
                  ) {
                    iconClass = "fab fa-apple";
                  }
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-button"
                    >
                      <i className={iconClass}></i>
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Main Cover Image */}
          {project.image && (
            <div className="project-main-banner">
              <img
                src={project.image}
                alt={project.projectName}
                className="banner-img"
              />
            </div>
          )}

          {/* Metadata Grid */}
          <div className={isDark ? "dark-mode metadata-grid" : "metadata-grid"}>
            <div className="metadata-item">
              <i className="fas fa-gamepad metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">My Role</span>
                <span className="metadata-value">{details.role.title}</span>
              </div>
            </div>
            <div className="metadata-item">
              <i className="fas fa-calendar-alt metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">Duration</span>
                <span className="metadata-value">{details.role.duration}</span>
              </div>
            </div>
            <div className="metadata-item">
              <i className="fas fa-building metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">Company</span>
                <span className="metadata-value">{details.role.company}</span>
              </div>
            </div>
            <div className="metadata-item">
              <i className="fas fa-mobile-alt metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">Platform</span>
                <span className="metadata-value">{details.role.platform}</span>
              </div>
            </div>
            <div className="metadata-item">
              <i className="fas fa-cogs metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">Engine</span>
                <span className="metadata-value">{details.role.engine}</span>
              </div>
            </div>
            <div className="metadata-item">
              <i className="fas fa-users metadata-icon"></i>
              <div className="metadata-content">
                <span className="metadata-label">Team Size</span>
                <span className="metadata-value">
                  {details.team.length} Members
                </span>
              </div>
            </div>
          </div>

          {/* Content Layout (Sequential) */}
          <div className="project-content-layout">
            <div className="section-card">
              <h3 className="section-title">Project Overview</h3>
              <p className="overview-text">{details.overview}</p>
            </div>

            {details.team && details.team.length > 0 && (
              <div className="section-card">
                <h3 className="section-title">The Team</h3>
                <ul className="team-list">
                  {details.team.map((member, idx) => (
                    <li key={idx} className="team-member">
                      <i className="fas fa-user-circle team-icon"></i>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="section-card">
              <h3 className="section-title">Core Contributions</h3>
              <ul className="contributions-list">
                {details.contributions.map((contribution, idx) => (
                  <li key={idx} className="contribution-item">
                    <i className="fas fa-check-circle contribution-icon"></i>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-card">
              <h3 className="section-title">Tech Stack & Patterns</h3>
              <div className="tech-badge-container">
                {details.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Media Section: Videos & Screenshots */}
          {(details.videos || details.screenshots) && (
            <div className="project-media-section">
              <h2 className="media-section-title">Gameplay Media</h2>

              {/* Gameplay Videos */}
              {details.videos && details.videos.length > 0 && (
                <div className="videos-container">
                  <h3 className="sub-section-title">Gameplay Videos</h3>
                  <div className="videos-grid">
                    {details.videos.map((vidUrl, idx) => (
                      <div key={idx} className="video-wrapper">
                        <iframe
                          title={`Gameplay Video ${idx + 1}`}
                          src={vidUrl}
                          allowFullScreen
                          className="gameplay-iframe"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                        ></iframe>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gameplay Screenshots */}
              {details.screenshots && details.screenshots.length > 0 && (
                <div className="screenshots-container">
                  <h3 className="sub-section-title">Screenshots</h3>
                  <div className="screenshots-grid">
                    {details.screenshots.map((screenshot, idx) => (
                      <div key={idx} className="screenshot-wrapper">
                        <img
                          src={screenshot}
                          alt={`Gameplay Screenshot ${idx + 1}`}
                          className="screenshot-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
