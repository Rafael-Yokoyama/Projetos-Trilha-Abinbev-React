import styled from "styled-components";

export const Container = styled.div`
  background-color: #0b0b0b;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  position: absolute;
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
    padding-top: 40px;
  }

  ul {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding: 10px;
  }
  li {
    list-style: none;
    margin: 20px;
  }

  a {
    color: #ec00c8;
    text-decoration: none;
  }
  a:hover {
    font-size: 20px;
    width: 100%;
    height: 100%;
    padding: 10px;
    color: white;
    background: #ec00c8;
  }
`;
