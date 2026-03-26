import type { Size } from "@/app/interfaces"
import clsx from "clsx"

interface Props {
  selectorSize: Size
  availableSizes: Size[]
}

export const SizeSelector = ({ selectorSize, availableSizes }: Props) => {

  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {
          availableSizes.map(size => (
            <button key={size}
              className={clsx(
                "mx-2 hover:underline hover:bg-blue-300 transition-all text-lg py-1 px-2 rounded cursor-pointer",
                {
                  'underline bg-blue-400': size === selectorSize
                }
              )}
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  )
}
