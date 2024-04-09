"use client"
import React, { useState } from "react";
import {NextUIProvider} from "@nextui-org/react";
import { HeroParallaxDemo } from "./components/ui/HeroParallaxDemo";
import { SparklesPreview } from "./components/ui/SparklesPreview/SparklesPreview";
import AboutSection from "./components/ui/Aboutme/AboutSection";
import Testimonials from "./components/ui/Testimonials/Testimonials";
import Gallery from "./components/ui/Gallery/Gallery";
import { Newsletter } from "./components/ui/SuscribeLetter/SuscribeLetter";
import SocialLinks from "./components/ui/SocialLinks/SocialLinks";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import Social from "./components/ui/Social/Social";
import Navui from "./components/ui/navui/Navui";

export default function Home() {
  const [navbarHovered, setNavbarHovered] = useState(false);

  const handleNavbarHover = () => {
    setNavbarHovered(true);
  };

  const handleNavbarLeave = () => {
    setNavbarHovered(false);
  };

  return (
    <NextUIProvider>
      <div
        
        style={{ cursor: "pointer"  }}
        className=""
      >
        <Navui/>
      </div>
      <SparklesPreview />

      <div className="mb-12 -mt-12 ">
        <AboutSection />
      </div>

      <div id="projects" className="sm:mt-12 mt-72">
        <HeroParallaxDemo />
        <Link href={"/projects"}>
          <div className="hover:text-gray-600 cursor-pointer">
            <p className="items-center flex justify-center gap-2 text-xl ">
              All Projects and Case Studies{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </p>
          </div>
        </Link>
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="contact" className="max-w-2xl -mt-32 -mb-48 lg:max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl lg:text-3xl md:text-xl font-bold dark:text-white">
          Contact Me <br />
        </h1>
        <p className="max-w-sm mb-4 md:text-sm text-sm text-gray-500 mt-8 dark:text-gray-500">
          Feel free to reach out to me! ask a question, or just say hello, I&apos;m always eager to connect.
        </p>
      </div>

      <div className="mt-12 flex gap-2 justify-around">
        <div>
          <div className="flex items-center gap-0 ">
            <div className="ml-12 w-full h-8"> {/* Make this div visible only on laptops */}
              <Social/>
            </div>
          </div>
        </div>
        <div className="mr-12 mb-64"></div>
      </div>

      <div id="subscribe" className="sm:mt-96 mt-[50rem] rounded-lg">
        <Newsletter />
      </div>
      <div id="social" className="mt-[20rem] items-center">
        <SocialLinks />
      </div>
      <ToastContainer />
    </NextUIProvider>
  );
}
