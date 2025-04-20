'use client';

import Link from 'next/link';
import { newGames } from '../lib/games';
import { useState } from 'react';

export default function NewGameList() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '20px',
        gridAutoRows: 'minmax(120px, auto)',
        gridAutoFlow: 'dense',
        marginTop: '45px',
        marginBottom: '45px',
      }}
    >
      {newGames.map((game) => (
        <HoverCard key={game.id} game={game} />
      ))}
    </div>
  );
}

function HoverCard({ game }: { game: any }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/subgame/${game.id}`}
      data-device="mobile"
      style={{
        position: 'relative',
        border: '0',
        borderRadius: '1rem',
        overflow: 'hidden',
        display: 'block',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <picture>
        <source data-srcset={game.imageSrc} type="image/webp" />
        <img
          data-src={game.imageSrc}
          alt={game.name}
          className="lazyload"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '1rem',
            display: 'block',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
      </picture>

      {/* 浮层文字，透明渐变效果 */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '0.75rem 0.5rem',
          textAlign: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          fontSize: '0.9rem', // 字体稍大一点
          fontWeight: 600,
          color: 'white',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent)', // 更轻的黑底渐变
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
      >
        {game.name}
      </div>
    </Link>
  );
}
