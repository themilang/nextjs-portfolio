"use client"
import React, { useState } from "react";
import { HeroParallaxDemo } from "./components/ui/HeroParallaxDemo";
import { SparklesPreview } from "./components/ui/SparklesPreview/SparklesPreview";
import { NavbarDemo } from "./components/ui/Navbar";
import AboutSection from "./components/ui/Aboutme/AboutSection";
import { SignupFormDemo } from "./components/ui/ContactMe/ SignupFormDemo";
import Social from "./components/ui/Social/Social";
import { Footer } from "./components/ui/Footer/Footer";
import ProductCard  from "./components/ui/productCard/productCard";
import ScrollToSection from "./components/ui/Scroll/Scroll";
import Scroll from "./components/ui/Scroll/Scroll";
export default function Home() {
  const [navbarHovered, setNavbarHovered] = useState(false);

  const handleNavbarHover = () => {
    setNavbarHovered(true);
  };

  const handleNavbarLeave = () => {
    setNavbarHovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleNavbarHover}
        onMouseLeave={handleNavbarLeave}
        style={{ cursor: "pointer" }} // Add this if you want to indicate a clickable area
      >
        <NavbarDemo/>
      </div>
      <SparklesPreview isNavbarHovered={navbarHovered} />
    
     <div>
      </div> 
      <div className="mb-12 -mt-12">
      <AboutSection  />
      </div>
    
      <HeroParallaxDemo />
       <ProductCard/>
      <h1 className=" mt-32 ml-12 text-2xl md:text-4xl font-bold dark:text-white">
      Contact Me<br /> 
      </h1>
      <div className=" mt-12 flex gap-2 justify-around">
      <div>
   
   <div className="flex gap-0 ">
     
     <div className=" ml-12 w-full h-12">
       <Social/>
     </div>
   
   </div>
   
</div>
   <div className="mr-12">
    <SignupFormDemo/>
   </div>
   
      </div>

      <div>
        <Footer/>
      </div>
      
    </>
  );
}
