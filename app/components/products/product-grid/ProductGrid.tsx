import { Product } from "@/app/interfaces"
import { ProductGridItem } from "./ProductGridItem";


interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-10">
      {
        products.map(product => (
          <ProductGridItem key={product.slug} product={product} />
        ))
      }
    </section>
  )
}