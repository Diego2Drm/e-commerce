import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <section className="flex justify-center items-center h-screen">
      <IoCartOutline size={80} className="mx-5" />

      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Tu carrito está vacío</h2>
        <Link
          href='/'
          className="text-blue-500 mt-3 text-4xl">
          Regresar
        </Link>

      </div>

    </section>
  )
}