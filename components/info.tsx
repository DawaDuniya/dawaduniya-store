
"use client";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
 const cart = useCart();
 const discount = Number(data.price)*data.discount/100;
 const discountPrice = Number(data.price) - discount;
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event)=>{
    event.stopPropagation();
    cart.addItem(data)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flext items-end justify-between">
        <p className="text-2xl space-x-4 text-gray-900">
          <span className="text-destructive line-through"><Currency value={data?.price}/></span>
          <Currency value={discountPrice} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="block items-center gap-x-4">
          <h3 className=" font-semibold text-black">Composition:</h3>
          <div>&nbsp;{data.subtitle}</div>
        </div>
        <div className="flex items-center gap-x-y">
          <h3 className="font-semibold text-black">Brand:</h3>
          <div>&nbsp;{data.brand}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">Add to Cart
        <ShoppingCartIcon/></Button>
      </div>
    </div>
  );
};

export default Info;
