
import { getSingleProducts } from "@/app/actions/server/product";
import CartButton from "@/components/button/CartButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProducts(id); // DB / API fetch

  return {
    title: product.title,
    description:
      product.description.slice(0, 160) ||
      "Educational toy designed to help kids learn through play.",

    openGraph: {
      title: product.title,
      description:
        "Fun and educational learning toy for kids. Safe, colorful, and engaging.",
      images: [
        {
          url: product.image || "https://i.ibb.co.com/Ld7J2ZYq/image.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: "Fun and educational learning toy for kids.",
      images: [product.image || "https://i.ibb.co.com/Ld7J2ZYq/image.png"],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } =await params;
  const product = await getSingleProducts(id);
  console.log(product);

  const {
    name,
    image,
    price,
    brand,
    discount,
    ratings,
    customerReviews,
    sold,
    description,
    ingredients,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="rounded-xl overflow-hidden ">
        <Image
          width={600}
          height={420}
          src={image || "/placeholder.png"}
          alt={name || "product image"}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(ratings) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {ratings} ({customerReviews} reviews) 
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <FaBangladeshiTakaSign />{price}
        </div>

        {/* Actions */}
        <CartButton product={product}></CartButton>
       
      </div>
      <div className="col-span-full">
        {/* Description */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          {description?.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Key Ingredients</h3>
          <ul className="list-disc list-inside space-y-1">
            {ingredients?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Q&A */}
        <div className="mt-8">
          
          <div className="mt-8">
          <h3 className="font-semibold mb-3">Customer Reviews</h3>
          <div className="space-y-3">
            {customerReviews?.map((review, i) => (
              <div key={i} className="border rounded-lg p-3">
                <p className="font-medium">{review.name}</p>
                <div className="flex text-yellow-400 text-sm my-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < review.rating ? "" : "opacity-30"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
