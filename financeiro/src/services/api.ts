import axios from "axios"



export const api = axios.create({
  
  baseURL: `http://localhost:4000` 
})



export const apiExternal = axios.create({
  baseURL:` https://cors-anywhere.herokuapp.com/https://v2.api.forex/infos`
})