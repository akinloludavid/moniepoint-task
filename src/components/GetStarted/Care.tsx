import { motion } from "framer-motion";
import { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const Care = () => {
  const [secondAnimation, setSecondAnimation] = useState(false)
  return (
    <div className='flex items-center gap-[-12px]'>
      <motion.img initial={{
        scale:0,
      }} animate={{scale:1, transition:{
        duration:0.5
      }}} onAnimationComplete={()=> {
        setSecondAnimation(true)
      }} src='/images/woman.jpg' className='w-15 h-15 rounded-full relative z-3' />
      {secondAnimation &&<motion.div initial={{x:-20}} animate={{x:0, transition:{
        duration:0.5
      }}} className='ml-[-12px] w-15 h-15 flex items-center justify-center bg-light rounded-full'>
        <FaCanadianMapleLeaf className='text-primary text-[32px]'  />
      </motion.div>}
    </div>
  )
}

export default Care