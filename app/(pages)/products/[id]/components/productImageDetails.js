"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImageDetails = ({ dummyProductData }) => {
  const [selectedImage, setSelectedImage] = useState(
    dummyProductData.products[1]
  );

  const handleImageChange = (img) => setSelectedImage(img);

  return (
    <>
      <div className="col-span-2">
        <div className="flex flex-col gap-y-5">
          {dummyProductData.products.map((img) => (
            <div
              key={img}
              onClick={() => handleImageChange(img)}
              className={`${
                img === selectedImage && "border-2"
              } border-gray-800 rounded-md`}
            >
              <Image
                src={img}
                alt="img"
                height={170}
                width={140}
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-6">
        <Image
          src={selectedImage}
          alt="product image"
          height={600}
          width={500}
          className="h-full w-full"
        />
      </div>
    </>
  );
};

export default ProductImageDetails;
