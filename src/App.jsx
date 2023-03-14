import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'C:/Users/victo/react-wk1/node_modules/antd/dist/reset.css'
import Home from './pages/Home'


function App() {

  const [count, setCount] = useState(0)

    return(
      <div>
        <Home/>
      </div>
      
    );
  
}

export default App
