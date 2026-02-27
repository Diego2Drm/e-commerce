'use client';
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {


  return (
    <section>
      {/* Background black */}
      <div
        className="fixed inset-0 w-screen h-screen z-10 bg-black opacity-30"
      />

      {/* Blur */}
      <div
        className="fade-in fixed inset-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
      />

      {/* Sidemenu */}
      <aside className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300">

        <IoCloseOutline
          size={30}
          className="absolute right-5 top-4 cursor-pointer text-black"
          onClick={() => console.log('click')}
        />

        {/* Input */}
        <div className="relative mt-10">
          <IoSearchOutline
            size={20}
            className="text-black absolute top-2 left-2"
          />
          <input type="text"
            placeholder="Buscar"
            className="w-full bg-gray-100 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-400 focus:outline-none focus:border-blue-500 placeholder:text-black placeholder:opacity-30"
          />
        </div>

        {/* Menu */}
        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Salir</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-300 my-10" />

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={30} className="text-black" />
          <span className="ml-3 text-xl text-black">Usuarios</span>
        </Link>



      </aside>
    </section>

  )
}