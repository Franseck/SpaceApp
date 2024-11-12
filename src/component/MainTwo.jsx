import React from 'react'
import rocketData from '../helper/rocketData'
import wave from "../assets/wave.gif"
import shipone from "../assets/ship1.png"
import shiptwo from "../assets/ship2.png"
import shipthree from "../assets/ship3.png"

const MainTwo = () => {
  return (
    <>
      <section className="dark:bg-black light:bg-white">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {rocketData.map(({id,title, content, description, image }) => {
                  return (
                    <div   data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"   
                                 className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/55 backdrop-blur-sm   text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                    <img src={image} alt="" />
                      <h1>{title}</h1>
                      <p>{content}</p>
                      <p className="text-sm">{description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  mt-10 object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainTwo