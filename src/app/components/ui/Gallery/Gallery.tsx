import React from 'react'
import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo'
import Link from 'next/link'

const Gallery = () => {
  return (
    <>
     <div className=" max-w-xl -mb-48 lg:max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-xl lg:text-3xl md:text-xl font-bold dark:text-white">
      Gallery <br /> 
      </h1>
      <p className="max-w-sm  md:text-xs text-xs mt-8 dark:text-neutral-200">
      Explore a collection of my work through these images. Each piece reflects my dedication to creativity and craftsmanship.      </p>
    </div>
    <div className='sm:mt-12 mt-32'>
    <InfiniteMovingCardsDemo/>

    </div>
    <div className=" mb-64 mt-12 hover:text-gray-600 cursor-pointer">
          <p className=" items-center flex   justify-center gap-2 text-xl ">
            <Link href='/allphotos'>
            
            View More Images
            </Link>
           
          </p>
        </div>

    </>
  )
}

export default Gallery