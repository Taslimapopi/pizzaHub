import HeroBanner from "@/components/layout/home/HeroBanner";
import Product from "@/components/layout/home/Product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
        <HeroBanner></HeroBanner>
      </section>
      <section>
        <Product></Product>
      </section>
      
    </div>
  );
}
