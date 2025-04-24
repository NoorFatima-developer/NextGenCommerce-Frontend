"use client"

import Link from "next/link";
import { ChevronDown, Heart, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProfileMenu from "@/app/_components/ProfileMenu";
export default function Navbar() {
  
  return (
    <main className="flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 px-4 flex justify-between items-center">
        <div className="flex-1">
          <p className="text-sm text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="font-semibold">ShopNow</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-sm">English</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold">
                Exclusive
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600"
              >
                Contact
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600">
                About
              </Link>
              <Link
                href="/register"
                className="text-gray-900 hover:text-gray-600 underline"
              >
                Sign Up
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-2">
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-40 md:w-60 "
              />
              <Search className="h-6 w-5 text-gray-800 " />
            </div>

            {/* Heart Icon */}
            <Heart className="h-5 w-5 text-gray-700" />
            {/* ShoppingCart */}
            <ShoppingCart className="text-gray-700"/>
             <ProfileMenu/>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
