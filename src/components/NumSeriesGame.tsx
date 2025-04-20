"use client";

import { useState, useRef, useEffect } from "react";
import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/newGameList";
import NumSeriesGameList from "@/components/NumSeriesGameList";

interface GameParams {
  id: string;
  name: string;
  iframeSrc: string;
  imageSrc: string;
}

const defaultGame: GameParams = {
  id: "Geometry-Dash-Nemesyis",
  name: "Geometry Dash Nemesis",
  iframeSrc:
    "https://files.twoplayergames.org/files/games/g1/geometry-vibes-v11/index.html",
  imageSrc: "/test.webp",
};

export default function GeometryDashGame({ params }: { params?: GameParams }) {
  const { name, iframeSrc, imageSrc } = params ?? defaultGame;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => setIsPlaying(true);

  const handleFullscreen = async () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
  
    try {
      // 当点击 fullscreen 时，确保 iframe 显示出来
      if (!isPlaying) {
        setIsPlaying(true); // 确保 iframe 被渲染出来
      }
  
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        await iframe.requestFullscreen();
        setIsFullscreen(true);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };
  

  // 监听退出全屏（比如按 ESC）
  useEffect(() => {
    const onFullChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", onFullChange);
    return () => document.removeEventListener("fullscreenchange", onFullChange);
  }, []);

  return (
    <main>
      <div className="flex justify-center py-2 gap-x-4">
        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden xl:block">
          <HotGameList />
        </div>

        <div style={{ width: "100%", margin: "0 auto" }}>
          <div
            style={{
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: "1rem",
              marginBottom: "1rem",
              display: isPlaying ? "block" : "none",
            }}
          >
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              width="850"
              height="590"
              scrolling="no"
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin"
              title={name}
              style={{ width: "100%", height: "100%", border: "0" }}
              loading="lazy"
            />
          </div>

          {!isPlaying && (
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              />
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
                  src={imageSrc}
                  alt={name}
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
              {name}
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

          <h2 className="text-xl mt-8 font-semibold">更多子游戏</h2>
          <NumSeriesGameList />
        </div>

        <div className="mx-auto min-w-[300px] bg-gray-100 text-center">
          <NewGameList />
        </div>
      </div>
    </main>
  );
}
