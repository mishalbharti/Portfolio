// import content
import { useEffect } from "react";
import { content } from "../Content";
import { BsInstagram } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 "
        >
          <h1 className="rotate-90 absolute top-[35%] right-[-33%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        
        </div>

        {/* first col */}
        <div className="flex justify-center gap-10 md:gap-12 pb-16 px-6 pt-5" data-aos="fade-down ">
          <div
            className="flex flex-col items-center gap-4 py-4 text-[22px] h-[25rem] cursor-pointer"
            data-aos="fade-down"
          >
            <a
              href="https://github.com/mishalbharti"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <div className="bg-black w-[1px] h-[4rem] p-0 m-0" />
            <a
              href="https://www.linkedin.com/in/mishal-bharti-86b26a227/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <ImLinkedin2 />
            </a>
            {/* <div className="bg-black w-[1px] h-[4rem] p-0 m-0" />
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <BsTwitterX />
            </a> */}
          </div>
          <div className="w-full">
            <span className="text-[24px] ">I'm a</span>
            <h2 className="max-w-max">{hero.title}</h2>
            <br />
            <div className="flex justify-end">
              <button className="btn hover:bg-dark_primary transition-colors duration-500 ease-in-out hover:text-white">
                {hero.btnText}
              </button>
            </div>
            <div className="flex flex-col gap-10 mt-10">
              {hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-full md:w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
                >
                  <h3>{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
