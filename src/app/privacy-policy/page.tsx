"use client";

import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/NewGameList";
import SeriesGameList from "@/components/SeriesGameList";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <div className="flex justify-center py-2 gap-x-4">
        {/* 左侧热门游戏 */}
        <div className="mx-auto min-w-[300px] bg-gray-100 text-center hidden xl:block">
          <HotGameList />
        </div>

        {/* 中间内容 */}
        <div style={{ width: "100%", margin: "0 auto" }}>
          {/* 隐私政策内容区域 */}
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
              Privacy Policy
            </h1>

            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "#374151", marginBottom: "1.5rem" }}>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Information We Collect
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              We may collect the following types of information:
            </p>
            <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem", color: "#374151" }}>
              <li>1. Personal identification information (such as name, email address, phone number).</li>
              <li>2. Usage data, including pages visited and time spent on the site.</li>
              <li>3. Cookies and tracking technologies to enhance your experience.</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              How We Use Your Information
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              We use the information we collect to:
            </p>
            <ul style={{ paddingLeft: "1.25rem", marginTop: "1rem", color: "#374151" }}>
              <li>1. Provide and maintain our website.</li>
              <li>2. Respond to your inquiries and provide customer support.</li>
              <li>3. Analyze usage and improve our services.</li>
              <li>4. Send you updates and promotional materials (with your consent).</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Sharing Your Information
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              We do not sell, trade, or rent your personal information to others. We may share information with trusted third parties who assist us in operating our website or conducting business, subject to confidentiality agreements.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Your Rights
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              You have the right to access, correct, or delete your personal data. You may also opt out of receiving promotional communications at any time by contacting us.
            </p>

            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "1.5rem", color: "#111827" }}>
              Contact Us
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151" }}>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p style={{ fontWeight: "bold", color: "#1f2937" }}>
              privacy@yourdomain.com
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
