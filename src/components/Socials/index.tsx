import { motion } from 'framer-motion'
import { socialIcons } from './data'
const Socials = () => {
    return (
        <div className={'flex flex-col justify-end gap-[12px]'}>
            <div className={'flex items-center gap-2 justify-end'}>
              {socialIcons.map((el, idx)=> (
                <motion.div key={idx} initial={{opacity:0, rotateZ:30}} animate={{opacity:1, rotateZ:0, transition:{
                  duration:0.5
                }}}>
                  {el}
                </motion.div>
              ))}
            </div>
            <motion.p 
            className='text-right text-[12px]'
                initial={{ y: 60, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        ease: 'linear',
                    },
                }}
            >
                Best Start Up Of 2023
            </motion.p>
        </div>
    )
}

export default Socials
