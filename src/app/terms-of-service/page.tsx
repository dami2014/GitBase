"use client";

import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/NewGameList";
import SeriesGameList from "@/components/SeriesGameList";

export default function TermsOfServicePage() {
  return (
    <main>
      <div className="flex justify-center py-2 gap-x-4">
        {/* 左侧热门游戏 */}
        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden xl:block">
          <HotGameList />
        </div>

        {/* 中间内容 */}
        <div style={{ width: "100%", margin: "0 auto" }}>
          {/* 服务条款内容区域 */}
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
              Terms of Service
            </h1>

            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#374151", marginBottom: "1.5rem" }}>
              Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Use of Service
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Intellectual Property
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              All content on this website, including text, graphics, logos, and software, is the property of the website owner or its licensors and is protected by copyright laws.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              User Content
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              If you submit content to the website, you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute it in connection with the services.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Limitation of Liability
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              We are not liable for any damages arising out of or in connection with the use or inability to use the website or services.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Changes to Terms
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              We reserve the right to modify these Terms of Service at any time. Continued use of the website constitutes acceptance of any changes.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Contact Information
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p style={{ fontWeight: "bold", color: "#1f2937" }}>
              support@yourdomain.com
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
