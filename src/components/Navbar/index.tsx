import styles from './navbar.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import Logo from '../Logo'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
const Navbar = () => {
    const { setEndNavAnimation } = useAppContext()
    return (
        <>
            <div className={styles.wrapper}>
                <motion.div
                    transition={{
                        ease: 'linear',
                        duration: 0.5,
                    }}
                    initial={{
                        y: -50,
                        opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    onAnimationComplete={() => setEndNavAnimation(true)}
                    className={styles.menu}
                >
                    <button>Menu</button>
                    <div>
                        <CgMenuRight />
                    </div>
                </motion.div>
                <div>
                    <Logo />
                </div>
                <motion.div
                    transition={{
                        ease: 'linear',
                        duration: 0.5,
                    }}
                    initial={{
                        y: -50,
                        opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    className={'flex items-center'}
                >
                    <button className={styles.login_btn}>Login</button>
                    <button className={styles.signup_btn}>Signup</button>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar
