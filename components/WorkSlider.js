
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from "swiper";

import { FaGithub } from 'react-icons/fa'
// data
const projects = {
  slides: [
    {
      images: [
        {
          title: 'Universe Sandbox',
          path: '/USproject.png',
          link: ''
        },
        {
          title: 'Solar Explore',
          path: '/project.png',
          icon: <FaGithub />,
          link: 'https://github.com/Ch1px/Solar-Explorer',
        },
        {
          title: 'Solar Explore Android app',
          path: '/android.png',
          icon: <FaGithub />,
        },
        {
          title: 'Sign Language Recognition',
          path: '/thumb2.jpg',
          icon: <FaGithub />,
        },
      ],
    },
    {
      images: [
        {
          title: 'Face Emotion Recognition',
          path: '/project.png',
          icon: <FaGithub />,
        },
        {
          title: 'Free lance company website',
          path: '/project.png',
          icon: <FaGithub />,
        },

      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[470px]"
    >
      {
        projects.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer xl:mt-2">
                {slide.images.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={index}>
                      <Tilt>
                        <div className="flex items-center justify-center relative overflow-hidden">
                          <Image src={image.path} width={500} height={300} alt="" />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#36c8e2] 
                        to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                          transition-all duration-300 text-center">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              <div className="delay-100">{image.title}</div>
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">{image.icon}</div>
                            </div>
                          </div>
                        </div>
                      </Tilt>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>);
};

export default WorkSlider;
