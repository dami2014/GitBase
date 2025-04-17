// pages/index.js
import fs from "fs";
import path from "path";
import { getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import NumSeriesGameList from "@/components/numSeriesGameList";
import HotGameList from "@/components/HotGameList";
import NewGameList from "@/components/newGameList";
import GeometryDashGame from "@/components/mainGame";

export const metadata: Metadata = {
  title: "GitBase - Open Source Dynamic Website CMS Without Database",
  description:
    "A Next.js site with Tailwind & Shadcn/UI, using GitHub API for content management. No database needed for dynamic updates.",
};

export default function Home() {

  return (
    //<div className="container mx-auto py-12">
    <main>
      <div className="flex justify-center py-8">
        {/* 左侧广告，仅在 2XL 屏幕显示 */}
        <div className="hidden 2xl:block w-[300px]">
          <div className="mx-auto min-w-[240px] min-h-[200px] bg-gray-100 text-center">
            左侧广告
            <NewGameList />
          </div>
        </div>

        {/* 主内容区域 */}

        <div className="flex-1 max-w-[1200px] px-4">
          <GeometryDashGame />
          <NumSeriesGameList />
        </div>

        {/* 右侧广告，仅在 2XL 屏幕显示 */}
        <div className="hidden xl:block w-[300px]">
          <div className="mx-auto min-w-[240px] min-h-[200px] bg-gray-100 text-center">
            右侧广告
            <HotGameList />
          </div>
        </div>
      </div>
    </main>
    //</div>
  );
}
