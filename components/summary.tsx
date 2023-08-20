"use client";
import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const revalidate = 0;
const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    let iprice = item.quantity * Number(item.price);
    return total + iprice;
  }, 0);

  const onCheckout = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
          productQuantity: items.reduce(
            (total, item) => total + item.quantity,
            0
          ),
        }
      );
      window.location = response.data.url;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="
        mt-16
        rounded-lg
        bg-gray-100
        px-4
         py-6
         sm:p-6 
         lg:col-span-5
         lg:mt-0
         lg:p-8
        "
    >
      <h2 className=" text-lg font-bold text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 ">
          <div className="text-base font-medium text-gray-900 ">
            Order Total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={loading} onClick={onCheckout} className="w-full mt-6">
        {loading ? <p>Loading..</p> : <p>Checkout</p>}
      </Button>
    </div>
  );
};

export default Summary;
