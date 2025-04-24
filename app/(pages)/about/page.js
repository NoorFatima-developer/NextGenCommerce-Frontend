"use client"
import { useState } from "react";
import Image from "next/image";
import { Store, DollarSign, ShoppingBag, CircleDollarSign, Link, Linkedin, Truck, Headphones, ShieldCheck } from "lucide-react";
import { Instagram, Twitter } from "@mui/icons-material";
import { TwitterPicker } from "react-color";

export default function OurStoryPage() {
  const [activeStat, setActiveStat] = useState(null);

  const handleStatClick = (stat) => {
    setActiveStat(stat);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Our Story</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active
                presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                Exclusive has 10,500 sellers and 300 brands and serves 3 millioans customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
                assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/Side Image.png"
              alt="Shopping experience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className={`border rounded-lg p-6 flex flex-col items-center justify-center text-center ${activeStat === "sellers" ? "bg-[#DB4444] text-white" : "bg-white"}`}
            onClick={() => handleStatClick("sellers")}
          >
            <div className="bg-gray-200 p-3 rounded-full mb-4">
              <Store className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">10.5k</h3>
            <p className="text-sm text-gray-500">Sellers active on our site</p>
          </div>

          <div
            className={`border rounded-lg p-6 flex flex-col items-center justify-center text-center ${activeStat === "sales" ? "bg-[#DB4444] text-white" : "bg-white"}`}
            onClick={() => handleStatClick("sales")}
          >
            <div className="bg-white/20 p-3 rounded-full mb-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">33k</h3>
            <p className="text-sm">Monthly Product Sale</p>
          </div>

          <div
            className={`border rounded-lg p-6 flex flex-col items-center justify-center text-center ${activeStat === "customers" ? "bg-[#DB4444] text-white" : "bg-white"}`}
            onClick={() => handleStatClick("customers")}
          >
            <div className="bg-gray-200 p-3 rounded-full mb-4">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">45.5k</h3>
            <p className="text-sm text-gray-500">Customer active on our site</p>
          </div>

          <div
            className={`border rounded-lg p-6 flex flex-col items-center justify-center text-center ${activeStat === "grossSale" ? "bg-[#DB4444] text-white" : "bg-white"}`}
            onClick={() => handleStatClick("grossSale")}
          >
            <div className="bg-gray-200 p-3 rounded-full mb-4">
              <CircleDollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold">25k</h3>
            <p className="text-sm text-gray-500">Annual gross sale on our site</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="/team 01.png"
                alt="Tom Cruise"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-semibold">Tom Cruise</h3>
              <p className="text-sm text-gray-500">Founder & Chairman</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="/team 02.png"
                alt="Emma Watson"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-semibold">Emma Watson</h3>
              <p className="text-sm text-gray-500">Managing Director</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <Image
                src="/team 03.png"
                alt="Will Smith"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="text-xl font-semibold">Will Smith</h3>
              <p className="text-sm text-gray-500">Product Designer</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-700">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center py-8">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className={`h-2 w-2 rounded-full ${dot === 3 ? "bg-red-500" : "bg-gray-300"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-black rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-black rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <Headphones className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-black rounded-full p-4 w-16 h-16 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-500">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}
