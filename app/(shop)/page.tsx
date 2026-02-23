import { ProductGrid, Title } from "@/app/components";
import { initialData } from "@/app/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />
    </>
  );
}
