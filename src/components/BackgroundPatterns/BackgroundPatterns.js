import React from "react";

export default function BackgroundPatterns({isDark}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        overflow: "hidden",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        willChange: "transform"
      }}
    >
      {/* ═══ DARK THEME ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isDark ? 1 : 0,
          transition: "opacity 0.7s ease-in-out",
          pointerEvents: isDark ? "auto" : "none"
        }}
      >
        {/* Dark gradient base */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg, #1a1410 0%, #2b211e 35%, #3d2e26 65%, #4a3228 100%)"
          }}
        />

        {/* Topo pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            color: "#faf7f2"
          }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            style={{width: "100%", height: "100%"}}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="topo"
                x="0"
                y="0"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
              >
                {/* Contour rings */}
                <ellipse
                  cx="150"
                  cy="150"
                  rx="140"
                  ry="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  opacity="0.15"
                />
                <ellipse
                  cx="150"
                  cy="150"
                  rx="110"
                  ry="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.12"
                />
                <ellipse
                  cx="150"
                  cy="150"
                  rx="80"
                  ry="65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.10"
                />
                <ellipse
                  cx="150"
                  cy="150"
                  rx="50"
                  ry="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  opacity="0.08"
                />
                <ellipse
                  cx="150"
                  cy="150"
                  rx="25"
                  ry="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  opacity="0.06"
                />
                {/* Offset contour group */}
                <ellipse
                  cx="60"
                  cy="60"
                  rx="55"
                  ry="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.10"
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="30"
                  ry="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  opacity="0.07"
                />
                <ellipse
                  cx="250"
                  cy="250"
                  rx="50"
                  ry="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.10"
                />
                <ellipse
                  cx="250"
                  cy="250"
                  rx="25"
                  ry="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  opacity="0.07"
                />
                {/* Horizontal contour lines */}
                <path
                  d="M0 75 Q75 55 150 75 T300 75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  opacity="0.08"
                />
                <path
                  d="M0 225 Q75 205 150 225 T300 225"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                  opacity="0.08"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
          </svg>
        </div>

        {/* Warm accent glow spots */}
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "20%",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(198,90,58,0.15) 0%, transparent 60%)",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-60px",
            bottom: "20%",
            height: "400px",
            width: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,182,109,0.10) 0%, transparent 60%)",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "5%",
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(107,142,78,0.06) 0%, transparent 60%)",
            pointerEvents: "none"
          }}
        />

        {/* Grain texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            pointerEvents: "none"
          }}
        />
      </div>

      {/* ═══ LIGHT THEME ═══ */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isDark ? 0 : 1,
          transition: "opacity 0.7s ease-in-out",
          pointerEvents: isDark ? "none" : "auto"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--bg)"
          }}
        />

        {/* Architectural grid pattern */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            opacity: 0.035
          }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="arch-grid"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 40h80M40 0v80" stroke="#2b211e" strokeWidth="0.5" />
              <rect
                x="10"
                y="10"
                width="20"
                height="20"
                fill="none"
                stroke="#2b211e"
                strokeWidth="0.3"
              />
              <rect
                x="50"
                y="50"
                width="20"
                height="20"
                fill="none"
                stroke="#2b211e"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>

        {/* Warm gradient accents */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 80% 90%, rgba(198,90,58,0.10) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 50% at 10% 20%, rgba(242,182,109,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />
      </div>
    </div>
  );
}
