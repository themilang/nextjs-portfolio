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

export const SparklesPreview = ({ isNavbarHovered }) => {
  return (
    <>
      <div
        className={
          isNavbarHovered
            ? styles.sparklesContainerBlur
            : styles.sparklesContainer
        }
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
                  I'm{" "}
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
                  Join now
                </button>
                <button className="w-40 h-10 ml-2 rounded-xl bg-white text-black border border-black text-sm">
                  Signup
                </button>
              </div>
            </div>

            <div className="md:w-1/2">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                  {/* Hide the image on mobile devices */}
                  <div className="hidden sm:block">
                    <div className="flex-row">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="https://www.milanghimire.info.np/assets/profile-pic.png"
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
          <Scroll/>
            </div>

        </div>
      </div>
    </>
  );
};
