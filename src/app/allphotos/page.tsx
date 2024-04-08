"use client"
import React from 'react'
import { ParallaxScrollDemo } from './components/ParallaxScrollDemo'
import { useState,useEffect } from 'react';
import Link from 'next/link';
const Page = () => {

  const [fadeIn, setFadeIn] = useState(true); // Initially set to true

  useEffect(() => {
    // Disable fade animation after the first render
    setFadeIn(false);
  }, []); // Empty dependency array ensures it runs only once after mount

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
  <>
  <div  className={`px-6 ${animate ? 'flying-in' : ''}`}>

  <div className="top-0  fixed dark:bg-black bg-[#d9dedf] w-full    z-10 sm:ml-28 text-center sm:text-start -mb-12  ">
      <h1 className="dark:bg-black text-2xl mb-4 mt-10 md:text-4xl font-bold dark:text-white">
      <Link href='/'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 mt-4 ml-4 h-12  hover:scale-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link> 
      </h1>
      
    </div>
    <ParallaxScrollDemo/>

  </div>
   
  </>
  )
}

export default Page