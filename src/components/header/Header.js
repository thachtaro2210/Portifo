import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LangSwitch from "../LangSwitch/LangSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark, isVi} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <svg
            className="logo-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px', transition: 'stroke 0.2s ease' }}
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="logo-text-bold">Thach</span>
          <span className="logo-text-light">.dev</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{isVi ? "Kỹ năng" : "Skills"}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{isVi ? "Kinh nghiệm" : "Work Experiences"}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{isVi ? "Mã nguồn mở" : "Open Source"}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{isVi ? "Thành tựu" : "Achievements"}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{isVi ? "Bài viết" : "Blogs"}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{isVi ? "Thuyết trình" : "Talks"}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{isVi ? "Hồ sơ" : "Resume"}</a>
            </li>
          )}
          <li>
            <a href="#contact">{isVi ? "Liên hệ" : "Contact Me"}</a>
          </li>
          <li>
            <ToggleSwitch />
          </li>
          <li>
            <LangSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
