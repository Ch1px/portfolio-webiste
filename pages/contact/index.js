import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Circles from "../../components/Circles";
import Earth from "../../components/Earth";


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (success) { 
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer if the component unmounts before the timer runs out
    }
  }, [success]);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_g2ggs8p', 'template_jw2gizm', ref.current, 'SiI49mnog4ZAd1Qyh')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setIsVisible(true);  // Reset the visibility state
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }
  return (
    <div className="h-full bg-primary/60">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <motion.div className="flex flex-col w-full max-w-[700px]"
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'>
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <form ref={ref} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full">
            <div className="flex-1 flex flex-col gap-6 w-full">
              <input placeholder="name" name="name" className="input hover:shadow-neons" />
              <input placeholder="email" name="email" className="input hover:shadow-neons" />
            </div>
            <input placeholder="subject" name="subject" className="input hover:shadow-neons" />
            <textarea placeholder="message" name="message" className="textarea hover:shadow-neons" />
            <button className="btn rounded-full border border-white/20 max-w-[170px]
             px-8 transition-all duration-300 flex items-center justify-center 
             overflow-hidden hover:shadow-neons group">
              <span className='group-hover:-transalte-y-[120%] group-hover:opacity-0
                 transition-all duration-500'>Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
              duration-300 absolute text-[22px]"/>
            </button>
            {isVisible && success && <p className="p">"Your message has been sent. I will get back to you ASAP :)"</p>}
          </form>
        </motion.div>
      </div>
      <Circles/>
      <Earth/>
    </div>
  )
}

export default Contact

