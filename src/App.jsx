import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BehanceList from './components/BehanceList'
import Footer from './components/BelowFooter'
import AboveFooter from './components/AboveFooter'
import BelowFooter from './components/BelowFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header/>
        <BehanceList/>
        <AboveFooter/>
        <BelowFooter/>
      
    </>
  )
}

export default App
