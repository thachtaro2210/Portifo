import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      setColorArrays(colorThief.getColor(imgRef.current));
    } catch (e) {
      setColorArrays([125, 192, 201]);
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    if (!descBullets || !descBullets.length) return null;

    const hasProjectObjects = descBullets.some(
      item =>
        typeof item === "object" &&
        item !== null &&
        (item.project || item.title)
    );

    if (hasProjectObjects) {
      return (
        <div className="experience-projects-list">
          {descBullets.map((item, i) => {
            if (typeof item === "object" && item !== null) {
              const projectTitle = item.project || item.title;
              return (
                <div key={i} className="experience-project-item">
                  <div
                    className={
                      isDark
                        ? "experience-project-name dark-mode-text"
                        : "experience-project-name"
                    }
                  >
                    <span className="experience-project-tag">
                      <svg
                        className="experience-project-icon"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      {projectTitle}
                    </span>
                  </div>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="experience-subbullets-list">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className={
                            isDark ? "subTitle dark-mode-text" : "subTitle"
                          }
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
            return (
              <ul key={i} className="experience-subbullets-list">
                <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
                  {item}
                </li>
              </ul>
            );
          })}
        </div>
      );
    }

    return (
      <ul className="experience-bullets-list">
        {descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {cardInfo.companylogo ? (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        ) : (
          <div className="experience-roundedimg experience-roundedimg-text">
            <span>
              {cardInfo.company
                ? cardInfo.company
                    .split(" ")
                    .map(w => w[0])
                    .join("")
                    .toUpperCase()
                : ""}
            </span>
          </div>
        )}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
          {cardInfo.location && (
            <span className="experience-text-location">
              {" "}• {cardInfo.location}
            </span>
          )}
        </h5>
        {cardInfo.desc && (
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
        )}
        <div className="experience-body-content">
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}
