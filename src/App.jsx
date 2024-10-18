import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
import AuthLayout from './component/layout/AuthLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthLayout/>
    </>
  )
}

export default App
