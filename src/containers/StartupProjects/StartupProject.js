import React, {useState, useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark, isVi, t} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
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
              const desc = t(project, "projectDesc");
              const parts = desc.split("\n\n");
              const hasMore = parts.length > 2;
              const isExpanded = !!expandedProjects[i];
              const displayDesc = hasMore && !isExpanded
                ? parts.slice(0, 2).join("\n\n")
                : desc;

              return (
                <div
                  key={i}
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
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {t(project, "projectName")}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {displayDesc}
                    </p>
                    {hasMore && (
                      <button
                        type="button"
                        className="read-more-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(i);
                        }}
                      >
                        {isExpanded
                          ? (isVi ? "Thu gọn" : "Read Less")
                          : (isVi ? "Xem thêm chi tiết" : "Read More Details")}
                      </button>
                    )}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {t(link, "name")}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
