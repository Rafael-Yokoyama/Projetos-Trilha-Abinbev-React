import axios from 'axios';
import React,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsuario } from '../../store/ducks/User/actions'


const User =() => {

  const dispatch = useDispatch()

  const { name, username, userPicture } = useSelector((state: any) => state.user)
  useEffect(() => {
    axios.get("http://localhost:4000/user")
    .then(response =>dispatch(getUsuario(response.data)))
  },[])



    return(

   
      

        <div className="user-info">
        <img
          alt="Perfil"
            src= {userPicture }
        />
        <div className="user-bio">
          <strong>{name}</strong>
          <span>{username}</span>
        </div>
      </div>

    );

    

}


export default User;