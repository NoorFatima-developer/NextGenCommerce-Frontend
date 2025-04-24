"use client";
import { React, useState } from "react";

export const ProductImageDetails = (props) => {
  //I can directly destructure in it as well by using this {data} instead of passing (props) in line 4...
  // single data leny klye directly dummyProductData sy lelea without destructure...
  // const {products} = dummyProductData;
  // all data leny klye so pass data in parent and accept here as a props...
  const { data } = props;

  //i-- pass image directly as a string-->object
  //ii-- pass image using index-->array
  //iii-- pass img as index but without using index in map-->array

  // i--const [selectedImage, setSelectedImage] = useState("/detail1.png");-->now use just img in map and pass img directly in handleImage..
  // because actual data in string and m access b string m hi kr rhi o so no need of index...
  // ii--  const [selectedImage, setSelectedImage] = useState(0);---> use index with img in map, because actual data in string and m access kr ri o using index
  // so, index use separately and pass in handleImg...
  // iii---directly access img as index so, no need of separet index while using map...👇👇👇👇

  const [selectedImage, setSelectedImage] = useState(data.products[0])
  function handleImage(img) {
    setSelectedImage(img);
  }

  return (
    <>
      <div className="col-span-2">
        <div className="flex flex-col gap-y-5">
          {/* yahan b directly data leskti o props.data.products.map phr oper destructure krny ki zrort ni prygi... */}
          {data.products.map((img) => (                
            <div
              key={img}
              onClick={() => handleImage(img)}
              className={`${
                img == selectedImage && "border-2 border-gray-800"
              } rounded-md w-24 h-24 p-1} `}
            >
              <img
                src={img}
                height={170}
                width={140}
                className="rounded-md w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Div of selected image: */}
      <div className="col-span-5 h-[450px]">
        <img
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
