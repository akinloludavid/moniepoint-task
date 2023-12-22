import { motion } from "framer-motion"

const AnimateText = ({children}:{children:string}) => {
  return (
    <div className="flex items-center">
      {children.split('').map((letter, idx)=> (
        <motion.h3 key={idx} className="" initial={{y:25,opacity:0}} whileInView={{y:0, opacity:1, transition:{
          delay:idx*0.02,
          ease:'easeIn',
          duration:0.5
          
        }}}>{letter}</motion.h3>
      ))}
    </div>
  )
}

export default AnimateText