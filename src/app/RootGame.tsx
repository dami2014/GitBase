"use client";

import { useState, useRef, useEffect } from "react";
import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/NewGameList";
import SeriesGameList from "@/components/SeriesGameList";

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

export default function RootGame({ params }: { params?: GameParams }) {
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
                fontSize: "2rem",                 // 大号字体
                fontWeight: 800,                  // 加粗字体
                margin: 0,
                textAlign: "left",                // 左对齐
                color: "#111827",                 // 深灰色，类似 Tailwind slate-900
                fontFamily: `'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif`, // 字体族
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                userSelect: "none",
              }}
            >
              {name.split(' ').map((word, i) =>
                i === name.split(' ').length - 1 ? (  // 给最后一个单词加橙色
                  <span key={i} style={{ color: "#ff6600" }}>
                    {word}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <button
              onClick={handleFullscreen}
              style={{
                padding: "0.8rem 2rem",
                fontSize: "1.25rem",
                fontWeight: 800,
                borderRadius: "0.75rem",
                backgroundColor: "#ff6600",   // 橙色主色调，呼应标题高亮
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(255, 102, 0, 0.4)",
                transition: "background-color 0.3s ease, transform 0.15s ease",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e65c00";  // 橙色悬停色
                e.currentTarget.style.transform = "scale(1.07)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(230, 92, 0, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ff6600";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(255, 102, 0, 0.4)";
              }}
            >
              Fullscreen
            </button>
          </div>


          <h2 className="text-xl mt-8 font-semibold">Geometry Dash Series</h2>
          <SeriesGameList />
        </div>

        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden md:block">
          <NewGameList />
        </div>
      </div>
    </main>
  );
}
