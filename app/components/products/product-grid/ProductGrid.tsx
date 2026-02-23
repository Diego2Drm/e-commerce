import { Product } from "@/app/interfaces"


interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 pb-10">
      {
        products.map(product => (
          <span key={product.slug}>{product.title}</span>
        ))
      }
    </section>
  )
}