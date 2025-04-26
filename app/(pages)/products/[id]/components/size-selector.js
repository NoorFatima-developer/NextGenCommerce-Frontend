"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export default function sizeSelector({data}) {

  const [selectedSize, setSelectedSize] = useState(data.sizes[2]);
  // const [selectedSize, setSelectedSize] = useState("M");

  function handleSize(size){
    setSelectedSize(size);
  }

  return (
    <div className='flex gap-4'>
      <div className='text-lg mt-2'>
        Size:
      </div>
      <div className='flex gap-2 pt-2'>
        {data.sizes.map((size)=>(
          <Button
          key={size}
          onClick={()=>handleSize(size)}
          className = {`
            ${size === selectedSize ? "bg-[#DB4444] text-white hover:bg-white hover:text-black" : "bg-white text-black  hover:bg-[#DB4444] hover:text-white" }
            border-2 h-5 w-2 p-4 m-0 rounded-sm`}
          >
          {size}
          </Button>
        
        ))}
      </div>
      
    </div>
  )
}

