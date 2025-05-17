"use client";

import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/NewGameList";
import SeriesGameList from "@/components/SeriesGameList";

export default function DmcaPage() {
  return (
    <main>
      <div className="flex justify-center py-2 gap-x-4">
        {/* 左侧热门游戏 */}
        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden xl:block">
          <HotGameList />
        </div>

        {/* 中间内容 */}
        <div style={{ width: "100%", margin: "0 auto" }}>
          {/* DMCA 内容区域 */}
          <div
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              padding: "2rem",
              backgroundColor: "#f9fafb",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "1.5rem",
                fontFamily: `'Segoe UI', 'Helvetica Neue', 'Arial', sans-serif`,
              }}
            >
              Digital Millennium Copyright Act (DMCA)
            </h1>

            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#374151", marginBottom: "1.5rem" }}>
              We respect the intellectual property rights of others. If you believe that any content on this site
              infringes your copyright, please notify us under the procedures outlined below.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              How to File a DMCA Complaint
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              Please provide the following information in your DMCA notice:
            </p>

            <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem", color: "#374151" }}>
              <li>1. Your physical or electronic signature.</li>
              <li>2. Description of the copyrighted work that you claim has been infringed.</li>
              <li>3. The URL or exact location of the allegedly infringing material.</li>
              <li>4. Your contact information (email, phone number, address).</li>
              <li>5. A statement that you have a good faith belief that the disputed use is not authorized.</li>
              <li>6. A statement under penalty of perjury that the information is accurate.</li>
            </ul>

            <p style={{ marginTop: "1rem", color: "#374151" }}>
              Email your DMCA notice to:
            </p>
            <p style={{ fontWeight: "bold", color: "#1f2937" }}>
              dmca@yourdomain.com
            </p>
          </div>

          {/* 保留游戏推荐部分 */}
          <div className="mt-10 px-4">
            <h2 className="text-xl mt-4 font-semibold">Geometry Dash Series</h2>
            <SeriesGameList />
          </div>
        </div>

        {/* 右侧新游戏 */}
        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden md:block">
          <NewGameList />
        </div>
      </div>
    </main>
  );
}
