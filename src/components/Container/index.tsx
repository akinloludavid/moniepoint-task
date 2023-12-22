import { motion } from "framer-motion"
import * as React from "react"
const Container = ({children} : {children : React.ReactNode}) => {

  return (
    <motion.div initial={{backgroundColor:'#FFFDF0'}} animate={{backgroundColor:'#ffffff', transition:{
      duration:2
    }}} className={'py-4 px-12 max-w-[1440px] my-0 mx-auto'}>{children}</motion.div>
  )
}

export default Container