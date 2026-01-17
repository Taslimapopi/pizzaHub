"use client";
import CartButton from "@/components/button/CartButton";
import { useEffect, useState } from "react";

const foods = [
  {
    name: "Classic Margherita Pizza",
    price: 550,
    image: "https://i.ibb.co.com/S4xpvmq6/fatima-akram-u-U0-Anw-8-Vsg-unsplash.jpg",
  },
  {
    name: "Pepperoni Pizza",
    price: 750,
    image: "https://i.ibb.co.com/tT7gfcx5/drake-whitney-p-Wq-Mo3bhv3-A-unsplash-1.jpg",
  },
  {
    name: "Veggie Supreme Pizza",
    price: 680,
    image: "https://i.ibb.co.com/B57yXSXc/Veggie-Supreme-Pizza.jpg",
  },
  {
    name: "Classic Beef Burger",
    price: 420,
    image: "https://i.ibb.co.com/M4FHvXX/Classic-Beef-Burger.jpg",
  },
  {
    name: "Loaded Burger",
    price: 600,
    image: "https://i.ibb.co.com/M5kxR0TW/Loaded-Burger.webp",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % foods.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {foods.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center ">
            <div className="max-w-3xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-3xl font-bold mb-4 animate-fadeInUp">
                {item.name}
              </h1>
              <p className="text-xl mb-6">৳ {item.price}</p>
              {/* <button className="bg-[#50E3C2] text-black px-6 py-3 rounded-md font-semibold hover:bg-cyan-400 transition">
                Add to Cart
              </button> */}
              
              <CartButton></CartButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
