import React from 'react'
import hireme from '../assets/images/hireMe.png'
const Hireme = () => {
  return (
    <section 
    id='hireme'
    className=' py-10 px-3 text-white'
    >
      <div className=' text-center'>
        <h3 className=' text-4xl font-semibold'>
            Hire <span className=' text-cyan-600'>Me</span>
        </h3>
        <p className=' text-gray-400 mt-3 text-lg'>Do you have nay work</p>
      </div>
      <div className=' bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-6 flex gap-6 lg:flex-row flex-col-reverse items-center '>
        <div>
            <h2 className='  text-2xl font-semibold'>Do you any work from me?</h2>
            <p className=' lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>
                lorem Ipsum is Lore than others in the world. Lore is the
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam commodo quis diam id iaculis. Cras tempor fringilla
                ex, et ullamcorper neque tristique quis.
            </p>
        <button className=' btn-primary mt-10'>Say Hello</button>
        </div>
        <img src={hireme} alt='' className=' lg:h-[32rem] bottom-0 -right-4 h-80  object-cover lg:absolute'/>
      </div>
    </section>
  )
}

export default Hireme
