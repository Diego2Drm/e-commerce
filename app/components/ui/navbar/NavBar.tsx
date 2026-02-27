'use client';
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5"
import { titleFont } from "@/app/ui/fonts";
import { useUIStore } from "@/app/store";


export function NavBar() {
  const { openSIdeMenu } = useUIStore()

  return (
    <nav className="flex px-5 justify-between items-baseline w-full">
      {/* Logo */}
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Shop
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          href='/category/men'
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400">
          Hombres
        </Link>

        <Link
          href='/category/women'
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400">
          Mujeres
        </Link>

        <Link
          href='/category/kids'
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400">
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-3">

        <Link href='/search'>
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href='/cart'>
          <div className="relative">
            <span className="absolute text-xs rounded-full bg-gray-500 -top-2 -right-2 px-1">3</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-400"
          onClick={openSIdeMenu}
        >
          Menú
        </button>

      </div>
    </nav>
  )
}
