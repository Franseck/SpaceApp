import React from 'react'
import galaxy from "../assets/galaxy.jpg"

const Galaxy = () => {
  return (
<div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
className='flex justify-center items-center mt-20'>
<div className=" flex justify-center items-center text-center card glass w-96 ">
  <figure >
    <img
      src={galaxy} alt="" />
  </figure>
  <div className="card-body items-center gap-4">
    <h2 className="card-title font-second">Into The Deep</h2>
    <p className="font-less">Planets are gravitationally rounded, but have not cleared their orbits of other bodies. In increasing order of average distance from the Sun, the ones generally agreed among astronomers are Ceres, Orcus, Pluto, Haumea, Quaoar, Makemake, Gonggong, Eris, and Sedna</p>
    <div className="card-actions justify-end">
      <button className="bg-sec hover:bg-primary glass px-4 py-1 rounded-md duration-200 font-hiye tracking-wider ">Learn now!</button>
    </div>
  </div>
</div>
</div>



  )
}

export default Galaxy