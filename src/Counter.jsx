import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'

export default function Counter (){
  const count = useSelector((state) => state.counter.value)
  
  const dispatch = useDispatch()

  return (
    <div>
        <h1>RTK Counter</h1>
      <div className='card'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By 5
        </button>
      </div>
      <div className='count'>{count}</div>
      <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/state">State</Link>
    </li>
    </ul>
    </div>
  )
}

