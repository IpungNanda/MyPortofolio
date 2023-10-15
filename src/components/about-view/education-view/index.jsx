import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '@/components/about-view/liicon'



const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-black/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

export default function EducationView() {
    const ref = useRef(null)
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64'>
       <h2 className='font-bold text-5xl md:text-6xl lg:7xl sm:text-6xl mb-32 w-full text-center'>
        Education
       </h2>

       <div ref={ref} className='w-[75%] mx-auto relative '>
       
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-8 top-1 w-[4px] h-full bg-pink-600 origin-top'/>

            <ul className='w-full flex flex-col items-center justify-between ml-8'>
                
                    <Details
                    
                    type="SD" 
                    time=" 2010-2016"
                    place="SD Negeri Joglo No.76 Surakarta"
                    info="When I was studying at elementary school level I learned a lot about subjects and much more" 

                    />

                    <Details
                    
                    type="SMP" 
                    time=" 2017-2020"
                    place="SMP Negeri 12 Surakarta"
                    info="When I was studying at junior high school level I learned a lot about subjects and much more" 

                    />

                    <Details
                    
                    type="SMK" 
                    time="2020-2023"
                    place="SMK Negeri 2 Surakarta"
                    info="When I was studying at high school level I learned a lot about subjects and much more" 

                    />
            </ul>
       </div>
    </div>
  )
}
