import React, { useState } from "react";
import ImageUpload from "@/app/(routes)/uploads/components/image-upload";
import axios from "axios";
import { toast } from "react-hot-toast";

interface PrescriptionFormProps {
  onsave: () => void;
}

const PrescriptionForm: React.FC<PrescriptionFormProps> = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageURL, setImageURL] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const handleImageUpload = (newImageUrl: string) => {
    setImageURL([...imageURL, newImageUrl]);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const prescriptionData = {
        name,
        phoneNumber,
        imageURL,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/prescription`,
        prescriptionData
      );
      toast.success("Prescription Uploaded Successfully");
      window.location = res.data.url;
    } catch (error) {
      toast.error("Oops! Something Went Wrong");
    }
  };

  function handleImageRemove(value: string): void {
    const updatedImageURL = imageURL.filter((url) => url !== value);
    setImageURL(updatedImageURL);
  }

  return (
    <div className="flex sm:pt-16  px-2 w-full h-full bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex rounded-lg shadow-lg mx-auto p-10   my-40 bg-white flex-col items-start"
      >
        <h2 className="text-2xl font-bold">Upload Prescription</h2>
        <input
          className="text-black w-full outline-none my-5 py-1 px-4 bg-gray-100 placeholder:text-gray-800"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="text-black w-full outline-none my-6 py-1 px-4 bg-gray-100 placeholder:text-gray-800"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <ImageUpload
          disabled={loading}
          onChange={handleImageUpload}
          onRemove={handleImageRemove}
          value={imageURL}
        />
        <div className="mt-6 text-orange-600 w-59 p-1 h-full">
          Please Upload Printed Prescriptions for more accuracy
        </div>
        <div className="mt-6 text-gray-600 w-59 p-1 h-full">
          Please Upload Following Image (.jpeg, .jpg, .png, .webp)
        </div>
        <button
          type={"submit"}
          className="flex rounded-md bg-black text-white w-full my-10 justify-center items-center px-2 py-3 text-2xl"
        >
          {loading ? <p>Uploading</p> : <p>Upload</p>}
        </button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
