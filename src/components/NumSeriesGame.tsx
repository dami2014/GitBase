"use client";

import { useState, useRef } from "react";
import NumSeriesGameList from "./NumSeriesGameList"; // 确保路径正确

interface GameParams {
  id: string;
  name: string;
  iframeSrc: string;
  imageSrc: string;
}

export default function GeometryDashGame({ params }: { params: GameParams }) {
  const { name, iframeSrc, imageSrc } = params;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => setIsPlaying(true);

  const handleFullscreen = () => {
    const iframe = iframeRef.current;
    if (isFullscreen && document.fullscreenElement) {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    } else if (iframe) {
      iframe.requestFullscreen?.();
      setIsFullscreen(true);
    }
  };

  return (
    <main>
      <div className="flex justify-center py-8">
        <div className="hidden 2xl:block w-[300px]">
          <div className="mx-auto min-w-[240px] min-h-[200px] bg-gray-100 text-center">
            左侧广告
          </div>
        </div>

        <div style={{ width: "100%", margin: "0 auto" }}>
          <div
            style={{
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: "1rem",
              marginBottom: "1rem",
              display: isPlaying ? "block" : "none",
              position: isFullscreen ? "fixed" : "relative",
              top: isFullscreen ? 0 : "auto",
              left: isFullscreen ? 0 : "auto",
              width: isFullscreen ? "100vw" : "auto",
              height: isFullscreen ? "100vh" : "auto",
              zIndex: isFullscreen ? 9999 : "auto",
            }}
          >
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              width="850"
              height="590"
              scrolling="no"
              frameBorder="0"
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

        <div className="hidden xl:block w-[300px]">
          <div className="mx-auto min-w-[240px] min-h-[200px] bg-gray-100 text-center">
            右侧广告
          </div>
        </div>
      </div>
    </main>
  );
}
