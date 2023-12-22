import { IAdvantageCard } from "../../utils/types"
const Card = ({title,icon,imgUrl}:IAdvantageCard) => {
  return (
    <div className={'rounded-[24px] relative'}>
      <img src={imgUrl} className='rounded-[24px] h-[300px] w-[240px] object-cover' />
      <div className={'absolute bottom-[40px] w-full left-[50%] translate-x-[-50%] flex items-center justify-center'}>
        <div className={'bg-white flex items-center justify-center rounded-[24px] p-2'}>
          {icon}
        </div>
        <div className={'bg-white rounded-[24px] px-3 py-1 text-center text-[14px]'}>
        <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card