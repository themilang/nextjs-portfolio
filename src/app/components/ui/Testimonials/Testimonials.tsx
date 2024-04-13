

import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      imagelink:'https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/396057173_10160779863614618_7384445089107078165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=15QHvKUQPO0Ab6y7Bvi&_nc_ht=scontent.fbwa5-1.fna&oh=00_AfBGgRebbd0iq-Lg6o1VIqAUh4IXNhGdUvyhKN8pf5ejFQ&oe=66209178',
      name: "Er. Kapil Budhathoki",
      position: "HOD, Mid-West University",
      text: "Working with Milan was an absolute pleasure. His efficiency and expertise as a Full Stack Developer is truly remarkable. I was amazed by how quickly he was able to deliver high-quality solutions. Moreover, his proactive communication and attention to detail made the entire process seamless. I highly recommend Milan for any software development project."
    },
    {         imagelink:'https://scontent.fbwa9-1.fna.fbcdn.net/v/t1.6435-9/50745154_2085865408146584_5030500855124590592_n.jpg?stp=c70.0.414.414a_dst-jpg_p552x414&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=52Ad3Y9U578Ab56aizY&_nc_ht=scontent.fbwa9-1.fna&oh=00_AfAO5x23PaFWjzkdkICr7L-qgg5ZgqxTZynO4DwATIjPjg&oe=6637B039',

        name: "Er. Dhrendra Kumar Yadhav",
        position: "Ast.prof, Mid-West University",
        text: "Having Milan as a student in our software engineering program has been truly inspiring. His dedication to learning and passion for software development are evident . Milan consistently demonstrates exceptional problem-solving skills and a strong understanding of software engineering principles. His ability to effectively communicate complex technical concepts and collaborate with peers sets him apart. Milan's commitment to excellence makes them a valuable asset to any team."
      },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
  <div className="mt-48 mb-48 my-6 font-[sans-serif] text-[#333]">
            <div className="max-w-4xl mx-auto relative">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-extrabold">Testimonials</h2>
                </div>
                <div className="max-w-xl mt-12 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <img src={testimonials[currentIndex].imagelink} className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white" />
                        <div className="mt-4">
                            <h4 className="text-sm font-extrabold">{testimonials[currentIndex].name}</h4>
                            <p className="text-xs text-gray-400 font-bold mt-1">{testimonials[currentIndex].position}</p>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm leading-relaxed">{testimonials[currentIndex].text}</p>
                    </div>
                    <div className="flex justify-center space-x-1 mt-4">
                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                    </div>
                </div>

                <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-0 top-0 bottom-0 my-auto">
                    <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
                    </svg>
                </div>
                <div className="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-0 top-0 bottom-0 my-auto">
                    <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#fff] inline" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path>
                    </svg>
                </div>
            </div>
        </div>
    </>
  );
};

export default Testimonials;
