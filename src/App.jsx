
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import StateCouter from "./StateCouter";
import Counter from "./Counter";
import Home from "./Home";
import Another from "./Another";
import AsyncComp from "./AsyncComp";


function App() {
  

  return (
   <Router>
    <div>
    <Routes>
          <Route path="/async" element={ <AsyncComp />}></Route>
          <Route path="/another" element={ <Another />}></Route>
          <Route path="/state" element = {<StateCouter />}></Route>
          <Route path="/rtk" element={ <Counter />}></Route>
          <Route path="/" element={ <Home />}></Route>
        </Routes>
    </div>
   </Router> 
  )
}

export default App
