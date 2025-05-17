
import { Metadata } from "next";
import RootGame from "@/app/RootGame";

export const metadata: Metadata = {
  title: "GitBase - Open Source Dynamic Website CMS Without Database",
  description:
    "A Next.js site with Tailwind & Shadcn/UI, using GitHub API for content management. No database needed for dynamic updates.",
};

export default function Home() {
  return (
    <div>
      <RootGame />
    </div>
  );
}
