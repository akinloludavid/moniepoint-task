import { useContext } from 'react'
import { createContext, useState } from 'react'
import { IChildren, InitialValues } from '../utils/types'



export const initialValues: InitialValues = {
  isHeroAnimationEnd:false,
  setHeroAnimationEnd:(_e:boolean)=> {},
  beginNavAnimation:false, 
  setBeginNavAnimation:(_e:boolean)=> {},
  endNavAnimation:false, 
  setEndNavAnimation:(_e:boolean) => {},
  startGetStartedAnimation:false, 
  setGetStartedAnimation:(_e:boolean) => {},
  endGetStartedAnimation:false, 
  setEndGetStartedAnimation:(_e:boolean) => {}
}

const AppContext = createContext<InitialValues>(initialValues) 

export const useAppContext = ()=> useContext(AppContext)
const AppContextProvider = ({children}:IChildren) => {
  const [isHeroAnimationEnd, setHeroAnimationEnd] = useState(false)
  const [beginNavAnimation, setBeginNavAnimation] = useState(false)
  const [endNavAnimation, setEndNavAnimation] = useState(false)
  const [startGetStartedAnimation, setGetStartedAnimation] = useState(false)
  const [endGetStartedAnimation, setEndGetStartedAnimation] = useState(false)
  const values = {
    isHeroAnimationEnd, setHeroAnimationEnd, setBeginNavAnimation, beginNavAnimation,
    endNavAnimation, setEndNavAnimation,
    startGetStartedAnimation, setGetStartedAnimation,
    endGetStartedAnimation, setEndGetStartedAnimation
  }
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider