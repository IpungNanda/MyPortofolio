import React from 'react'
import { motion, useScroll } from 'framer-motion';

export default function LiIcon({ reference }) {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )


    return (
        <figure className='absolute left-0 stroke-pink-600 rounded-full ml-2.5'>
            <svg className='-rotate-90' width="50" height="50" viewBox='0 0 100 100'>
                <circle cx="50" cy="50" r="40" className='stroke-pink-600 stroke-1 fill-none' />
                <motion.circle cx="50" cy="50" r="30" className=' stroke-[5px] fill-white'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="50" cy="50" r="10" className=' animate-pulse stroke-1 fill-pink-600' />
            </svg>
        </figure>
    )
}
