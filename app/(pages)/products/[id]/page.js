import React from "react";
import ProductImageDetails from "./components/productImageDetails";
import renderStars from "@/app/_utils/renderStars";
import ColorSelector from "./components/color-selector";
import dummyProductData from "@/app/data/dummydata";
import SizeSelector from "./components/size-selector";
import { Heart, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


// // export async function generateStaticParams() {
// //   return products.map((product) => ({
// //     id: product.id,
// //   }))
// // }

const ProductDetails = async ({params}, rating) => {
  const {id} = await params;
  console.log(id, "param id");

return(
        // container div...
        <div className="container mx-auto p-0">
          <h1 className="text-4xl mt-6">Product Details {id}</h1>
          {/* Main div.. */}
          {/* Image details.. */}
          <div className="grid grid-cols-12 gap-12 m-20 ">
          {/* data is name of prop---prop is like bag */}
          <ProductImageDetails data = {dummyProductData}/>    
          {/* ProductDetails */}
          <div className="col-span-4">
           <h1 className="text-2xl bold">{dummyProductData.title}</h1>
           <div className="relative">
           <div className="w-full h-[21px] flex gap-4 mt-0">
          <span className="flex items-center text-yellow-500">{renderStars(rating)}</span>
          <span className="text-gray-600 ">{dummyProductData.reviews}</span>
          <span className="text-gray-400 ">|</span>
          <span className="text-green-600 ">{dummyProductData.available}</span>
          </div>
          <div className="text-2xl bold mt-1">
            {dummyProductData.price}
          </div>
          <div className="flex flex-col gap-0 text-sm mt-0">
          <p>High quality vinyl with air channel adhesive.Easy bubble-free install & mess-free removal.
          Pressure sensitive design.
          </p>
        </div>
        {/* <div className="w-[300px] h-[1px] bg-gray-300 my-4" /> */}

        <ColorSelector data = {dummyProductData}/>
        <SizeSelector data = {dummyProductData}/>

        
             {/* Quantity */}
             <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none border-2 text-black hover:bg-[#DB4444] hover:text-white">
                <Minus className="h-4 w-4" />
              </Button>
              <div className="w-12 text-center font-semibold">2</div>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none border-2 text-white bg-[#DB4444]">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className=" rounded-[3px] w-30 bg-[#DB4444] text-white">Buy Now</Button>
            <Button variant="outline" size="icon" className="rounded-md">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

        {/* <Separator /> */}

           {/* Shipping Information */}
           <Card className="mt-4 rounded-none">
             <CardContent className="space-y-4 p-0 ml-2">
               <div className="flex items-center gap-4">
                 <Truck className="h-6 w-6" />
                 <div>
                   <h3 className="font-medium">Free Delivery</h3>
                   <p className="text-sm text-black cursor-pointer underline">
                     Enter your postal code for Delivery Availability
                   </p>
                 </div>
               </div>
              <div/>

              <div className="w-[315px] h-[1px] bg-gray-300 my-4" />

               {/* <Separator /> */}

               <div className="flex items-center gap-4">
                 <ShoppingBag className="h-6 w-6" />
                 <div>
                   <h3 className="font-medium">Return Delivery</h3>
                   <p className="text-sm">
                     Free 30 Days Delivery Returns. <span className="text-black cursor-pointer underline">Details</span>
                   </p>
                 </div>
               </div>
             </CardContent>
           </Card>

        </div>

          </div>
          </div>
      </div>
)
}

export default ProductDetails;
