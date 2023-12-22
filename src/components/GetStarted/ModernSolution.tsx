import { motion } from 'framer-motion'
import { PiAtom, PiTooth, PiDna } from 'react-icons/pi'

const icons = [
    <PiAtom className='text-primary' />,
    <PiTooth className='text-primary' />,
    <PiDna className='text-primary' />,
]
export const ModernSolutionIcons = () => {
  return (
    <div className='flex items-center gap-2'>
                {icons.map((el, idx) => (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotateZ: 30 }}
                        whileInView={{
                            opacity: 1,
                            rotateZ: 0,
                            scale: 1,
                            transition: {
                                delay: idx * 0.2,
                                duration: 0.2,
                                type: 'spring',
                                stiffness: 50,
                            },
                        }}
                        className='flex items-center w-9  h-9 rounded-full border-[1px] p-[2px] justify-center bg-light'
                    >
                        {el}
                    </motion.div>
                ))}
            </div>
  )
}
const ModernSolution = () => {
    return (
        <div className='flex flex-col gap-1'>
            <ModernSolutionIcons />
            <div>
                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    Modern Solutions,
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.2,
                        },
                    }}
                >
                    Timeless Smiles
                </motion.p>
            </div>
        </div>
    )
}

export default ModernSolution
