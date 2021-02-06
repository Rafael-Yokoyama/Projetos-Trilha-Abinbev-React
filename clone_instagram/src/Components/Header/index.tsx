
import React,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { getUsuario } from '../../store/ducks/User/actions'
import Logo from "../../images/logo-instagram.png";
import { FiUser } from "react-icons/fi";



const Header =() => {

 

  const dispatch = useDispatch()

  const {name} = useSelector((state: any) => state.user)
  useEffect(() => {
    axios.get("http://localhost:4000/user")
    .then(response =>dispatch(getUsuario(response.data)))
  },[])

    return(
      <div className="header">
      <header>
        <img src={Logo} alt="Logo Instagram" />
        <div className="top-info"> 
          
          <span>   <FiUser /></span>
          <span>  {name}</span>
          
        </div>
      </header>
    </div>
      

    );

    

}


export default Header;