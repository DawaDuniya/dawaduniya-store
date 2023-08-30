"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CreditCard } from "lucide-react";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [cust_name, setCustName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  let deliveryPrice = 0;
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);
  
  
  const totalCartPrice = items.reduce((total, item) => {
    let iprice = item.quantity * Number(item.price);
    return total + iprice;
  }, 0);
  

  
    if(totalCartPrice > 0){
      deliveryPrice = 50;
    }
    if(totalCartPrice >= 2000){
      deliveryPrice= 0;
    }
  
  
  const totalPrice= items? totalCartPrice + deliveryPrice : 0;
  const onCheckout = async () => {

    if((items.length==0)){
      toast.error("Your cart is empty");
      return;
    }

    if (!cust_name || !address || !phone) {
      toast.error("Please fill in all required information.");
      return;
    }

   

    setLoading(true)
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        cust_name,
        address,
        phone,
        productIds: items.map((item) => item.id),
        productQuantity: items.map(
          (item) => item.quantity,
          0
        ),
      }
    );

    window.location = response.data.url;
  };

  

  const onCheckoutWhatsapp = async() =>{
    if((items.length==0)){
      toast.error("Your cart is empty");
      return;
    }
    if (!cust_name || !address || !phone) {
      toast.error("Please fill in all required information.");
      return;
    }
    
    setLoading(true)
    const itemName= items.map((item)=>{
      let itemName= String(item.name);
      return itemName;
    },"")
    const itemQuantity= items.map((item)=>{
      let quantity= Number(item.quantity);
      return quantity;
    },"")
    
    
    window.location.href="https://wa.me/+919354227521?text=Hello,%0AI%20want%20to%20order%20following%0AProduct:%20"+itemName+"%0AQuantity:%20"+itemQuantity+"%0AContact%20No:%20"+phone +"%0AAddress:%20"+address+"%0APrice:%20"+totalCartPrice+"%0A%0A~"+cust_name;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
      <div className="mt-6 lg:mt-1 space-y-4">
        <div className="flex flex-col gap-x-4 md:flex-row lg:flex-col items-start justify-around border-t border-gray-200 pt-4">
          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-full">
            <input
              className="text-black shadow-md rounded-md w-full outline-none my-2 py-1 px-4 bg-white placeholder:text-gray-800"
              type="text"
              placeholder="Name"
              value={cust_name}
              onChange={(e) => setCustName(e.target.value)}
            />
            <input
              className="text-black shadow-md rounded-md w-full outline-none my-2 py-1 px-4 bg-white placeholder:text-gray-800"
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea 
            className="text-black shadow-md rounded-md w-full resize-none placeholder:text-gray-800 px-4 my-2 py-1" 
            rows={5}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"></textarea>
          </div>
          
          <div className="flex flex-col w-full sm:w-1/3 lg:w-full md:w-1/3 gap-x-4">
            <div className="flex mt-6">
            <div className="md:block text-base font-medium text-gray-900">
              Total-Cart:&nbsp;
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <Currency value={totalCartPrice} />
            </div>
            </div>
            <div className="flex mt-6">
            <div className="md:block text-base font-medium text-gray-900">
              Delivery Charge:&nbsp;
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <Currency value={deliveryPrice} />
            </div>
            </div>
            <div className="flex mt-6">
            <div className="md:block text-base font-medium text-gray-900">
              Total:
            </div>
            <div className="md:w-1/3 lg:w-1/4">
              <Currency value={totalPrice} />
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button disabled={loading} onClick={onCheckout} className="w-full mt-6">
        {loading ? <p>Loading..</p> : <p className="text-lg"><CreditCard className=" inline" /> Pay with Card</p>}
      </Button>
      <div className="flex my-5 flex-col justify-center items-center">
        <h1 className="font-bold">Or</h1>
        <p className="font-semibold to-gray-700">For partial payments or other options </p>
      </div> */}
      <Button disabled={loading} onClick={onCheckoutWhatsapp} className="w-full ">
        {loading ? <p>Loading..</p> : <p className="text-lg"><FontAwesomeIcon size="1x" icon={faWhatsapp}/> Order via Whatsapp</p>}
      </Button>
    </div>
  );
};

export default Summary;
