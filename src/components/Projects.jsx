import { content } from "../Content";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay } from 'swiper/modules';

import { Pagination, Autoplay } from "swiper";
import { useState } from "react";

const Projects = () => {
  const { Projects } = content;
  const [open, setOpen] = useState(false);
  const CloseModal = () => {
    setOpen(false);
  };
  
  const [data, setData] = useState({});
  function handleOpenFilter(item) {
    setOpen(!open);
    setData(item);
    console.log(data)

  }

  return (
    <>
      <section className="bg-bg_light_primary" id="projects">
        <div className="md:container px-5 pt-14 max-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
            <br />
          </div>
          <div className="flex items-center ">
            <Swiper
              pagination={{
                clickable: true,
              }}
              // data-aos="fade-left"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="rounded-3xl pb-[3rem] drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-[18rem] lg:h-[22rem] "
                >
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button
                      className="font-bold text-gray self-end"
                      onClick={()=>handleOpenFilter(content.content)}
                    >
                      READ MORE
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <ProjectDetails show={open} close={CloseModal} data={data}/>
    </>
  );
};

export default Projects;
