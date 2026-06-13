import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark, isVi, t} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{t(talkSection, "title")}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {t(talkSection, "subtitle")}
          </p>
          {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: t(talk, "title"),
                  subtitle: t(talk, "subtitle"),
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark,
                  isVi
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
