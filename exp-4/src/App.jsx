import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalStateCounter from './components/CounterLocalState'
import CounterContextProvider from './components/context/CounterGlobalContextAPI'
import CounterContextParent from './components/CounterGlobalContextParent' 
import CounterReduxParent from './components/CounterGlobalReduxParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LocalStateCounter cno="C1" />
       <LocalStateCounter cno="C2" />
      <CounterContextProvider>
        <CounterContextParent cno="C1" />
        <CounterContextParent cno="C2" />
      </CounterContextProvider>
      <CounterReduxParent cno="R1" />
      <CounterReduxParent cno="R2" />
    </>
  )
}

export default App
