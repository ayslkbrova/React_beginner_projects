import React, { useState } from 'react'
import Css from './App.css'
import { FaDeleteLeft } from "react-icons/fa6";
import { BsSlash } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
function App() {
  const [input, setInput] = useState('')
  function handleButtonValue(val) {
    console.log(val);
    console.log(input + val);
    setInput(input + val)
  }
  function handleClear() {
    setInput('')
  }
  function handleDelete() {
    setInput(input.slice(0, -1))
  }
  return (
    <>
      <h1>Calculator</h1>
      <div className='container'>
        <input type='text' value={input} />
        <div className='buttons'>
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete} ><FaDeleteLeft /></button>
          <button onClick={()=> handleButtonValue('/')}><BsSlash /></button>
          <button onClick={()=> handleButtonValue('*')}><IoIosClose /></button>
          <button onClick={() => handleButtonValue('7')}>7</button>
          <button onClick={() => handleButtonValue('8')}>8</button>
          <button onClick={() => handleButtonValue('9')}>9</button>
          <button onClick={() => handleButtonValue('-')}>-</button>
          <button onClick={() => handleButtonValue('4')}>4</button>
          <button onClick={() => handleButtonValue('5')}>5</button>
          <button onClick={() => handleButtonValue('6')}>6</button>
          <button onClick={() => handleButtonValue('+')}>+</button>
          <button onClick={() => handleButtonValue('1')}>1</button>
          <button onClick={() => handleButtonValue('2')}>2</button>
          <button onClick={() => handleButtonValue('3')}>3</button>
          <button onClick={() => { setInput(eval(input)) }}>=</button>
          <button onClick={() => handleButtonValue('0')}>0</button>
          <button onClick={() => handleButtonValue('.')}>.</button>

        </div>

      </div>

    </>
  )
}

export default App;