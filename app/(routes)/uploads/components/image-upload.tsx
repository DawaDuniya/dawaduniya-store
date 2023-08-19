"use client";

import { useEffect, useState } from "react";
// import { button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react/";
import Image from "next/image";
import {CldUploadWidget} from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value?.map((url) => (
          <div
            key={url}
            className="relative w-[200px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 absolute top-2 right-2">
              <button
                type="button"
                className="bg-red-700 p-2 rounded-sm text-white" 
                onClick={() => onRemove(url)}
              >
                <Trash className="w-5 h-6" />
              </button>
            </div>
            <Image fill className="object-cover" alt="Image" src={url} />
          </div>
        ))}
      </div>
      <CldUploadWidget
        onUpload={onUpload}
        uploadPreset="v4ipubw1"
      >
        {({open})=>{
            const onClick= ()=>{
                open();
            }
            return(
                <button
                type={"button"}
                disabled={disabled}
                onClick={onClick}
                className="flex font-semibold text-xl px-5 w-full rounded-md gap-x-3 py-2 bg-[#01a9b6] text-white items-center"
                >
                    <ImagePlus className="h-5 w-5"/>
                    Upload Prescription
                </button>
            )
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
