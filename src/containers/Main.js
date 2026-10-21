import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import CompanyProject from "./CompanyProject/CompanyProject";
import StartupProject from "./StartupProjects/StartupProject";
import ProjectPage from "./ProjectPage/ProjectPage";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import BackgroundPatterns from "../components/BackgroundPatterns/BackgroundPatterns";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isVi, setIsVi] = useLocalStorage("isVi", false);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const projectMatch = hash.match(/^#\/project\/([\w-]+)/);
  const projectId = projectMatch ? projectMatch[1] : null;

  // Leaving a project page: home sections remount, so scroll to the anchor.
  useEffect(() => {
    if (projectId || isShowingSplashAnimation || !hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
  }, [projectId, hash, isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLang = () => {
    setIsVi(!isVi);
  };

  const t = (parent, key) => {
    if (!parent) return "";
    if (isVi && parent[key + "_vi"] !== undefined) {
      return parent[key + "_vi"];
    }
    return parent[key];
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <BackgroundPatterns isDark={isDark} />
      <StyleProvider
        value={{
          isDark: isDark,
          changeTheme: changeTheme,
          isVi: isVi,
          changeLang: changeLang,
          t: t
        }}
      >
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : projectId ? (
          <>
            <Header />
            <ProjectPage id={projectId} />
            <Footer />
          </>
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <CompanyProject />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
