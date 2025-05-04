import React from 'react'
import { AlignRight } from 'lucide-react';


export default function Header() {
  return (
    <section className='bg-black py-4'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="text-[#808080] text-xl font-semibold">
                    MANAZIR
                </div>
                <div className="">
                    <button className='hidden bg-white py-2 px-4 font-bold rounded-[10px] md:block'>Get for free</button>
                    <AlignRight color='white' className='block md:hidden'/>
                </div>
            </div>
        </div>
    </section>
  )
}

