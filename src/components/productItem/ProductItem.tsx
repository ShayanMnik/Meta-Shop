import type { Products } from "../../types/servers"


type ProductsTypes = Products



function ProductItem({...items}: ProductsTypes) {
  

  return (
    <div className="h-full shadow">
        <div className="p-7">
          <img className="rounded" src={items.imageUrl} alt="1" />
        </div>
        <div className="flex justify-between px-7 mb-2 h-16">
            <h3 className="flex items-center justify-center text-[13px]">{items.title}</h3>
            <p className="w-24 flex items-center justify-end text-[12px]">{items.price} $</p>
        </div>
        <p className="text-[9px] opacity-75 line-clamp-3 px-7 mb-7 text-[#333]">{items.desc}</p>
    </div>
  )
}

export default ProductItem




