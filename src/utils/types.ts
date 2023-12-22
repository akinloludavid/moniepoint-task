import * as React from "react";

export interface IChildren {
  children: React.ReactNode
}

export interface IAdvantageCard {
  title:string 
  icon:any 
  imgUrl:string
}

export interface InitialValues {
  isHeroAnimationEnd:boolean,
  setHeroAnimationEnd:(e:boolean)=> void,
  beginNavAnimation:boolean ,
  setBeginNavAnimation:(e:boolean)=> void
  endNavAnimation:boolean 
  setEndNavAnimation:(e:boolean)=> void,
  startGetStartedAnimation:boolean, 
  setGetStartedAnimation:(_e:boolean) => void,
  endGetStartedAnimation:boolean, setEndGetStartedAnimation:(_e:boolean) =>void
}

