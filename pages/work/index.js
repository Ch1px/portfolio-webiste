import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Tilt from 'react-parallax-tilt';

import { FaGithub } from 'react-icons/fa'


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
    image: "/bri.png",
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

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-primary/50 p-5 rounded-2xl sm:w-[360px] w-full">

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-2 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='bg-gradient-to-r from-zinc-700 via-zinc-900 to-black 
                w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:shadow-neons'>
              <div className='object-contain'><FaGithub /></div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3>{name}</h3>
          <h3>{description}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}


const Work = () => {
  return (
    <div className='flex flex-wrap gap-7 justify-center items-center h-full'>
      {projects.map((project, index) =>
        <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project} />)}
    </div>
  );
};

export default Work;
