"use client"; // Mark as a client component

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Exclusive Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Exclusive</h2>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex items-center mt-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-gray-700 rounded-md text-sm h-10 focus-visible:ring-0"
              />
              <Button 
                className="h-10 px-2 -ml-8 bg-transparent hover:bg-transparent p-0 text-white"
              >
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Support</h2>
            <p className="text-sm">
              111 Bijoy Sarani, Dhaka, <br/>
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Account</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">My Account</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Login / Register</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Cart</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Wishlist</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Shop</a>
              </li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Link</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Terms Of Use</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 transition">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
