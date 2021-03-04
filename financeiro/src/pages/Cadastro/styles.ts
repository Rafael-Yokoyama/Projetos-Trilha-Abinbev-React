/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "styled-components";

export const Button = styled.button`
  color: #5dc399;
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 1rem 0;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.7s ease-in;
`;

export const Container = styled.div`
  background-image: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/psychedelic-abstract-orbs-jonathan-welch.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const TextField = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const Terms = styled.p`
  margin-top: 0.5rem;
  margin-bottom: -1rem;
  padding: 0 1rem;
  text-align: start;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
`;

export const Sidbar = styled.form`
  min-width: 200px;
  width: 30%;
  background-color: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #ff8d8d;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
  }
  span {
    max-width: 295px;
    min-width: 290px;
    width: 80%;
    height: 15px;
    border-radius: 8px;
  }
  span.span {

    font-weight: 300;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: white;
      cursor: pointer;
    }
  }
`;
