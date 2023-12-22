import { motion } from 'framer-motion'
import AnimateText from '../AnimateText'
import BottomLeftNote from '../BottomLeftNote'
import { ModernSolutionIcons } from '../GetStarted/ModernSolution'
import Socials from '../Socials'
import ExploreCard from './ExploreCard'

const data = [
    {
        bgImage: '/images/explore1.jpg',
        desc: 'Dental Health Records',
    },
    {
        bgImage: '/images/explore2.jpg',
        desc: 'Toothbrush Tracking',
    },
    {
        bgImage: '/images/explore3.jpg',
        desc: 'Symptom Checker',
    },
    {
        bgImage: '/images/explore4.jpg',
        desc: 'Teledentistry Consultation',
    },
    {
        bgImage: '/images/explore5.jpg',
        desc: 'Oral Care Guides',
    },
    {
        bgImage: '/images/explore5.jpg',
        desc: 'Medication Tracking',
    },
]
const Explore = () => {
    return (
        <div className='grid grid-cols-2 gap-24 h-screen overflow-hidden mt-[80px]'>
            <div>
                <div className='flex flex-col justify-center gap-8 h-[600px]'>
                    <ModernSolutionIcons />
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4 text-[48px]'>
                            <AnimateText>{'EXPLORE'}</AnimateText>
                            <AnimateText>OUR</AnimateText>
                        </div>
                        <div className='flex items-center gap-4 text-[48px]'>
                            <AnimateText>{'SERVICE'}</AnimateText>
                            <AnimateText>MAKE</AnimateText>
                        </div>
                        <div className='flex items-center gap-4 text-[48px]'>
                            <AnimateText>YOUR</AnimateText>
                            <AnimateText>SMILE</AnimateText>
                            <AnimateText>SHINE</AnimateText>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 50,
                                    ease: 'easeIn',
                                    duration: 0.2,
                                },
                            }}
                            className='bg-primary rounded-full text-white border-primary'
                        >
                            Get the app
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 50,
                                    ease: 'easeIn',
                                    duration: 0.2,
                                },
                            }}
                            className='bg-none rounded-full text-black border-black'
                        >
                            Meet the team
                        </motion.button>
                    </div>
                </div>
                <div className='mt-auto flex items-center justify-between'>
                    <BottomLeftNote />
                    <Socials />
                </div>
            </div>
            <div className='flex gap-4 '>
                <motion.div
                    initial={{                    
                      y:150
                  }}
                  whileInView={{
                      transition:{
                        delay:1,
                        ease:'linear',
                        type:'keyframes',
                        duration:3,
                        // repeat:Infinity

                      },
                      y:[-150, -300, -450,-300, -150]
                  }}
                    className='flex flex-col gap-4'
                >
                    {data.slice(0, 4).map(el => (
                        <ExploreCard key={el.desc} {...el} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{
                      
                        y:-600
                    }}
                    whileInView={{
                        transition:{
                          delay:1,
                          ease:'linear',
                          type:'keyframes',
                          duration:3,
                        //   repeat:Infinity

                        },
                        y:[-600, -450, -300, -150,0, -150,-300,-450,-600]
                    }}
                    className='flex flex-col gap-4'
                >
                    {data.slice(2).map(el => (
                        <ExploreCard key={el.desc} {...el} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Explore
