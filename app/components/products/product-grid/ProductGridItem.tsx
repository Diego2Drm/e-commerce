'use client';
import { Product } from "@/app/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <article className="rounded-md overflow-hidden fadeIn">
      <Link href={`/product/${product.slug}`}>
        <Image
          // src={`/products/${product.images[0]}`}
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`}
          className="hover:text-cyan-600 hover:font-bold transition-all"
        >
          {product.title}
        </Link>
        <span className="font-bold">
          $ {product.price}
        </span>

      </div>


    </article>
  )
}