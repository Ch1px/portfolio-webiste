
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from "swiper";
// data
const projects = [
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/USproject.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "/project.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/bri.png",
    source_code_link: "https://github.com/",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidePerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidePerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={{ FreeMode, Pagination }}
      className="h-[280px] sm:h-[370px] bg-black/30 w-[320px] rounded-lg"
    >
      {
        projects.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 py-4 flex
              sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer ">
                <div className="relative w-full h-[150px]">
                  <img
                    className="w-full h-full object-fit rounded-lg"
                    src={item.image}
                    alt={item.name} />
                </div>
                <div>
                  <div>{item.name}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
      Work Slider</Swiper>);
};

export default WorkSlider;
