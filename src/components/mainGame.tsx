"use client";

import { useState, useRef } from "react";

export default function GeometryDashGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // 用来管理全屏状态
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => setIsPlaying(true);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;

    if (isFullscreen) {
      // 如果文档已经处于全屏状态，则退出全屏
      if (document.fullscreenElement) {
        document.exitFullscreen?.();
        setIsFullscreen(false);
      }
    } else {
      // 如果没有进入全屏，尝试进入全屏
      if (iframe) {
        iframe.requestFullscreen?.();
        setIsFullscreen(true);
      }
    }
  };

  const previewImg = "/test.webp";
  const gameUrl = "https://files.twoplayergames.org/files/games/g1/geometry-vibes-v11/index.html";

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {/* 游戏 iframe */}
      <div
        style={{
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: "1rem",
          marginBottom: "1rem",
          display: isPlaying ? "block" : "none",
          position: isFullscreen ? "fixed" : "relative", // 全屏时让游戏固定
          top: isFullscreen ? 0 : "auto", // 全屏时调整位置
          left: isFullscreen ? 0 : "auto",
          width: isFullscreen ? "100vw" : "auto", // 全屏时占满整个视口
          height: isFullscreen ? "100vh" : "auto", // 全屏时占满整个视口
          zIndex: isFullscreen ? 9999 : "auto", // 全屏时让其显示在顶部
        }}
      >
        <iframe
          ref={iframeRef}
          src={gameUrl}
          width="850"
          height="590"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin"
          title="Geometry Dash Spam"
          style={{ width: "100%", height: "100%", border: "0" }}
          loading="lazy"
        />
      </div>

      {/* 封面图 + Play 按钮 */}
      {!isPlaying && (
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            borderRadius: "1rem",
            overflow: "hidden",
            backgroundImage: `url(${previewImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 模糊遮罩 */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />
          {/* 中心按钮 */}
          <div
            onClick={handlePlay}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            <img
              src={previewImg}
              alt="GEOMETRY DASH SPAM"
              width="200"
              height="200"
              loading="lazy"
              style={{
                borderRadius: "1rem",
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 82, 82, 0.6)",
                marginBottom: "1rem",
              }}
            />
            <div
              style={{
                backgroundColor: "#ff5252",
                color: "#fff",
                padding: "0.5rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "20px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              }}
            >
              Play Now
            </div>
          </div>
        </div>
      )}

      {/* 游戏标题 & 全屏按钮 */}
      <div
        style={{
          marginTop: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "850px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          GEOMETRY DASH SPAM
        </h1>
        <button
          onClick={handleFullscreen}
          style={{
            padding: "0.45rem 1rem",
            fontSize: "0.95rem",
            borderRadius: "0.5rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}
