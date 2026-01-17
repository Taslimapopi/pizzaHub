import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-12 h-12 rotate-45 overflow-hidden rounded-md bg-white">
        <Image
          src="/logo.png"
          alt="pizzaHub logo"
          fill
          className="-rotate-45 object-contain p-1"
        />
      </div>

      <h2 className="text-2xl">
        <span className="text-primary font-bold">piZ</span>za
        <span className="text-primary font-bold">Hub</span>
      </h2>
    </Link>
  );
};

export default Logo;
