import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Bulb from '../../components/Bulb'

import { FaGithub } from 'react-icons/fa'
import WorkSlider from '../../components/WorkSlider';


const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Bulb/>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
        
            <WorkSlider />

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-center flex xl:w-[45vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-12'>
              Creative <span className='text-accent'>works</span>
            </h2>
            <p className='max-w-[400px] mx-auto mb-4 lg:mx-0'>
              Dive into a curated collection of my projects, where innovation meets passion. Each endeavor showcases my dedication to pushing boundaries, solving problems, and creating impactful solutions. Whether it's technology, design, or any other domain, journey with me to see how I bring ideas to life!
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Work;
