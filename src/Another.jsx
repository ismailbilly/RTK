import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAll, pushInside} from './features/counter/anotherSlice'
const Another = () => {
    
    const {data, isLoading} = useSelector((state) => state.anotherOne)
    console.log(isLoading)
    //console.log(useSelector((state)=> console.log(state.anotherOne.data)))
    const dispatch = useDispatch()
  return (
   
    <div>
       {data.map((item)=>{
        return <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
       })}
       <button onClick={() =>dispatch(clearAll())} >Clear All</button>
       <button onClick={() =>dispatch(pushInside())}>loading</button>
    </div>
  )
}

export default Another