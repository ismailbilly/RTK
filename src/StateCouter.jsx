import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const StateCouter = () => {
    const [counter, setCounter] = useState(0)
   console.log(useSelector((state)=> console.log(state)))
  return (
    <div className="App">
      
      <h1>State Counter</h1>
      <div className="card">
        <button onClick={() => setCounter((counter) => counter + 1)}>
          count is {counter}
        </button>
      
      </div>
      <ul>
    <li>
      <Link to="/rtk">RTK</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    </ul>
    </div>
  )
}

export default StateCouter