import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1) 
  const decrement = () => setCount(count - 1)

  const [isVisible, setIsVisible] = useState(true)

  const changeState = () => setIsVisible(!isVisible)
  
  useEffect(() => {
    const colors =  [
      "#845EC2", "#D65DB1", "#D65DB2", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871",
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ];
   
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`

  }, [])

  return (

    <div className="App">
     <h1>{count}</h1>
     <button onClick={increment}>Incrementar</button>
     <button onClick={decrement}>Decreser</button>
     <hr />
     <h1>Input Contraseña</h1>
     <input type={isVisible ? "text" : "password"} />
     <button onClick={changeState}>Mostrar</button>
    </div>

  )
}

export default App
