"use client";
import { Product } from "@/types";

interface DescriptionProps {
  data: Product;
}
const Description: React.FC<DescriptionProps> = ({ data }) => {
  return (
    <div className="">
      <div className="gap-y-6">
        <div className="block mt-8 gap-x-4">
          <h3 className=" font-bold  py-2 text-xl text-black bg-slate-200">Introduction:</h3>
          <p>{data.introduction}</p>
        </div>
        <div className="block mt-8 gap-x-4">
        <h3 className=" font-bold py-2 text-xl text-black bg-slate-200">Use:</h3>
          <p>{data.use}</p>
        </div>
        <div className="block mt-8 gap-x-4">
        <h3 className=" font-bold py-2 text-xl text-black bg-slate-200">Side Effects:</h3>
          <p>{data.sideEffect}</p>
        </div>
        <div className="block mt-8 gap-x-y">
          <h3 className="font-bold py-2 text-xl text-black bg-slate-200">Directions:</h3>
          <p>{data.direction}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
