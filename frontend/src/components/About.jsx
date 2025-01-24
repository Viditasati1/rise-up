import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { div, p } from 'framer-motion/client';
import { SectionWrapper } from './hoc';
import { staggerContainer } from '../utils/motion';

const ServiceCard = ({ index, title, description }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-start flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center mb-2">
          {title}
        </h3>
        <p className="text-secondary text-[16px] leading-[24px] text-center">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>

    <motion.div variant= {textVariant()}>
      <p className={styles.sectionSubText}>
Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("","",0.1,1)}
    
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>

“Rise Up is your companion in breaking the barriers of anxiety and becoming the best version of yourself. From personalized assessments to engaging therapy modules, we empower you to take charge of your journey.”
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
export {styles}
export {staggerContainer}
export {SectionWrapper}