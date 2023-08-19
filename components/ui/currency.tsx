"use client";
import { useState, useEffect } from "react";

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});
interface CurrencyProps {
  value: string | number;
}
const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(()=>{
    setIsMounted(true)
  },[])
  if(!isMounted){
    return null
  }

  return <span className="font-semibold">{formatter.format(Number(value))}</span>;
};

export default Currency;
