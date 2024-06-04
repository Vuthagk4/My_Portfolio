import React from 'react';
import aboutImage from '../assets/images/about.png'
const About = () => {
  const information = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "03" },
    { text: "Companies Work", count: "01" },
  ];

  return (
    <section id='about' className='py-10 text-white'>
      <div className='mt-8 text-center'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-500 text-lg my-2'>My introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className=' p-2'>
            <div className='text-gray-400 my-3'>
              <p className=' text-justify leading-7 w-11/12 mx-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam nec pharetra libero. Sed sollicitudin lectus congue,
                congue risus quis, imperdiet libero. Proin id risus tempor,
                consectetur velit semper, ultrices neque. Cras tortor nulla,
                ornare ac velit et, faucibus posuere augue. Duis consequat
                finibus turpis, quis scelerisque sapien iaculis vitae.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {information.map((content) => (
                  <div key={content.text}>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}<span>+</span>
                    </h3>
                    <span className=' md:text-base text-xs'>{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href='./src/assets/images/Orn_Vutha_CV.pdf' download>
                <button className='btn-primary md:flex'>Download CV</button>
              </a>
            </div>
          </div>
          <div className=' flex-1 md:mt-0 mt-6 flex justify-center items-center'>
          <div className=' lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
            <img src={aboutImage}
              alt='' className=' w-full bg-cyan-600 rounded-xl object-cover'/>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
