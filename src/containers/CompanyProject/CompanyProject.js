import React, {useState, useEffect, useContext, useCallback} from "react";
import {Fade} from "react-reveal";
import "./CompanyProject.scss";
import {companyProject as cp} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CompanyProject() {
  const {isVi, t} = useContext(StyleContext);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const show = useCallback(i => {
    setIdx(i);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % cp.gallery.length);
      if (e.key === "ArrowLeft")
        setIdx(i => (i - 1 + cp.gallery.length) % cp.gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!cp.display) return null;
  const media = cp.gallery[idx];

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="company-project">
          <h1 className="skills-heading">{t(cp, "title")}</h1>
          <p className="company-subtitle">{t(cp, "subtitle")}</p>

          <div className="company-card">
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
                <button
                  type="button"
                  className="company-btn primary"
                  onClick={() => show(0)}
                >
                  {isVi ? "Xem dự án" : "View case study"}
                </button>
                <button
                  type="button"
                  className="company-btn"
                  onClick={() =>
                    show(cp.gallery.findIndex(g => g.type === "video"))
                  }
                >
                  ▶ {isVi ? "Xem video" : "Watch demo"}
                </button>
              </div>
            </div>

            <div
              className="company-preview"
              onClick={() => show(0)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && show(0)}
            >
              <img src={cp.cover} alt={t(cp, "name")} />
              <span className="preview-hint">
                {isVi ? "Bấm để xem" : "Click to explore"}
              </span>
            </div>
          </div>
        </div>
      </Fade>

      {open && (
        <div className="cp-overlay" onClick={() => setOpen(false)}>
          <div className="cp-modal" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="cp-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <div className="cp-stage">
              {media.type === "video" ? (
                <video
                  key={media.url}
                  src={media.url}
                  controls
                  autoPlay
                  className="cp-media"
                />
              ) : (
                <img
                  src={media.url}
                  alt={t(media, "name")}
                  className="cp-media"
                />
              )}
            </div>

            <div className="cp-thumbs">
              {cp.gallery.map((g, i) => (
                <button
                  type="button"
                  key={g.url}
                  className={i === idx ? "cp-thumb active" : "cp-thumb"}
                  onClick={() => setIdx(i)}
                >
                  {g.type === "video" ? "▶" : "🖼"} {t(g, "name")}
                </button>
              ))}
            </div>

            <div className="cp-body">
              <div className="company-meta">
                <span className="company-badge">{cp.company}</span>
                <span className="company-status">{t(cp, "status")}</span>
              </div>
              <h2 className="cp-title">{t(cp, "name")}</h2>
              <p className="company-role">{t(cp, "role")}</p>
              <p className="cp-text">{t(cp, "summary")}</p>

              <h4 className="cp-h">{isVi ? "Phạm vi" : "Scope"}</h4>
              <div className="cp-scope">
                {cp.scope.map(g => (
                  <div key={g.group} className="cp-scope-group">
                    <strong>{t(g, "group")}</strong>
                    <ul>
                      {t(g, "items").map(it => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h4 className="cp-h">{isVi ? "Điểm nổi bật" : "Highlights"}</h4>
              <div className="cp-highlights">
                {cp.highlights.map(h => (
                  <div key={h.title} className="cp-highlight">
                    <strong>{t(h, "title")}</strong>
                    <p>{t(h, "desc")}</p>
                  </div>
                ))}
              </div>

              <h4 className="cp-h">{isVi ? "Công nghệ" : "Tech stack"}</h4>
              <div className="company-chips">
                {cp.tech.map(n => (
                  <span key={n} className="company-chip">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
