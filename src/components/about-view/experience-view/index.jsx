import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/about-view/liicon'



const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
                    target="_blank"
                    className='text-pink-600 capitalize'
                >@{company}</a></h3>
                <span className='capitalize font-medium text-black/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

export default function ExperienceView() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-5xl md:text-6xl lg:7xl sm:text-6xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative '>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-1 w-[4px] h-full bg-pink-600 origin-top' />

                <ul className='w-full flex flex-col items-center justify-between ml-8 md:24 sm:16'>

                    <Details

                        position="Sofware Engineer" company="GrockRevolution"
                        companyLink="www.google.com"
                        time="2023-Present" address="Solo, Surakarta"
                        work="worked on team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."

                    />

                    <Details

                        position="Sofware Engineer" company="GrockRevolution"
                        companyLink="www.google.com"
                        time="2023-Present" address="Solo, Surakarta"
                        work="worked on team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."

                    />

                    <Details

                        position="Sofware Engineer" company="GrockRevolution"
                        companyLink="www.google.com"
                        time="2023-Present" address="Solo, Surakarta"
                        work="worked on team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."

                    />

                    <Details

                        position="Sofware Engineer" company="GrockRevolution"
                        companyLink="www.google.com"
                        time="2023-Present" address="Solo, Surakarta"
                        work="worked on team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."

                    />

                    <Details

                        position="Sofware Engineer" company="GrockRevolution"
                        companyLink="www.google.com"
                        time="2023-Present" address="Solo, Surakarta"
                        work="worked on team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization."

                    />
                </ul>
            </div>
        </div>
    )
}
