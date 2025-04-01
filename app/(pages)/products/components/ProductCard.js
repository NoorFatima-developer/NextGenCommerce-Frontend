"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  discount,
  rating, 
  reviewCount 
}) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={14} className="text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={14} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <Card className="group relative">
      {discount > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-sm z-10">
          -{discount}%
        </div>
      )}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
          <Heart size={16} />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
          <Eye size={16} />
        </Button>
      </div>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-primary font-semibold">${price}</span>
          {originalPrice > price && (
            <span className="text-gray-400 line-through text-sm ml-2">${originalPrice}</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-xs text-gray-500 ml-2">({reviewCount})</span>
        </div>
      </CardContent>
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-center font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-full group-hover:translate-y-0">
        Add To Cart
      </div>
    </Card>
  );
};

export default ProductCard;
