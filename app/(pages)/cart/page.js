"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useCart } from "@/app/_contexts/CartContext";

export default function CartPage() {
  const { cart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full flex justify-center py-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="grid gap-2">
          {/* Cart Section */}
          <div className="col-span-full space-y-6">
            {/* Cart Items */}
            <div className="rounded-lg">
              {/* Header Row */}
              <div className="min-w-[800px] grid grid-cols-12 p-4 text-sm font-medium ">
                <div className="col-span-3">Product</div>
                <div className="col-span-3 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Subtotal</div>
              </div>

              {/* Cart Items */}
                {/* LCD Monitor */}
                {cart.map((item)=>(
                   <div key={item.id} className="min-w-[800px] grid grid-cols-12 p-4 items-center bg-purple-50/30">
                   <div className="col-span-3 flex items-center gap-3">
                     <div className="w-16 h-16 relative">
                       <Image
                         src={item.image}
                         alt={item.name}
                         width={64}
                         height={64}
                         className="object-cover"
                       />
                     </div>
                     <span className="font-medium">{item.name}</span>
                   </div>
                   <div className="col-span-3 text-center">{item.price}</div>
                   <div className="col-span-3 flex justify-center">
                     <Select 
                     defaultValue={item.quantity.toString()}
                     onValueChange={(val)=>updateQuantity(item.id, parseInt(val))}
                     >
                       <SelectTrigger className="w-16">
                         <SelectValue placeholder="Qty" />
                       </SelectTrigger>
                       <SelectContent>
                         {[1, 2, 3, 4, 5].map((qty)=>(
                          <SelectItem key={qty} value={qty.toString()}>
                            {qty}
                          </SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                   </div>
                   <div className="col-span-3 text-right font-medium">${item.price * item.quantity}</div>
                 </div> 
                ))}
               
                {/* HI Gamepad */}
                <div className="min-w-[800px] grid grid-cols-12 p-4 items-center">
                  <div className="col-span-3 flex items-center gap-3">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="HI Gamepad"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">HI Gamepad</span>
                  </div>
                  <div className="col-span-3 text-center">$550</div>
                  <div className="col-span-3 flex justify-center">
                    <Select defaultValue="02">
                      <SelectTrigger className="w-16">
                        <SelectValue placeholder="Qty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-3 text-right font-medium">$1100</div>
                </div>

                {/* Cart Actions */}
                <div className="flex justify-between">
                  <Button variant="outline" asChild className="hover:bg-[#c13c3c] hover:text-white rounded-none">
                    <Link href="/">Return To Shop</Link>
                  </Button>
                  <Button variant="outline" asChild className="hover:bg-[#c13c3c] hover:text-white rounded-none">
                    <Link href="/">Update Cart</Link>
                  </Button>                
                  </div>
              </div>
            </div>

            {/* Coupon and Cart Total - side by side */}
            <div className="flex flex-col lg:flex-row justify-between gap-2 mt-2">
              {/* Coupon Code */}
              <div className="w-full lg:max-w-md flex gap-4">
                <Input placeholder="Coupon Code" className="flex-1" />
                <Button
                  className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-8 
            rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px]"
                >
                  Apply Coupon
                </Button>
              </div>

              {/* Cart Total */}
              <div className="w-full lg:max-w-sm">
                <Card>
                  <CardContent className="pt-0">
                    <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between py-0 border-b">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">${total}</span>
                      </div>
                      <div className="flex justify-between py-0 border-b">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="text-gray-600">Free</span>
                      </div>
                      <div className="flex justify-between py-0">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold">${total}</span>
                      </div>
                      <Button
                        className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-8 
            rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px]"
                      >
                        Proceed to checkout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
