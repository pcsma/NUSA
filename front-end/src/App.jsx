
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Home from './components/Home';
import Publication from './components/Publication';
import People from './components/People';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Events from './components/Events';
import Tools from './components/Tools';
import Data from './components/Data';
import FAQ from './components/FAQ';
import Policy from './components/Policy';

function App() {  
  
  return (
  <>
    <NavBar />
    <Hero />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/publication' element={<Publication />} />
      <Route path='/people' element={<People />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/events' element={<Events/>} />
      <Route path='/tools' element={<Tools />} />
      <Route path='/data' element={<Data />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path='/policy' element={<Policy />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App;