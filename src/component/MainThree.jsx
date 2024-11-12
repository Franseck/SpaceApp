import React from 'react'
import satellite from "../assets/satelite1.jpg"
import satellite2 from "../assets/satelite2.jpg"


const MainThree = () => {
  return (
    <>
    <section className=" pb-12">
    <div className="container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div data-aos="zoom-in-right">
          <img
            src={satellite}
            alt=""
            className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
          />
        </div>
        <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
          <p data-aos="fade-up"
                data-aos-delay="300"
            className="text-sky-800 uppercase"
          >
            our vision
          </p>
          <h1  data-aos="fade-up"
                data-aos-delay="500"
                      className="uppercase text-5xl"
          >
            so-2105
          </h1>
          <p data-aos="fade-up" data-aos-delay="700">
          “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.” -Seckin Ozturk
          </p>
          <button      data-aos="fade-up"
                data-aos-delay="800"
                            className="bg-blue-400 hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                SECKIN-XD500
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              SECKIN- XD500 spacecraft is capable of carrying up to 7 passengers to and from Earth orbit and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="800"
                className="bg-blue-400 hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in-left">
              <img
                src={satellite2}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>


    </>


  )
}

export default MainThree