import Advantage from '../../components/Advantage'
import Explore from '../../components/Explore'
import GetStarted from '../../components/GetStarted'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import { useAppContext } from '../../context/AppContext'

const Home = () => {
  const {beginNavAnimation, endNavAnimation, startGetStartedAnimation} = useAppContext()
    return (
        <>
          {beginNavAnimation &&  <Navbar />}
            <HeroSection />
         {endNavAnimation &&  <Advantage />}
         {startGetStartedAnimation && <GetStarted />}
         {endNavAnimation && <Explore /> }
        </>
    )
}

export default Home
