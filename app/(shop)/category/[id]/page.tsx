import { ProductGrid, Title } from "@/app/components";
import { Category } from "@/app/interfaces";
import { initialData } from "@/app/seed/seed";
import { notFound } from "next/navigation";


interface Props {
  params: {
    id: Category;
  }
}
const seedProducts = initialData.products;

export default async function ({ params }: Props) {
  const { id } = await params;
  // if (id === 'kids') notFound();
  const products = await seedProducts.filter(pro => pro.gender === id);

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  return (
    <>
      {/* <div>Category Page {id}</div> */}
      <Title
        title={`Artículos para ${(labels as any)[id]}`}
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />
    </>
  )
}