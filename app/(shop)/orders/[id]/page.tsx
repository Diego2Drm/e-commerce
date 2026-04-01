import Image from "next/image";
import Link from "next/link";
import { Title } from "@/app/components";
import { initialData } from "@/app/seed/seed";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[3],
];

interface Props {
  params: {
    id: string
  }
}

export default async function ({ params }: Props) {
  const { id } = await params;

  // Todo: Verificar --> redirect(/)

  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div className={clsx(
              'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
              { 'bg-red-500': false },
              { 'bg-green-700': true },
            )}>
              <IoCardOutline size={30} />
              {/* <p className="mx-2">Pendiente de pago</p> */}
              <p className="mx-2">Orden pagada</p>
            </div>


            {/* Items */}
            <ul>
              {
                productsInCart.map(product => (
                  <li key={product.title} className="mb-5 border flex rounded-xl">
                    <Image
                      src={`/products/${product.images[0]}`}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="mr-5 rounded"
                    />

                    <div>
                      <p>{product.title}</p>
                      <p>${product.price} * 3</p>
                      <p className="font-bold">Subtotal: ${product.price * 3}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Checkout - Resumen de orden*/}
          <div className="bg-black/90 rounded-xl shadow-white shadow-lg p-7">

            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-5">
              <p className="text-xl">Diego Ramírez</p>
              <p>Av. siemple viva 123</p>
              <p>Col. centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>C.P. 12345</p>
              <p>Tel: 123456789</p>
            </div>

            <div className="bg-gray-600 w-full h-0.5 rounded mb-5" />

            <h2>Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-right text-2xl">$ 100</span>
            </div>

            <div className="mt-5 w-full">
              <div className={clsx(
                'flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5',
                { 'bg-red-500': false },
                { 'bg-green-700': true },
              )}>
                <IoCardOutline size={30} />
                {/* <p className="mx-2">Pendiente de pago</p> */}
                <p className="mx-2">Orden pagada</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}