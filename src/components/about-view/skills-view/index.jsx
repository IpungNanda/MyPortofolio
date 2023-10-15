import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-pink-600 text-white py-3 px-6 shadow-black border-black cursor-pointer absolute'
             
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y }}
        transition={{duration: 1.5}}
        viewport={{once: false}}
        >
           {name}
        </motion.div>
    )
}

export default function SkillsView() {
  return (
    <>
        <h2 className='font-bold text-5xl lg:text-7xl md:text-6xl sm:text-6xl mt-24 md:mt-32 lg:mt-64 w-full text-center mb-32'>Skills</h2>
        <div className='hidden w-full h-screen relative lg:flex items-center justify-center rounded-full bg-circularLight'>
             
             <motion.div className='flex items-center justify-center rounded-full font-semibold bg-pink-600 text-white p-8 shadow-black border-black cursor-pointer'
             
             whileHover={{scale:1.05}}
             >
                Web
             </motion.div>

             <Skill name="HTML" x="-25vw" y="2vw"/>
             <Skill name="CSS" x="-5vw" y="-10vw"/>
             <Skill name="Javascript" x="20vw" y="6vw"/>
             <Skill name="ReactJS" x="0vw" y="12vw"/>
             <Skill name="NextJS" x="-20vw" y="-15vw"/>
             <Skill name="NodeJS" x="15vw" y="-12vw"/>
             <Skill name="TailwinCSS" x="32vw" y="-5vw"/>
             <Skill name="FramerMotion" x="0vw" y="-20vw"/>
             <Skill name="MongoDB" x="-25vw" y="15vw"/>
             <Skill name="Sanity" x="18vw" y="18vw"/>
        </div>
        <div className='lg:hidden w-full h-screen relative flex items-center justify-center lg:rounded-full bg-circularLight'>
             
             <motion.div className='flex items-center justify-center rounded-full font-semibold bg-pink-600 text-white p-8 shadow-black border-black cursor-pointer'
             
             whileHover={{scale:1.05}}
             >
                Web
             </motion.div>

             <Skill name="HTML" x="-36vw" y="4vw"/>
             <Skill name="CSS" x="-35vw" y="-30vw"/>
             <Skill name="Javascript" x="23vw" y="60vw"/>
             <Skill name="ReactJS" x="32vw" y="35vw"/>
             <Skill name="NextJS" x="-25vw" y="-60vw"/>
             <Skill name="NodeJS" x="25vw" y="-60vw"/>
             <Skill name="TailwinCSS" x="0vw" y="80vw"/>
             <Skill name="FramerMotion" x="0vw" y="-80vw"/>
             <Skill name="MongoDB" x="-23vw" y="60vw"/>
             <Skill name="Sanity" x="36vw" y="4vw"/>
        </div>
    </>
  )
}
 