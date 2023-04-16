import {Link} from 'react-router-dom'

const Home = () => {
  let counter = 1
  function count(counter){
    return counter++
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => count()}>count {counter} </button>
    <ul>
    <li>
      <Link to="/rtk">RTK</Link>
    </li>
    <li>
      <Link to="/state">State</Link>
    </li>
    </ul>
    </div>
    
  )
}

export default Home