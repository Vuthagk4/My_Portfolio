import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project_person1.png';
import project3 from '../assets/images/project-2.jpg';
import project4 from '../assets/images/project-3.jpg';
import project5 from '../assets/images/project-4.jpg';





const Projects = () => {
  const link_project = [
    {
      img: "Project1",
      name:"Movie App",
      github_link:"https://github.com/Sridhar-C-25",
      live_link:"https://myreactflix.netlify.app",
    },
    {
      img: "Project1",
      name:"StarBurck",
      github_link:"https://github.com/Sridhar-C-25",
      live_link:"https://myreactflix.netlify.app",
    },
    {
      img: "Project1",
      name:"Movie App",
      github_link:"https://github.com/Sridhar-C-25",
      live_link:"https://myreactflix.netlify.app",
    },

  ]
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
        <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {
              link_project.map((project_information,i)=>(
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project1} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4 flex">{project_information.name}</h3>
                  <div className="flex gap-3">
                    <a href={project_information.github_link}  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                      Github
                    </a>
                    <a href={project_information.live_link} target="_blank" rel="noreferrer" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className=' lg:block  hidden'>
          <img src={project2} alt=''/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
