import { motion } from 'framer-motion'
import { useState } from 'react'
import { PiTooth } from 'react-icons/pi'

const Assistance = () => {
    const [showTextAnimation, setShowTextAnimation] = useState(false)
    return (
        <div className='flex items-center '>
            <motion.div
                initial={{ width: 0 }}
                animate={{
                    width: 'auto',
                    transition: {
                        duration: 1,
                    },
                }}
                onAnimationComplete={() => {
                    setShowTextAnimation(true)
                }}
                className='bg-light px-6 flex items-center h-12  rounded-full'
            >
                {showTextAnimation && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='text-base text-primary'
                    >
                        ASSISTANCE
                    </motion.p>
                )}
            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
                className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'
            >
                <PiTooth className='text-white text-[24px]' />
            </motion.div>
        </div>
    )
}

export default Assistance
