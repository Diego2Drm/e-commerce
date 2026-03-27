import { ProductSlideShow, SizeSelector } from "@/app/components";
import { QuantitySelector } from "@/app/components";
import { initialData } from "@/app/seed/seed";
import { titleFont } from "@/app/ui/fonts";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string
  }
}

export default async function ({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find(product => product.slug === slug);

  if (!product) notFound();


  return (
    <section className="mt-5 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* Slides Show */}
      <div className="col-span-1 md:col-span-2">
        <ProductSlideShow title={product.title} images={product.images}/>
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">
          ${product.price}
        </p>

        {/* Selector de Tallas */}
        <SizeSelector selectorSize={product.sizes[1]} availableSizes={product.sizes} />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button */}
        <button className="btn-primary my-5">
          Agregar al Carrito
        </button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">
          Descripción
        </h3>
        <p>{product.description}</p>
      </div>
    </section>
  )
}