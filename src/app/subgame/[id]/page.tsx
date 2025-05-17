// app/subgame/[id]/page.tsx
import { notFound } from "next/navigation";
import { numSeriesGame, hotGames, newGames, subzeroGames, liteGames, worldGames, meltdownGames } from "../../../lib/games";
import RootGame from "../../RootGame";

const allGames = [...numSeriesGame, ...hotGames, ...newGames, ...subzeroGames, ...liteGames, ...worldGames, ...meltdownGames];

export default async function SubGamePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const game = allGames.find((g) => g.id === id);
  if (!game) {
    notFound();
  }

  return <RootGame params={game} />;
}

export async function generateStaticParams() {
  const allGames = [...numSeriesGame, ...hotGames, ...newGames];
  // 去重，防止 id 冲突或重复生成
  const uniqueGames = Array.from(new Map(allGames.map(g => [g.id, g])).values());
  return uniqueGames.map((g) => ({ id: g.id }));
}
