"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button } from '../ui/button';
import { ArrowBigRight, ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection = () => {

    const el = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const typed = new Typed(el.current!, {
          strings: [
            'AU',
            'Silver',
            'Gold'
          ],
          typeSpeed: 200,
          backSpeed: 100,
          loop: true,
        });
    
        return () => typed.destroy();
      }, []);
  return (
    <div className='flex justify-around  lg:flex-row flex-col overflow-x-hidden'>


        <section data-aos="fade-down" className=' py-32 text-center mdlg:w-2/4'>
            <h1 className='font-bold text-6xl lg:text-8xl '>
                <span>Trade On</span>
                <br />
        <span ref={el} />

            </h1>
            <div className='my-4'>
            <h2 className='font-semibold text-2xl'>Purchase gold, silver, and platinum</h2>
            bullion online at highly competitive prices.
            </div>
            <Button >
                <span>Trading</span>
                <ChevronRight />
            </Button>
        </section>

        <section data-aos="fade-left" className='flex items-center justify-center mdlg:w-2/4'>
            <div className='relative lg:w-100  w-75 h-87.5 '>
                <Image 
                src={"/temp-chart.jpg"} 
                className=' h-full w-ful absolute object-contain'  
                alt='aurum place holder'
                // width={}
                fill
                />
            </div>
        </section>

    </div>
  )
}

export default HeroSection