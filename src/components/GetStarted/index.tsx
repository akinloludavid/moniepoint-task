import { advantages } from '../Advantage/data'
import { PiPlayFill } from 'react-icons/pi'

import BottomLeftNote from '../BottomLeftNote'
import Socials from '../Socials'
import Assistance from './Assistance'
import Care from './Care'
import ModernSolution from './ModernSolution'
import { motion } from 'framer-motion'
import { useState } from 'react'

const GetStarted = () => {
    const [showOtherAnimations, setShowOtherAnimations] = useState(false)
    return (
        <div className='mx-auto w-[90%] h-screen flex flex-col pt-32'>
            <div className='flex items-center gap-6 w-full justify-center'>
                <motion.h2
                    initial={{ x: 320 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn',
                        },
                    }}
                    onAnimationComplete={() => {
                        setShowOtherAnimations(true)
                    }}
                    className='tracking-[8px] text-lg font-normal'
                >
                    REVOLUTIONIZING
                </motion.h2>
                <div>{showOtherAnimations && <ModernSolution />}</div>
            </div>

            <div className='flex items-center gap-12 w-full justify-center'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        {showOtherAnimations && <Assistance />}
                    </div>
                    <motion.h2
                        initial={{ x: -200 }}
                        whileInView={{
                            x: 0,
                            transition: {
                                duration: 0.5,
                                ease: 'easeIn',
                            },
                        }}
                        className='tracking-[16px] text-lg font-normal'
                    >
                        DENTAL{' '}
                    </motion.h2>
                </div>
                <div className='flex items-center'>
                    <div className=''>{showOtherAnimations && <Care />}</div>
                    <motion.h2
                        initial={{ x: -200 }}
                        whileInView={{
                            x: 0,
                            transition: {
                                duration: 0.5,
                                ease: 'easeIn',
                            },
                        }}
                        className='tracking-[16px] text-lg font-normal'
                    >
                        CARE
                    </motion.h2>
                </div>
            </div>
            <div className='flex items-center relative gap-8 justify-center'>
                <motion.h2
                    initial={{ x: 320 }}
                    whileInView={{
                        x: 0,
                        transition: {
                            duration: 0.5,
                            ease: 'easeIn',
                        },
                    }}
                    className='text-lg font-normal'
                >
                    WITH TECHNOLOGY
                </motion.h2>
                {showOtherAnimations && (
                    <div className='flex items-center '>
                        {advantages.map((el, idx) => (
                            <motion.img
                                initial={
                                    idx === 0
                                        ? { opacity: 0 }
                                        : { x: -20, opacity: 0 }
                                }
                                whileInView={
                                    idx === 0
                                        ? { opacity: 1 }
                                        : {
                                              x: 0,
                                              opacity: 1,
                                              transition: {
                                                  delay: idx * 0.2,
                                                  ease: 'easeIn',
                                              },
                                          }
                                }
                                key={el.id}
                                className={`w-15 h-15 relative rounded-full ml-[-12px]`}
                                src={el.imgUrl}
                            />
                        ))}
                    </div>
                )}
                {showOtherAnimations && (
                    <div className='absolute left-[6%] bottom-[-64px]'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className='relative'
                        >
                            <img
                                src='/images/woman-smiling.jpg'
                                className='rounded-[8px] w-[160px]'
                            />
                            <div className='absolute right-[-16px] bottom-[-16px] bg-light rounded-full w-8 h-8 flex items-center justify-center'>
                                <PiPlayFill className='text-primary' />
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            <div className='flex items-end justify-between mt-auto mb-8'>
                <BottomLeftNote />
                <motion.div
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    className='p-4 rounded-full w-32  border-b-[1px] border-b-primary'
                >
                    <div className=' w-24 h-24 rounded-full bg-primary flex items-center justify-center'>
                        <h3 className='text-white text-[16px] text-center'>
                            GET STARTED
                        </h3>
                    </div>
                </motion.div>
                <Socials />
            </div>
        </div>
    )
}

export default GetStarted
