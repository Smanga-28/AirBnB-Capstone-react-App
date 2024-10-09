import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Inspiration from './components/Inspiration'
import Experiences from './components/Experiences'
import FutureGetaways from './components/FutureGateways'
import Footer from './components/Footer'

import ListingPage from './pages/ListingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Homepage/>
    <Inspiration/>
    <Experiences/>
    <FutureGetaways/>
    <Footer/>
   
    </div>
  )
}

export default App
