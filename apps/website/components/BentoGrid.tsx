import Link from "next/link";
import React from "react";

interface BentoCardProps {
  bgImage: string;
  className?: string;
  url: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  bgImage,
  className = "",
  url,
}) => {
  return (
    <Link
      href={url}
      className={`relative rounded-lg overflow-hidden group ${className}`}
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-80 group-hover:opacity-100 duration-300 transition-transform ease-in-out transform group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </Link>
  );
};

interface Card {
  bgImage: string;
  className?: string;
  url: string;
}

const BentoGrid: React.FC = () => {
  const cards: Card[] = [
    {
      bgImage: "/assets/hero/bento/1.png",
      url: "/components",
      className: "col-span-1 row-span-1",
    },
    {
      bgImage: "/assets/hero/bento/6.png",
      url: "/tools/shadows",
      className: "col-span-2 row-span-1",
    },

    {
      bgImage: "/assets/hero/bento/2.png",
      className: "aspect-square",
      url: "/store?tab=Templates",
    },
    {
      bgImage: "/assets/hero/bento/7.png",
      url: "/store?tab=Component%20Packs",
      className: "col-span-1 row-span-1",
    },

    {
      bgImage: "/assets/hero/bento/4.png",
      className: "aspect-square",
      url: "/pricing",
    },
    {
      bgImage: "/assets/hero/bento/3.png",
      className: "col-span-2 aspect-[45px]",
      url: "/tools/colors",
    },
    {
      bgImage: "/assets/hero/bento/5.png",
      className: "aspect-square",
      url: "/faqs",
    },
  ];

  return (
    <div className="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-4">
      {cards.map((card, index) => (
        <BentoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default BentoGrid;
