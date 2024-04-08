"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TracingBeamDemo } from './components/TracingBeamDemo';
import './components/index.css';

const Page = () => {
  const [fadeIn, setFadeIn] = useState(true); // Initially set to true

  useEffect(() => {
    // Disable fade animation after the first render
    setFadeIn(false);
  }, []); // Empty dependency array ensures it runs only once after mount

  return (
    <>
      <div className={`dark:bg-black  w-full h-16 top-0 fixed ${fadeIn ? 'fade-in' : ''} z-10`} style={{ WebkitTransition: 'opacity 1s', transition: 'opacity 1s' }}>
        <Link href='/'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 mt-4 ml-4 h-12  hover:scale-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
      </div>
      <div className={`mt-16 ${fadeIn ? 'fade-in' : ''}`} style={{ WebkitTransition: 'opacity 1s', transition: 'opacity 1s' }}>
        <TracingBeamDemo/>
      </div>
    </>
  );
}

export default Page;
