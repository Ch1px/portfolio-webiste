import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaFigma,
  FaPython,
  FaUnity,
  FaJava,
  FaAndroid,
  FaLinux,
  FaUbuntu,
  FaWindows,
} from "react-icons/fa";

import {
  TbBrandThreejs,
  TbBrandTailwind
} from 'react-icons/tb'

import {
  SiNextdotjs,
  SiFramer,
  SiMysql,
  SiCsharp,
  SiStyledcomponents,
  SiTensorflow,

} from "react-icons/si";

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
//  data
const aboutData = [
  {
    title: 'tools',
    info: [
      {
        title: 'Frontend Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <TbBrandThreejs />,
          <TbBrandTailwind />,
          <SiStyledcomponents />
        ],
      },
      {
        title: 'Backend Web Development',
        icons: [<FaNodeJs />, <FaPhp />, <SiMysql />],
      },
      {
        title: 'Machine Learning/Deep learning',
        icons: [<FaPython />, <SiTensorflow />]
      },
      {
        title: 'Android',
        icons: [<FaJava />, <FaAndroid />]
      },
      {
        title: 'Game Development',
        icons: [<FaUnity />, <SiCsharp />]
      },
      {
        title: 'Operating System',
        icons: [<FaWindows />, <FaLinux />, <FaUbuntu />]
      }
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'JPMorgan Software Engineering Virtual Experience Program on Forage',
        stage: '2023',
        image: '/JPcert.png',
      },
      {
        title: 'Blackbird Software Engineering Virtual Experience Program on Forage',
        stage: '2023',
        image: '/blackbirdcert.png'
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Free lance Web Developer',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Computer Science Bachelor Degree - Liverpool Hope University',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/60 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex-1 flex flex-col justify-center'>
          <h2 className='h2'>
            Captivating <span className='text-accent'>stories </span>birth magnificant designs
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Hello! I'm Daniel, a recent computer science graduate
            with a fervor for crafting intuitive web interfaces. University honed my technical foundation and sparked my passion for
            frontend development. Transforming intricate designs into dynamic, ensuring functionality meets aesthetics.
            I'm eager to contribute to your web-based projects and bring your digital vision to life.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]  p-6 rounded-md'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] group after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
              after:bg-white after:absolute after:bottom-1 after:left-0 hover:text-accent`}
                  onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70 '>
                  <div className='font-light mb-2 md:mb-0'>
                    {item.title}
                  </div>
                  {item.image && (
                    <img src={item.image}  className="max-w-[150px] my-2" />
                  )}
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className='text-2xl text-white'>{icon}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
