import { MdFavoriteBorder } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
const ExploreCard = ({desc,bgImage}:{desc:string, bgImage:string}) => {
  return (
    <motion.div initial={{
      rotateY: 90,
      rotateX: 30,
      opacity: 0,
  }}
  animate={{
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
          duration: 0.5,
      },
  }} style={{
      backgroundImage:`url('${bgImage}')`
    }} className={`p-4 rounded-[16px] flex h-[280px] w-[240px] flex-col border-3 bg-cover `}>
      <div className='flex justify-end gap-4'>
        <div className='bg-white w-8 h-8 rounded-full flex items-center justify-center'>
          <MdFavoriteBorder className='text-grey' />
        </div>
        <div className='bg-white w-8 h-8 rounded-full flex items-center justify-center'>
          <HiArrowUpRight className='text-grey' />
        </div>
      </div>
      <div className='mt-auto w-fit p-2 px-3 border-white border-[1px] rounded-full flex items-center justify-center'>
        <p className="text-white text-[14px]">{desc}</p>
      </div>

    </motion.div>
  )
}

export default ExploreCard