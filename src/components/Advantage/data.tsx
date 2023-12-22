import {IoSettingsOutline} from 'react-icons/io5'
import { MdOutlineTouchApp } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";
import { SiMoleculer } from "react-icons/si";

export const advantages = [
  {
    title:'Personalized Care',
    icon: <LuScanFace/>,
    imgUrl:`/images/advantage4.jpg`,
    id:1,
  },
  {
    title:'Modern Solutions',
    icon: <SiMoleculer/>,
    imgUrl:`/images/advantage3.jpg`,
    id:2,
    
  },
  {
    title:'Convinience',
    icon : <MdOutlineTouchApp />,
    imgUrl:`/images/advantage2.jpg`,
    id:3,
    
  },
  {
    title:"Advanced Technology",
    icon:<IoSettingsOutline/>,
    imgUrl:`/images/advantage1.jpg`,
    id:4
  },
]