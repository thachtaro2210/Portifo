import React, {useState, useEffect, useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const formatInlineText = text => {
  if (text.includes(":") && !text.trim().startsWith("http")) {
    const colonIdx = text.indexOf(":");
    const prefix = text.substring(0, colonIdx).trim();
    const suffix = text.substring(colonIdx + 1).trim();
    if (prefix.length < 30 && suffix.length > 0) {
      return (
        <>
          <strong>{prefix}:</strong> {suffix}
        </>
      );
    }
  }
  return text;
};

const renderFormattedDesc = descText => {
  if (!descText) return null;

  const lines = descText.split("\n");
  let listBuffer = [];
  const renderedElements = [];

  const flushList = key => {
    if (listBuffer.length > 0) {
      renderedElements.push(
        <ul key={`list-${key}`} className="modal-desc-list">
          {listBuffer.map((item, i) => (
            <li key={i} className="modal-desc-list-item">
              {formatInlineText(item)}
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      listBuffer.push(trimmed.substring(2));
    } else {
      flushList(idx);
      if (trimmed.endsWith(":")) {
        renderedElements.push(
          <h4 key={idx} className="modal-desc-heading">
            {trimmed}
          </h4>
        );
      } else if (trimmed === "") {
        // Skip empty lines
      } else {
        renderedElements.push(
          <p key={idx} className="modal-desc-para">
            {formatInlineText(line)}
          </p>
        );
      }
    }
  });

  flushList(lines.length);
  return renderedElements;
};

export default function StartupProject() {
  const [activeProject, setActiveProject] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const [media, setMedia] = useState(null);

  function openProject(project) {
    setShowFull(false);
    setMedia(null);
    setActiveProject(project);
  }

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const {isDark, isVi, t} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{t(bigProjects, "title")}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {t(bigProjects, "subtitle")}
            </p>

            <div className="projects-container">
              {bigProjects.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => openProject(project)}
                    onKeyDown={e => {
                      if (e.key === "Enter") openProject(project);
                    }}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={t(project, "projectName")}
                          className={
                            project.imageFit === "cover"
                              ? "card-image card-image-cover"
                              : "card-image"
                          }
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      {project.badge ? (
                        <span className="project-badge">
                          {t(project, "badge")}
                        </span>
                      ) : null}
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {t(project, "projectName")}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {t(project, "summary")}
                      </p>
                      <div className="tech-chips">
                        {(project.tech || []).map(name => (
                          <span key={name} className="tech-chip">
                            {name}
                          </span>
                        ))}
                      </div>
                      <span className="project-more">
                        {isVi ? "Xem dự án →" : "View project →"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className={`modal-body ${
              isDark ? "modal-body-dark" : "modal-body-light"
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveProject(null)}
            >
              &times;
            </button>
            {media && (
              <div className="modal-media">
                {media.type === "video" ? (
                  <video
                    key={media.url}
                    src={media.url}
                    controls
                    autoPlay
                    className="modal-media-el"
                  />
                ) : (
                  <img
                    src={media.url}
                    alt={t(media, "name")}
                    className="modal-media-el"
                  />
                )}
                <button
                  type="button"
                  className="modal-media-close"
                  onClick={() => setMedia(null)}
                >
                  {isVi ? "Đóng " : "Close "}
                  {t(media, "name")} ×
                </button>
              </div>
            )}
            {!media && activeProject.image && (
              <div className="modal-image-container">
                <img
                  src={activeProject.image}
                  alt={t(activeProject, "projectName")}
                  className={
                    activeProject.imageFit === "cover"
                      ? "modal-image modal-image-cover"
                      : "modal-image"
                  }
                />
              </div>
            )}
            {activeProject.badge ? (
              <span className="project-badge">{t(activeProject, "badge")}</span>
            ) : null}
            <h2 className="modal-title">{t(activeProject, "projectName")}</h2>
            <div className="tech-chips">
              {(activeProject.tech || []).map(name => (
                <span key={name} className="tech-chip">
                  {name}
                </span>
              ))}
            </div>
            <div className="modal-description">
              {showFull ? (
                renderFormattedDesc(t(activeProject, "projectDesc"))
              ) : (
                <p className="modal-desc-para">
                  {t(activeProject, "summary")}
                </p>
              )}
            </div>
            <button
              type="button"
              className="view-details-btn"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull
                ? isVi
                  ? "Thu gọn"
                  : "Show less"
                : isVi
                ? "Xem chi tiết"
                : "View Details"}
            </button>
            {activeProject.footerLink && (
              <div className="modal-footer-links">
                {activeProject.footerLink.map((link, i) => (
                  <button
                    key={i}
                    className="modal-link-btn"
                    onClick={() =>
                      link.type ? setMedia(link) : openUrlInNewTab(link.url)
                    }
                  >
                    {link.type === "video"
                      ? "▶ "
                      : link.type === "image"
                      ? "🖼 "
                      : ""}
                    {t(link, "name")}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
