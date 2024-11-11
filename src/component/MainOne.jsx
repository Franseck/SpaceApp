import React from 'react'
import mount from "../assets/moon-surface.png"

const MainOne = () => {
  return (
    <div className="h-full mt-8">
    <div className="h-full flex justify-center items-center p-4">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className=" space-y-4 lg:pr-36">
          <h1 className="text-5xl font-bold font-second">
            ORBIT THE EARTH
          </h1>
          <p className='font-less'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
            dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
            tempora similique dignissimos repellat aperiam veniam culpa
            consequatur repudiandae asperiores saepe.
          </p>
          <button
                   className="bg-sec hover:bg-primary px-4 py-1 rounded-md duration-200 font-hiye tracking-wider glass"
          >
            LEARN MORE
          </button>
        </div>
        <div></div>
        </div>
    </div>
    <img
      src={mount}
      alt=""
      className="absolute right-0 bottom-0 w-full brightness-50 z-10"
    />

<div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
  </div>
  )
}

export default MainOne