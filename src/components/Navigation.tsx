"use client";

import Link from "next/link";
import {
  liteGames,
  subzeroGames,
  worldGames,
  meltdownGames,
} from "@/lib/games";

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm">
      <script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
      ></script>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 网站名称 */}
          <Link
            href="/"
            className="text-xl font-extrabold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Geometry Dash Club
          </Link>

          {/* 导航链接 */}
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <NavItem href={`/subgame/${subzeroGames[0]?.id}`} label="Subzero" />
            <NavItem href={`/subgame/${liteGames[0]?.id}`} label="Lite" />
            <NavItem href={`/subgame/${worldGames[0]?.id}`} label="World" />
            <NavItem
              href={`/subgame/${meltdownGames[0]?.id}`}
              label="Meltdown"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

// 子组件：每个导航项
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      Geometry Dash {label}
    </Link>
  );
}
