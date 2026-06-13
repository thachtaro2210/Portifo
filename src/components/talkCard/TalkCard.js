import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            {talkDetails.slides_url && (
              <a href={talkDetails.slides_url} target="_" className="talk-button">
                {talkDetails.isVi ? "Trình chiếu" : "Slides"}
              </a>
            )}
            {talkDetails.event_url && (
              <a href={talkDetails.event_url} target="_" className="talk-button">
                {talkDetails.isVi ? "Sự kiện" : "Event"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
