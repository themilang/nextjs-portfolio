"use client"
import React, { useState, useEffect } from 'react';
import { TracingBeam } from './tracing-beam'; // Adjust the import path if necessary
import Image from 'next/image';
import ecomweb from '../../../../public/ecompng.png'
import elearning from '../../../../public/elarning.png'
import AuthBackend from '../../../../public/Auth.png'
import Payment from '../../../../public/Payment.png'
import Chat from '../../../../public/chat.png'
import IOT from '../../../../public/Iot.png'
import Landing from '../../../../public/landing.png'
import './tracing.css'
import Link from 'next/link';
import '../components/index.css';
import { title } from 'process';

export function TracingBeamDemo() {
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
    <TracingBeam className={`px-6 ${animate ? 'flying-in' : ''}`}>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">
              {item.title}
              <br />
              {item.title2}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert relative">
  <div className="relative mb-10 group">
    <Image
      src={item.image}
      alt="blog thumbnail"
      height="1000"
      width="1000"
      className="rounded-lg object-cover cursor-pointer transition duration-300 group-hover:blur-sm"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className=" flex  gap-2 items-center bg-gray-700 text-white px-6 py-3 rounded-lg mr-4">View Live Demo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</button>
      <button  className="bg-gray-700 flex gap-2 text-white items-center px-6 py-3 rounded-lg"><a href="https://www.buymeacoffee.com/milanghimire">Buy Me a Coffee</a> <svg className="w-6 h-6 " height="71px" width="71px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill:"#FFFFFF;"}} d="M383.999,395.635c0,0-44.73,0-46.441,0c-0.035,0-0.07,0-0.105,0c-6.435,0-11.636,5.213-11.636,11.636 v23.273c0,19.247-15.663,34.909-34.909,34.909c-6.435,0-11.636,5.213-11.636,11.636v11.636H116.363v-11.636 c0-6.423-5.201-11.636-11.636-11.636c-19.247,0-34.909-15.663-34.909-34.909V162.907h256v197.818 c0,6.423,5.201,11.636,11.636,11.636h34.909c28.719,0,46.545-26.752,46.545-69.818s-17.827-69.818-46.545-69.818H349.09v-23.273 h34.909c36.422,0,58.182,47.325,58.182,93.091S420.421,395.635,383.999,395.635z"></path> <g> <path style={{fill:"#BCBEC0;"}} d="M203.624,116.362c-2.618,0-5.236-0.873-7.412-2.676c-10.228-8.471-15.849-19.921-15.849-32.233 s5.62-23.761,15.849-32.233c4.783-3.968,7.424-9.053,7.424-14.313s-2.641-10.345-7.424-14.313 c-4.957-4.108-5.632-11.439-1.548-16.384c4.119-4.934,11.427-5.632,16.384-1.536c10.24,8.46,15.86,19.91,15.86,32.233 s-5.62,23.761-15.849,32.233c-4.783,3.968-7.424,9.053-7.424,14.313c0,5.26,2.641,10.345,7.424,14.313 c4.957,4.108,5.632,11.439,1.548,16.384C210.292,114.919,206.975,116.362,203.624,116.362z"></path> <path style={{fill:"#BCBEC0;"}} d="M267.624,116.362c-2.618,0-5.236-0.873-7.412-2.676c-10.228-8.471-15.849-19.921-15.849-32.233 s5.62-23.761,15.849-32.233c4.783-3.968,7.424-9.053,7.424-14.313s-2.641-10.345-7.424-14.313 c-4.957-4.108-5.632-11.439-1.548-16.384c4.119-4.934,11.439-5.632,16.384-1.536c10.24,8.46,15.86,19.91,15.86,32.233 s-5.62,23.761-15.849,32.233c-4.783,3.968-7.424,9.053-7.424,14.313c0,5.26,2.641,10.345,7.424,14.313 c4.957,4.108,5.632,11.439,1.548,16.384C274.292,114.919,270.975,116.362,267.624,116.362z"></path> <path style={{fill:"#BCBEC0;"}} d="M139.624,116.362c-2.618,0-5.236-0.873-7.412-2.676c-10.228-8.471-15.849-19.921-15.849-32.233 s5.62-23.761,15.849-32.233c4.783-3.968,7.424-9.053,7.424-14.313s-2.641-10.345-7.424-14.313 c-4.945-4.108-5.632-11.439-1.548-16.384c4.119-4.934,11.45-5.644,16.396-1.536c10.228,8.46,15.849,19.91,15.849,32.233 s-5.62,23.761-15.849,32.233c-4.783,3.968-7.424,9.053-7.424,14.313c0,5.26,2.641,10.345,7.424,14.313 c4.957,4.108,5.632,11.439,1.548,16.384C146.292,114.919,142.975,116.362,139.624,116.362z"></path> </g> <path style={{fill:"#00384E;" }}d="M383.999,186.18H349.09v-34.909c0-6.423-5.201-11.636-11.636-11.636H58.181 c-6.435,0-11.636,5.213-11.636,11.636v279.273c0,28.102,20.026,51.607,46.545,57.007v12.812c0,6.423,5.201,11.636,11.636,11.636 h186.182c6.435,0,11.636-5.213,11.636-11.636V487.55c26.519-5.399,46.545-28.916,46.545-57.007v-11.846 c8.32,0.209,19.596,0.209,34.909,0.209c52.911,0,81.455-59.951,81.455-116.364S436.91,186.18,383.999,186.18z M372.363,255.998 c22.144,0,23.273,38.772,23.273,46.545c0,7.773-1.129,46.545-23.273,46.545H349.09v-93.091H372.363z M383.999,395.635 c0,0-44.73,0-46.441,0c-0.035,0-0.07,0-0.105,0c-6.435,0-11.636,5.213-11.636,11.636v23.273c0,19.247-15.663,34.909-34.909,34.909 c-6.435,0-11.636,5.213-11.636,11.636v11.636H116.363v-11.636c0-6.423-5.201-11.636-11.636-11.636 c-19.247,0-34.909-15.663-34.909-34.909V162.907h256v197.818c0,6.423,5.201,11.636,11.636,11.636h34.909 c28.719,0,46.545-26.752,46.545-69.818s-17.827-69.818-46.545-69.818H349.09v-23.273h34.909c36.422,0,58.182,47.325,58.182,93.091 S420.421,395.635,383.999,395.635z"></path> <path style={{fill:"#FAA85F;"}} d="M81.454,174.544v244.364c0,19.281,15.628,34.909,34.909,34.909h11.636v23.273h139.636v-23.273h11.636 c19.281,0,34.909-15.628,34.909-34.909V174.544H81.454z"></path> </g></svg></button>
    </div>
  </div>
  {item.description}
  <div>
    
      
      <Link href={item.seemorelink ? `/${item.seemorelink}` : '#'}>
       
         <br />
          <p className='mt-1 text-blue-300'>
          Read More  
            </p>
      
        </Link>

      </div>
       
      </div>       
       
  </div>


       
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "FullStack Ecommerece WebApplication",
    seemorelink:"fullstack-ecommerece-webapplication",
    description: (
      <>
        <p>
       FullStack Ecommerece Webapplication is a modern e-commerce platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers a seamless shopping experience, featuring user authentication, a dynamic product catalog, intuitive shopping cart functionality, and secure payment integration. With responsive design and robust admin capabilities, It delivers a user-friendly and efficient online shopping solution. 


.
        </p>
        
      </>
    ),
    badge: "16-December,2023",
    image:
      {ecomweb}.ecomweb,
  },
  {
    title: "MERN E-Learning Web-Appliation",
    seemorelink:"mern-elearning-webapplication",

    description: (
      <>
        <p>
        MERN E-Learning Web-Application is a advance online learning platform developed using the MERN stack. It provides a rich learning experience, offering a wide range of courses on various subjects. 
        With its intuitive user interface and interactive learning materials, students can easily navigate through the courses and engage with the content. 
        The platform also includes features such as progress tracking and assignments to enhance the learning experience. Role base Login  , Admin Pannel , Dashboard and many more 
        </p>
       
      </>
    ),
    badge: "28-March,2024",
    image:
{elearning}.elearning  },
  {
    title: "Node.js User Authentication ",
    seemorelink:"user-authentication",
 
    description: (
      <>
        <p>
          Nodejs User Athentication in MongoDb database where
        user registration form employs the management of the registered user. User role authentication , Role authentication ensures that non-admin users cannot make changes or access exclusive information, administrative privileges to admin users and basic privileges to basic users.

Authentication functionality with  JSON Web Token (JWT) </p>
      </>
    ),
    badge: "16-january,2024",
    image:
    {AuthBackend}.AuthBackend  },


  {
    title: "IOT Hardware and Web Interaction ",
    seemorelink:'iot-hardware-and-web-interaction',
    description: (
      <>
        <p>
        The IoT Web Application revolutionizes device control by bridging the digital and physical realms. Powered by Raspberry Pi and ESP32, users can effortlessly manage cameras, projectors, lights, and fans remotely. As a developer, I've ensured intuitive interaction and robust security with features like role-based authentication and JWT.        </p>
      </>
    ),
    badge: "23-October, 2023",
    image:{IOT}.IOT

},
  {
    title: "Web Socket Real Time Chat Application",
    seemorelink:'web-socket-real-time-chat-application',
    description: (
      <>
        <p>
        Real-time, bi-directional communication channels over a single TCP connection.  low-latency, high-frequency communication real-time chat application using WebSockets and the Socket.IO library.
        Node.js as the server-side language and React as the client-side technology. 
</p>
      </>
    ),
    badge: "7-April,2024",
    image:
    {Chat}.Chat  },
  {
    title: "Stripe Integration with Node.js",
    seemorelink:"stripe-intigration-with-nodejs",
    description: (
      <>
        <p>
       
       Integrating Stripe with Node.js, using Express.js for server-side development, JavaScript for client-side, and tailwind css for UI. npm manages dependencies, while the Stripe CLI aids in testing and managing Stripe resources. Webhooks are emphasized for handling payment-related events like successful transactions or failed charges, ensuring seamless payment processing.   </p>
      </>
    ),
    badge: "14-February, 2024",
    image:
    {Payment}.Payment  },
  {
    title: " CASE STUDY  ",
    title2:"Implementation Of Real Business Landing Page - Motipur Interlock Block Factory",
    seemorelink:"case-study-motipur-interlock-block-factory",
    description: (
      <>
        <p>
        In this case study, I'll explore the process of implementing a real business landing page for the Motipur Interlock Block Factory. The project involved leveraging various technologies and design principles to create an engaging and informative online platform. Through careful planning and execution, I aimed to showcase the factory's products and services effectively. By utilizing captivating visuals, concise content, and user-friendly navigation, I strived to enhance the user experience and drive meaningful engagement.
        Technology : MERN , Tailwind css , Nodemailer etc
        </p>
      </>
    ),
    badge: "12-January, 2024",
    image:{Landing}.Landing

},
];
