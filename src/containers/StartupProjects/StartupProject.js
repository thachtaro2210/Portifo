import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
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
                  <a
                    key={i}
                    href={`#/project/${project.id}`}
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
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
