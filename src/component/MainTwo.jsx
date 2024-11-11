import React from 'react'
import rocketData from '../helper/rocketData'
import wave from "../assets/wave.gif"

const MainTwo = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {rocketData.map((data, index) => {
                  return (
                    <div                                  className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/55 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.img}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainTwo