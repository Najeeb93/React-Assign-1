import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container.jsx';
import Simple from './assets/Components/Simple.jsx';
import StatusCard from './assets/Components/StatusCard.jsx';
function App() {

  const [count, setCount] = useState(0);

  

  return (
    
  <>
  <StatusCard/>
  </>
  )
}

export default App;
