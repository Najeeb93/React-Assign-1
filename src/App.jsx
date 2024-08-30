import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container.jsx';
import Simple from './assets/Components/Simple.jsx';
function App() {

  const [count, setCount] = useState(0);
  function updateCount(){
    setCount(count + 1);
  }

  return (
    <>
    <h1>button clicked {count} times</h1>
    <button className='btn' onClick={updateCount}> Click </button>

    </>

  )
}

export default App
