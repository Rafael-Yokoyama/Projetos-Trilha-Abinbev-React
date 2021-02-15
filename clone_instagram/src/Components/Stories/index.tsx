import React,{  useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch,} from 'react-redux'
import { getStories } from '../../store/ducks/Stories/actions'
import {AllStories,TodosState} from '../../store/ducks/Stories/types'
const Stories2  = () => {

const dispatch = useDispatch()

const stories = useSelector((state:TodosState) =>(state.stories.arrayStories))

  useEffect(() => {
    axios.get("http://localhost:4000/stories")
      .then(resposta => dispatch(getStories(resposta.data)))
  },[]) 

    return(
      
      <div className="stories">
        <h2>Stories</h2>
         { stories?.map((i:AllStories)=>(
           <div   className="storie" key= {i.id}>
           <div className="storie-image" >
             <img src={i.userPicture} alt="user" />
           </div>
           <div className="storie-user">
             <strong>{i.user}</strong>
             <span>{i.time}</span>
           </div>
         </div>
        ))}   
      
       </div>  
     
    )
}

export default Stories2