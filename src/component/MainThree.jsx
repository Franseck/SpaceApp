import React from 'react'
import satellite from "../assets/satelite1.jpg"
import satellite2 from "../assets/satelite2.jpg"


const MainThree = () => {
  return (
    <>
    <section className=" pb-12">
    <div className="container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <img
            src={satellite}
            alt=""
            className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
          />
        </div>
        <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
          <p
            className="text-sky-800 uppercase"
          >
            our mission
          </p>
          <h1
                      className="uppercase text-5xl"
          >
            Rapidscat
          </h1>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            molestiae reprehenderit expedita corporis, non doloremque.
            Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eos molestiae reprehenderit
            expedita corporis, non doloremque. Consequatur consectetur
            quisquam qui sunt.
          </p>
          <button
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
                Rapidscat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos molestiae reprehenderit
                expedita corporis, non doloremque. Consequatur consectetur
                quisquam qui sunt.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
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