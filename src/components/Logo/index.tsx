import { motion } from 'framer-motion'
import { PiTooth } from 'react-icons/pi'
import styles from './logo.module.scss'
const Logo = () => {

    return (
        <div className={'flex items-center gap-2'}>
            <motion.div
                transition={{
                    ease: 'circInOut',
                    duration: 0.5,
                }}
                initial={{
                    scale: 0,
                    x:80
                }}
                animate={{
                    scale: 1,
                    x:0
                }}
                className={`rounded-full w-8 h-8 bg-primary flex items-center justify-center`}
            >
                <PiTooth color='#fff' />
            </motion.div>

            <h3
                className={styles.logo_text}
            >
                DENTYTECH
            </h3>
        </div>
    )
}

export default Logo
