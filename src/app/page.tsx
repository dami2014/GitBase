
import { Metadata } from "next";
import GeometryDashGame from "@/components/NumSeriesGame";

export const metadata: Metadata = {
  title: "GitBase - Open Source Dynamic Website CMS Without Database",
  description:
    "A Next.js site with Tailwind & Shadcn/UI, using GitHub API for content management. No database needed for dynamic updates.",
};

export default function Home() {
  return (
    <div>
      <GeometryDashGame />
    </div>
  );
}
