import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container.jsx';
import Simple from './assets/Components/Simple.jsx';
import StatusCard from './assets/Components/StatusCard.jsx';


function App() {
const [msg, setMsg] = useState('This is a functional component!')
  return (
    
  <>
  <h1>{msg}</h1>
  </>
  )
}

export default App;
