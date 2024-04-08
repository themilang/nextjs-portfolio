"use client";


import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageBackground: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Testimonial quote 1",
    name: "F1 Soft Group",
    title: "24 April, 2024",
    imageBackground: "/aboutme.jpg", // Example of local image, replace with actual paths
  },
  {
    quote: "Testimonial quote 2",
    name: "Info Developers",
    title: "25 March, 2024",
    imageBackground: "https://example.com/image2.jpg", // Example of external image URL
  },
  {
    quote: "Testimonial quote 3",
    name: "AWS Quitz Winner Awards Receving",
    title: "04 February , 2024",
    imageBackground:'https://media.licdn.com/dms/image/D4D22AQHGtXbQIRLEOA/feedshare-shrink_800/0/1708523388146?e=1715212800&v=beta&t=W4J-VOLsK6NnxqF1XNSiguuyjFpfujfybiAHfl5maVw'
  },

  {
    quote: "Testimonial quote 4",
   
    name: "Special Presentation at Esewa",
    title: "25 April , 2024",
    imageBackground:'https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/433061944_276831678797664_6052399730149379843_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QpLUWXcqySYAb55v2lQ&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfCSij_eki432-GyRSgilKCmF0vm-e8rDOGPqRA_SeMJLA&oe=6616CB3B'
  },
];
