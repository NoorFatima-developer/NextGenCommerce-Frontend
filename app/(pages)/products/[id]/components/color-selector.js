"use client";
import { useState } from 'react'

export default function colorSelector({data}) {

  // const [selectedColorIndex, setSelectedColorIndex] = useState("white");
  const [selectedColorIndex, setSelectedColorIndex] = useState(data.colors[0].id);

  const handleColor = (color)=> {
    setSelectedColorIndex(color.id);
  }

  return (
    <div className='flex gap-8 mt-1'>
      <div className='text-lg '>Colors:</div>
      <div className='flex gap-2 mt-1.5'>
        {data.colors.map((color)=>(
          <div
          key={color.id}
          onClick={()=>handleColor(color)}
          aria-label={`Select ${color.label} color`}
          className={`${color.className} ${
            color.id === selectedColorIndex && "ring-2 ring-black"
            } w-3 h-3 rounded-full`}
          />
        ))}
      </div>
    </div>
  )
}