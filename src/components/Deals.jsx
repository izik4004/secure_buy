import React from 'react'
import Image from "../assets/category/shoe1.png"

const Deals = () => {
  return (
   <section className='md:container  mx-auto flex flex-col' >
    <h2 className='text-center py-8 text-2xl'>Top Deals</h2>
    <div className='flex mx-auto flex-col gap-6 lg:flex-row px-4 lg:px-0'>
        <div className='flex lg:w-1/2 w-full border  rounded-xl px-10 py-8 bg-accent'>
        <div className='flex items-center flex-col py-6'>
            <h3 className='py-6' >jhgkdjhkld;kjjhlkdhjkh</h3>
            <button className='px-6  py-2 rounded-xl bg-white text-accent'>Shop Now </button>
            </div>
            <div>
                <img src={Image} alt="" className='w-54' />
            </div>
        </div>
        <div className='flex lg:w-1/2 w-full border  rounded-xl px-10 py-8 bg-primary'>
        <div className='flex items-center flex-col py-6'>
            <h3 className='py-6'>jhgkdjhkld;kjjhlkdhjkh</h3>
            <button className='px-6  py-2 rounded-xl bg-white text-accent'>Shop Now </button>
            </div>
            <div>
                <img src={Image} alt="" className='w-54' />
            </div>
        </div>
        </div>
   </section>
  )
}

export default Deals