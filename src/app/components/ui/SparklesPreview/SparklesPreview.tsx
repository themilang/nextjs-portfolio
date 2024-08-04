// components/SparklesPreview.js

import React, { useEffect } from "react";
import { SparklesCore } from "../SparklesPreview/sparkles";
import styles from "./SparklesPreview.module.css";
import { CardBody, CardContainer, CardItem } from "../ThreeDCardDemo/3d-card";
import Brand from "../Brand/BrandSectionSkill";
import Link from "next/link";

export const SparklesPreview = () => {
  const handleResumeDownload = () => {
    console.log("Attempt to download")
    if (typeof window !== "undefined") {
      const pdfUrl = "./resume.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div>
        <div className="h-[50rem] relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
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
                  I&apos;m <span className="underlinetext type-position font-thin text-green-400"></span>
                </p>
              </h1>
              <br />
              <br />
              <p className="text-gray-400 lg:ml-12 xs:ml-0 text-lg text-center md:text-left">
                Open to be Hired !
              </p>
              {/* <p className="text-gray-400 lg:ml-12 xs:ml-0 text-lg text-center md:text-left">
                A passionate and dedicated full-stack developer with a strong <br /> foundation in software engineering. I thrive on turning ideas <br /> into reality through the power of code and innovation.
              </p> */}
              <br />
              <div className="flex justify-center md:justify-start p-8 md:p-20">
              <Link   style={{ zIndex: 1 }} href='#contact'>
              <button  className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" style={{ zIndex: 1 }}>
  Contact Me
</button>
              </Link>
<button onClick={handleResumeDownload} className="flex items-center gap-2 w-40 h-10 ml-2 rounded-xl bg-white text-black border border-black text-sm" style={{ zIndex: 1 }}>
  <p className="ml-9">Resume</p>
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#669c35"></path>
      <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#669c35"></path>
    </g>
  </svg>
</button>
              </div>
            </div>

            <div className="md:w-1/2">
              <CardContainer className="inter-var">
                <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                  {/* Hide the image on mobile devices */}
                  <div className="hidden sm:block">
                    <div className="flex-row">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <img
                          src="https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/322801379_689640069288618_3388144156042723304_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fEpi126ljeUQ7kNvgEAwqIV&_nc_ht=scontent.fbwa5-1.fna&oh=00_AYDiJAH7tUM-aJPxMl0JC5o_fC867LpAqPOQiAj1fMbNpQ&oe=66B5940F"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="image"
                        />
                      </CardItem>
                      <Brand />
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};
