import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react/";
import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(data.quantity);

  const onIncrease = () => {
    setQuantity(quantity + 1);
    cart.addItem(data);
  };

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      cart.remove1Item(data.id);
    } else {
      cart.removeItem(data.id);
    }
  };

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  let numericPrice = 0;

  if (typeof data.price === "string") {
    numericPrice = parseFloat(data.price);
  } else if (typeof data.price === "number") {
    numericPrice = data.price;
  }

  return (
    <li className="flex py-6 border-b rounded-md bg-white my-6 px-8  shadow-md">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt="image"
          className="object-cover object-center"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6 ">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={10} />} />
        </div>
        <div>
          <div className="relative pr-9 mr-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div className="flex justify-between ">
              <p className="md:text-lg sm:text-sm font-semibold text-black">
                {data.name}
              </p>
            </div>
            <div className="mt-1 flex text-lg">
              <div className="ml-4 px-4 flex items-center">
                <button
                  className="text-black-500 focus:outline-none"
                  onClick={onDecrease}
                >
                  -
                </button>
                <p className="mx-2">{quantity}</p>
                <button
                  className="text-black-500 focus:outline-none"
                  onClick={onIncrease}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="mt-2 md:flex block items-center gap-x-2">
            <h2 className="text-md font-semibold">Composition:</h2>
            <p className="text-md w-full">{data.subtitle}</p>
          </div>
          <div className="mt-2 md:flex block items-center gap-x-2">
            <h2 className="text-md font-semibold">Category:</h2>
            <p className="text-md w-full">{data.category.name}</p>
          </div>
          <div className="mt-2 flex items-center gap-x-2">
            <h2 className="text-md font-semibold">Brand Name:</h2>
            <p className="text-md">{data.brand}</p>
          </div>
          <div className="mt-2 flex items-center gap-x-2">
            <h2 className="text-md font-semibold">Price:</h2>
            <Currency value={numericPrice * quantity} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
