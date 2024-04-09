"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import ecommerece from '../../../../public/ecompng.png'
import elearning from '../../../../public/elarning.png'

import iot from '../../../../public/Iot.png'
import landing from '../../../../public/landing.png'
import chatapp from '../../../../public/chat.png'
import  userauth from '../../../../public/Auth.png'
import payment from '../../../../public/Payment.png'





export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Online University Management System",
    link: "https://github.com/themilang",
    thumbnail:
""  },
  {
    title: "FullStack Elearning WebApplication",
    link: "https://github.com/themilang",
    thumbnail:
""  },
  {
    title: "Ecommerece",
    link: "https://github.com/themilang",
    thumbnail:
      "/../../../public/ecompng.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
 

 
 
];
