import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import AnimateText from '../AnimateText'
import BottomLeftNote from '../BottomLeftNote'
import Socials from '../Socials'
import Card from './Card'
import { advantages } from './data'

const Advantage = () => {
    const { setGetStartedAnimation } = useAppContext()

    return (
        <div>
        <div
            className={
                'h-[90vh] overflow-y-scroll flex flex-col justify-center'
            }
        >
            <div
                className={`flex items-center  justify-center flex-col relative`}
            >
                <div className='flex text-xl my-auto items-center gap-4'>
                    <AnimateText>OUR</AnimateText>
                    <AnimateText> ADVANTAGES</AnimateText>
                </div>
                <div className='flex flex-col-reverse'>
                    {advantages.map((item, idx) => (
                        <motion.div
                            key={item.imgUrl}
                            initial={{
                                rotateZ: -30,
                                marginTop: '-300px',
                                y: 60,
                            }}
                            animate={{
                                rotateZ: 20,
                                marginTop: '-300px',
                                y: -1000,
                                transition: {
                                    duration: 1,
                                    type: 'keyframes',
                                    ease: 'linear',
                                    delay: (idx + 1) * 1,
                                },
                            }}
                            onAnimationComplete={_e => {
                                setGetStartedAnimation(true)
                            }}
                        >
                            <Card {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
         
        </div>
        <div className={'flex mt-auto items-end w-full justify-between'}>
                <BottomLeftNote />
                <Socials />
            </div>
        </div>
    )
}

export default Advantage
