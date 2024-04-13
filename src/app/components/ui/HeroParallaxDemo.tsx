"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";






export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Online University Management System",
    link: "https://github.com/themilang",
    thumbnail:'https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecompng.4a8ec864.png&w=2048&q=75'
 },
  {
    title: "FullStack Elearning WebApplication",
    link: "",
    thumbnail:"https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felarning.4c61ad12.png&w=2048&q=75"
 },
  {
    title: "Netflix",
    link: "https://github.com/themilang",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnetflix.73ff5a61.png&w=2048&q=75",
  },

  {
    title: "Authentication",
    link: "",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAuth.8ec3c686.png&w=2048&q=75",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "IOT Raspberry Pi",
    link: "",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIot.563e5b67.png&w=2048&q=75",
  },

  
  {
    title: "Realtime Chat App",
    link: "",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchat.26a20346.png&w=2048&q=75",
  },
  {
    title: "Stripe Payment",
    link: "",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPayment.4639b72d.png&w=2048&q=75",
  },
  {
    title: "Case Study",
    link: "",
    thumbnail:
      "https://hosting-images-dedj.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding.fbd1b5b4.png&w=2048&q=75",
  },
 

 
 
];
