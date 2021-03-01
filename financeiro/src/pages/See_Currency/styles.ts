import styled from "styled-components";


export const Container = styled.div`
  background-color: #0b0b0b;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  h1 {
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #0e0e0e;

    width: 100%;
    height: 10%;
  }

  h3 {
    padding-top: 20px;
    padding-bottom: 20px;
   color: #ec00c8;
  }
div.div{
    overflow-x: auto;
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: row;

    padding-bottom:20px;
}
  ul {
     


    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  
    margin: 10px;
    border: 1px solid #ec00c8;
  }
  li {

 
    list-style: none;
    width:300px;
    padding:5px
  }

  a {
    color: #ec00c8;
    text-decoration: none;
  }

`;

