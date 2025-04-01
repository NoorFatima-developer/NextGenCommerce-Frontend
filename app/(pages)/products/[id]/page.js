import React from "react";
import ProductImageDetails from "./components/productImageDetails";

const dummyProductData = {
  products: [
    "/detail1.png",
    "/detail2.png",
    "/detail3.png",
    "/detail4.png",
    "/detail5.png",
  ],
  title: "Havic HV G-92 Gamepad",
  price: "500",
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  rating: "4.7",
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  console.log(id, "param id");

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl">Product Details {id}</h1>
      <div className="grid grid-cols-12 mt-10 gap-12">
        <ProductImageDetails dummyProductData={dummyProductData} />
        <div className="col-span-4">
          <h1 className="text-2xl bold">{dummyProductData.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
