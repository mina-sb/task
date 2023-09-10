import './App.css'
import MainHeader from './components/Navigation/MainHeader'
import AboveTheFold from './components/AboveTheFold/AboveTheFold'
import Features from './components/Features/Features'
import DesignToCode from './components/designToCode/designToCode'
import Testimonial from './components/Testimonial/Testimonial'
import Blog from './components/Blog/Blog'
import FireUp from './components/FireUp/FireUp'

function App() {

  return (
    <>
      <MainHeader />
      <AboveTheFold />
      <Features />
      <DesignToCode />
      <Testimonial />
      <Blog />
      <FireUp />
    </>
  )
}

export default App
