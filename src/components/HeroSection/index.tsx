import { useState } from 'react'
import styles from './hero.module.scss'
import { PiArrowLeft, PiArrowRight, PiTooth } from 'react-icons/pi'
import { colors } from '../../colors'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import {  heroAnimation, reverseHeroAnimation } from '../../animations'

const HeroSection = () => {
    const {isHeroAnimationEnd, setHeroAnimationEnd, beginNavAnimation,setBeginNavAnimation} = useAppContext()
    const [showText, setShowText]= useState(true)

    return (
        <>
        <div className={`h-screen ${beginNavAnimation ? 'hidden':'flex'} justify-center items-center`} >

            {isHeroAnimationEnd ? (
                <motion.div className={`flex flex-col items-center`} animate={{
                  opacity: beginNavAnimation ? 0 : 1,
                }}>
                    
                    <motion.div animate={{  opacity:[1,0], transition:{duration:0.5}}} 
                     className={'flex justify-center items-center rounded-full h-[64px] w-[64px] border-[2px] border-primary bg-primary'}>
                        <PiTooth color={colors.white} size={48} stroke='' />
                    </motion.div>
                    <motion.h3
                        initial={{
                            y: 20,
                        }}
                        animate={{
                            y: 0,
                            opacity:[1,0],
                            transition: {
                                type: 'tween',
                            },
                        }}
                        onAnimationComplete={()=> {
                          setBeginNavAnimation(true)
                        }}
                        className={'text-primary font-medium text-[24px]'}
                    >
                        DENTYTECH
                    </motion.h3>
                </motion.div>
            ) : (
                <div className='flex items-center justify-center'>
                    <motion.div
                        animate={reverseHeroAnimation(true)}
                        onAnimationComplete={() => {
                            setHeroAnimationEnd(true)
                        }}
                        className={'flex border-[2px] rounded-full items-center justify-center h-[64px] w-[64px] border-primary'}
                    >
                        <PiArrowRight
                            color={colors.primary}
                            size={48}
                            stroke=''
                        />
                    </motion.div>
                    <motion.div
                        animate={reverseHeroAnimation(true)}
                        className={showText ?`${styles.arrow_two} ${styles.dental}`: styles.arrow_two}
                    >
                     {showText ? <motion.h3 initial={{opacity:1,width:'auto'}} animate={{opacity:0, width:'0px', transition:{duration:0.5}}} onAnimationComplete={()=> setShowText(false)}>DENTAL</motion.h3>:
                     <PiArrowRight 
                            color={colors.white}
                            size={48}
                        />}
                    </motion.div>
                    <motion.div
                        className={showText ?`${styles.arrow_three} ${styles.assistance}`: styles.arrow_three}
                        animate={heroAnimation(true)}
                    >
                     {showText ? <motion.h3 initial={{opacity:1,width:'auto'}} animate={{opacity:0, width:'0px', transition:{duration:0.5}}} onAnimationComplete={()=> setShowText(false)}>ASSISTANCE</motion.h3>:
                        <PiArrowLeft
                            color={colors.primary}
                            size={48}
                            stroke=''
                        />}
                    </motion.div>
                    <motion.div
                        className={styles.arrow_two}
                        animate={heroAnimation(false)}
                    >
                        <PiTooth color={colors.white} size={48} stroke='' />
                    </motion.div>
                </div>
            )}
        </div>
        </>
    )
}

export default HeroSection
