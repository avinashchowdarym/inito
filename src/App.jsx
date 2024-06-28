import './App.css'
import ActualData from './components/ActualData'
import ChartCon from './components/ChartCon'
import Footer from './components/Footer'
import ImagesmallView from './components/ImagessmallView'
import InitoSteps from './components/InitoSteps'
import MainHero from './components/MainHero'
import PressSection from './components/PressSection'
import Promotion from './components/Promotion'
import QuestionAns from './components/QuestionsAns'
import Review from './components/Reviews'
import SmartWay from './components/SmartWay'
import MakesDifferent from './components/makesDifferent'
import Navbar from './components/navbar'


function App() {

  return (
    <>
      <Navbar/>
      <MainHero/>
      <PressSection/>
      <Promotion/>
      <MakesDifferent/>
      <ImagesmallView/>
      <ActualData/>
      <ChartCon />
      <SmartWay/>
      <InitoSteps/>
      <Review/>
      <QuestionAns/>
      <Footer/>
    </>
  )
}

export default App
