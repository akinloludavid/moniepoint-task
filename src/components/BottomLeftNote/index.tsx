import { motion } from 'framer-motion'
const BottomLeftNote = () => {
  return (
    <div className={'flex flex-col gap-2'}>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className={'w-1 h-1 rounded-full bg-primary'} />
      <motion.p className='text-[12px]' initial={{y:60, opacity:0}} animate={{y:0, opacity:1, transition:{
        ease:"linear"
      }}}>Your smile, our passion</motion.p>
    </div>
  )
}

export default BottomLeftNote