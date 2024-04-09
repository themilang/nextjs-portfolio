"use client";
import React from "react";
import { SparklesCore } from "../SparklesPreview/sparkles";
import styles from "./SparklesPreview.module.css";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ThreeDCardDemo/3d-card";
import { NavbarDemo } from "../Navbar";
import "./sp.css";
import Brand from "../Brand/BrandSectionSkill";
import Scroll from "../Scroll/Scroll";

export const SparklesPreview = () => {
  return (
    <>
      <div
        
      >
        <div className="  h-[60rem]  relative w-full bg-black flex flex-col  justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <div className="flex flex-col items-center justify-center md:flex-row md:justify-around overflow-visible mt-32 lg:mt-12">
            <div className="md:w-1/2">
              <h1 className="md:text-6xl text-3xl lg:text-7xl font-bold mt-8 md:mt-0 lg:ml-12 text-white text-center md:text-left">
                MILAN GHIMIRE <br />
                <p className="md:text-1xl text-1xl lg:text-[42px] font-thin">
                  I&apos;m   
                  <span className="underlinetext type-position font-thin text-green-400"></span>
                </p>
              </h1>
              <br />
              <br />
              <p className="text-gray-400 lg:ml-12 xs:ml-0 text-lg text-center md:text-left">
                A passionate and dedicated full-stack developer with a strong{" "}
                <br /> foundation in software engineering. I thrive on turning
                ideas <br /> into reality through the power of code and
                innovation.
              </p>
              <br />
              <div className="flex justify-center md:justify-start p-8 md:p-20">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  Contact Me
                </button>
                <button className=" flex items-center gap-2 w-40 h-10 ml-2 rounded-xl bg-white text-black border border-black text-sm">
                 <p className="ml-9">Resume</p><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#669c35"></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#669c35"></path> </g></svg>
                </button>
              </div>
            </div>

            <div className="md:w-1/2">
              <CardContainer className="inter-var">
                <CardBody className="  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                  {/* Hide the image on mobile devices */}
                  <div className="hidden sm:block">
                    <div className="flex-row">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="https://scontent.fbwa9-1.fna.fbcdn.net/v/t39.30808-6/316427424_1818266161855008_4993216797239221165_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WvyFcSTfNJgAb4s0NJ_&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfBwsIrwtt2qn1rGofcYDIlYJZ6QBInyI5vwOX0ER3W08w&oe=661AE0FE"
                          height="1000"
                          width="1000"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <Brand/>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className="mt-3 items-center sm:m-auto -ml-12 ">
          {/* <Scroll/> */}
            </div>

        </div>
      </div>
    </>
  );
};
