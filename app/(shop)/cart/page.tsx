import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { QuantitySelector, Title } from "@/app/components";
import { initialData } from "@/app/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[3],
]

export default function () {
  // redirect('/empty');

  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>


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
                      <p>${product.price}</p>
                      <QuantitySelector quantity={3} />

                      <button className="underline text-red-500 mt-3">
                        Remover
                      </button>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Checkout */}
          <div className="bg-black/90 rounded-xl shadow-white shadow-lg p-7">
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
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}