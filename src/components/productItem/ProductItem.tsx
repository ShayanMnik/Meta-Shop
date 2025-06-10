import type { Products } from "../../types/servers"


type ProductsTypes = Products



function ProductItem({ ...items }: ProductsTypes) {


  return (
    <div className="h-full shadow">
      <div className="p-7">
        <img className="rounded" src={items.imageUrl} alt="1" />
      </div>
      <div className="flex justify-between px-7 h-14 ">
        <h3 className="flex items-center justify-center text-[14px]">{items.title}</h3>
      </div>
      <div className="flex items-center justify-between px-7  h-10">
        <p className="w-24 flex items-center justify-start text-[13px]">{items.price} $</p>
        <p className="flex items-center gap-1 text-[13px]">{items.rating}<span>⭐</span></p>
      </div>
      <div className="mb-4 flex items-center justify-center h-16">
        <p className="text-[9px] opacity-75 line-clamp-3 px-7 text-[#333]">{items.desc}</p>
      </div>
    </div>
  )
}

export default ProductItem




