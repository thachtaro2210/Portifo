import React, {useContext, useEffect} from "react";
import "./ProjectPage.scss";
import {bigProjects, companyProject} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const formatInlineText = text => {
  const colonIdx = text.indexOf(":");
  if (colonIdx > 0 && !text.trim().startsWith("http")) {
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

const renderDesc = text => {
  const out = [];
  let list = [];
  const flush = key => {
    if (list.length) {
      out.push(
        <ul key={`l${key}`} className="pp-list">
          {list.map((item, i) => (
            <li key={i}>{formatInlineText(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  text.split("\n").forEach((line, i) => {
    const s = line.trim();
    if (s.startsWith("- ")) {
      list.push(s.substring(2));
      return;
    }
    flush(i);
    if (!s) return;
    if (s.endsWith(":")) {
      out.push(
        <h3 key={i} className="pp-h">
          {s.slice(0, -1)}
        </h3>
      );
    } else {
      out.push(
        <p key={i} className="pp-p">
          {formatInlineText(s)}
        </p>
      );
    }
  });
  flush("end");
  return out;
};

export const findProject = id => {
  if (companyProject.id === id) {
    return {
      ...companyProject,
      cover: companyProject.cover,
      coverFit: "contain",
      badge: companyProject.company,
      projectName: companyProject.name,
      projectName_vi: companyProject.name_vi,
      links: []
    };
  }
  const p = bigProjects.projects.find(x => x.id === id);
  if (!p) return null;
  return {
    ...p,
    cover: p.image,
    coverFit: p.imageFit,
    gallery: (p.footerLink || []).filter(l => l.type),
    links: (p.footerLink || []).filter(l => !l.type)
  };
};

export default function ProjectPage({id}) {
  const {isVi, t} = useContext(StyleContext);
  const p = findProject(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const back = (
    <a className="pp-back" href="#projects">
      ← {isVi ? "Tất cả dự án" : "All projects"}
    </a>
  );

  if (!p) {
    return (
      <div className="pp">
        {back}
        <p className="pp-p">
          {isVi ? "Không tìm thấy dự án." : "Project not found."}
        </p>
      </div>
    );
  }

  const gallery = p.gallery || [];
  const images = gallery.filter(g => g.type === "image");
  const videos = gallery.filter(g => g.type === "video");
  const desc = t(p, "projectDesc");

  return (
    <div className="pp">
      {back}

      <header className="pp-head">
        <div className="pp-meta">
          {p.badge ? <span className="pp-badge">{t(p, "badge")}</span> : null}
          {p.status ? (
            <span className="pp-status">{t(p, "status")}</span>
          ) : null}
        </div>
        <h1 className="pp-title">{t(p, "projectName")}</h1>
        {p.role ? <p className="pp-role">{t(p, "role")}</p> : null}
        <p className="pp-summary">{t(p, "summary")}</p>
        <div className="pp-chips">
          {(p.tech || []).map(n => (
            <span key={n} className="pp-chip">
              {n}
            </span>
          ))}
        </div>
      </header>

      {p.cover ? (
        <div className="pp-cover">
          <img
            src={p.cover}
            alt={t(p, "projectName")}
            className={p.coverFit === "cover" ? "is-cover" : ""}
          />
        </div>
      ) : null}

      {desc ? (
        <section className="pp-section">{renderDesc(desc)}</section>
      ) : null}

      {(p.story || []).map((s, si) => (
        <section key={s.title} className="pp-section">
          <h2 className="pp-h2">
            <span className="pp-num">{si + 1}</span>
            {t(s, "title")}
          </h2>
          {s.intro ? <p className="pp-p">{t(s, "intro")}</p> : null}
          {s.items ? (
            <div className="pp-items">
              {s.items.map((it, i) => (
                <div key={it.title} className="pp-item">
                  <span className="pp-item-mark">
                    {s.numbered ? i + 1 : "•"}
                  </span>
                  <div>
                    <strong>{t(it, "title")}</strong>
                    <p>{t(it, "desc")}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {s.flows ? (
            <div className="pp-flows">
              {s.flows.map(f => (
                <div key={f.title} className="pp-flow">
                  <span className="pp-flow-name">{t(f, "title")}</span>
                  <div className="pp-flow-steps">
                    {t(f, "steps").map((st, i) => (
                      <React.Fragment key={st}>
                        {i > 0 ? <span className="pp-arrow">→</span> : null}
                        <span className="pp-step">{st}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {p.scope ? (
        <section className="pp-section">
          <h2 className="pp-h2">
            {isVi ? "Phạm vi chức năng" : "Functional scope"}
          </h2>
          <div className="pp-grid">
            {p.scope.map(g => (
              <div key={g.group} className="pp-box">
                <strong>{t(g, "group")}</strong>
                <ul>
                  {t(g, "items").map(it => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {p.highlights ? (
        <section className="pp-section">
          <h2 className="pp-h2">
            {isVi ? "Kết quả và điểm nổi bật" : "Results and highlights"}
          </h2>
          <ul className="pp-list">
            {p.highlights.map(h => (
              <li key={h.title}>
                <strong>{t(h, "title")}:</strong> {t(h, "desc")}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {images.length ? (
        <section className="pp-section">
          <h2 className="pp-h2">{isVi ? "Hình ảnh" : "Screenshots"}</h2>
          <div className="pp-media-list">
            {images.map(g => (
              <figure key={g.url} className="pp-figure">
                <img src={g.url} alt={t(g, "name")} loading="lazy" />
                <figcaption>{t(g, "name")}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {videos.length ? (
        <section className="pp-section">
          <h2 className="pp-h2">Video</h2>
          <div className="pp-media-list">
            {videos.map(g => (
              <figure key={g.url} className="pp-figure">
                <video src={g.url} controls preload="metadata" />
                <figcaption>{t(g, "name")}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {p.links.length ? (
        <section className="pp-section">
          <h2 className="pp-h2">{isVi ? "Liên kết" : "Links"}</h2>
          <div className="pp-links">
            {p.links.map(l => (
              <a
                key={l.url}
                className="pp-link"
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(l, "name")} ↗
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
