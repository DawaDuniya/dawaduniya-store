"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "@/app/(routes)/cart/components/cart-item";
import Summary from "@/components/summary";
import { ShoppingCartIcon } from "lucide-react";

export const revalidate = 0;
const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white mt-8">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black ">Shopping Cart</h1>
          <div className="mt-8 bg-slate-200 rounded-md shadow-xl lg:grid lg:grid-cols-12 lg:items-center gap-x-12 ">
            <div className="lg:col-span-7 flex items-center h-full justify-center" >
              
              {cart.items.length === 0 && (
                <div className="flex items-center text-neutral-500 justify-center  mx-auto w-full mt-12">
                  <ShoppingCartIcon size={100}/>
                  <p className="text-neutral-500 font-semibold text-2xl">Empty Cart</p>
                </div>
              )}
              <ul className="w-full h-full flex-1 px-4 rounded-md justify-center">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item}/>
                ))}
              </ul>
            </div>

            <Summary/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;