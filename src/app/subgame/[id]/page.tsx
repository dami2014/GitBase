// app/subgame/[id]/page.tsx
import { notFound } from "next/navigation";
import { numSeriesGame } from "../../../lib/games";
import GeometryDashGame from "../../../components/NumSeriesGame";

export default async function SubGamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const game = numSeriesGame.find((g) => g.id === id);
  if (!game) {
    notFound();
  }

  return <GeometryDashGame params={game} />;
}

export async function generateStaticParams() {
  return numSeriesGame.map((g) => ({ id: g.id }));
}
