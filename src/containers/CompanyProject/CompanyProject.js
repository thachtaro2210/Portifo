import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./CompanyProject.scss";
import {companyProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CompanyProject() {
  const {isVi, t} = useContext(StyleContext);

  if (!companyProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="company-project">
        <h1 className="skills-heading">{t(companyProjects, "title")}</h1>
        <p className="company-subtitle">{t(companyProjects, "subtitle")}</p>

        {companyProjects.projects.map(cp => {
          const href = `#/project/${cp.id}`;

          return (
            <div className="company-card" key={cp.id}>
              <div className="company-info">
                <div className="company-meta">
                  <span className="company-badge">{cp.company}</span>
                  <span className="company-status">{t(cp, "status")}</span>
                </div>
                <h2 className="company-name">{t(cp, "name")}</h2>
                <p className="company-role">{t(cp, "role")}</p>
                <p className="company-summary">{t(cp, "summary")}</p>

                <div className="company-stats">
                  {cp.stats.map(s => (
                    <div key={s.label} className="company-stat">
                      <strong>{s.value}</strong>
                      <span>{t(s, "label")}</span>
                    </div>
                  ))}
                </div>

                <div className="company-chips">
                  {cp.tech.slice(0, 7).map(n => (
                    <span key={n} className="company-chip">
                      {n}
                    </span>
                  ))}
                </div>

                <div className="company-actions">
                  <a className="company-btn primary" href={href}>
                    {isVi ? "Xem dự án" : "View case study"}
                  </a>
                </div>
              </div>

              <a className="company-preview" href={href}>
                <img src={cp.cover} alt={t(cp, "name")} />
                <span className="preview-hint">
                  {isVi ? "Bấm để xem" : "Click to explore"}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </Fade>
  );
}
