import React from 'react'
import galaxy from "../assets/galaxy.jpg"

const Galaxy = () => {
  return (
<div className='flex justify-center items-center mt-20'>
<div className=" flex justify-center items-center text-center card glass w-96 ">
  <figure >
    <img
      src={galaxy} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="bg-sec hover:bg-primary glass px-4 py-1 rounded-md duration-200 font-hiye tracking-wider ">Learn now!</button>
    </div>
  </div>
</div>
</div>



  )
}

export default Galaxy