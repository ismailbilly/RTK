
import { useSelector, useDispatch } from 'react-redux'
import {getPosts} from './features/counter/asyncSlice'
import { empty_posts } from './features/counter/asyncSlice'

 
// console.log(dispatch(getPosts())) 
  const AsyncComp = () => {
  const dispatch = useDispatch()
  const posts =useSelector((state)=>state.post.posts)
  console.log(posts);
  
  return (
    <div>
      <button className="btn" onClick={()=>dispatch(getPosts())}>Fetch Posts</button>
      { posts.map((post, id)=>{
        return<div key={id}>{post.title}</div>
       })}
       <button className="btn" onClick={()=>dispatch(empty_posts())}>Empty Posts</button>
    </div>
  )
}

export default AsyncComp