import React, { useEffect, useState } from "react";

import Logo from "../../img/LOGO.png";
import axios from "axios";
import { FaUser,FaShoppingCart,FaTrashAlt} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {  deleteCartItem, setCartItem} from "../../store/ducks/cartItem/actions";
import {  CarteItemState,  EachCartItemType} from "../../store/ducks/cartItem/types";
import "./carrinho.scss";
import { Link } from "react-router-dom";


const Carrinho = () => {
  const [categories, setCategories] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== null) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .get("http://localhost:4000/categories", { headers: headers })
        .then((resposta) => setCategories(resposta.data));
    }
  }, []);


  const notification = useSelector(
    (state: CarteItemState) => state.cartItem.cartItens
  );
  let notificationSum = 0;

  notification.map((i: EachCartItemType) => {
    notificationSum = notificationSum + i.amount;
  });

  const [reRender, setReRender] = useState<Boolean>(true);
  const budget: number[] = [];
  let result: number = 0;
  const cartItens = useSelector(
    (state: CarteItemState) => state.cartItem.cartItens
  );
  const newItemArray = cartItens;

  const dispatch = useDispatch();

  const addMount = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex(
      (element: EachCartItemType) => element.id === obj.id
    );

    newItemArray[indexOfItemFound].amount = obj.amount + 1;
    dispatch(setCartItem(newItemArray));
    setReRender(!reRender);
  };

  const decreaseMount = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex(
      (element: EachCartItemType) => element.id === obj.id
    );

    if (newItemArray[indexOfItemFound].amount > 0) {
      newItemArray[indexOfItemFound].amount = obj.amount - 1;
      dispatch(setCartItem(newItemArray));
      calculator(obj);
      setReRender(!reRender);
    }
  };

  const deleteItem = (obj: EachCartItemType) => {
    const indexOfItemFound = newItemArray.findIndex(
      (element: EachCartItemType) => element.id === obj.id
    );
    newItemArray.splice(indexOfItemFound, 1);
    dispatch(setCartItem(newItemArray));
    calculator(obj);
    setReRender(!reRender);
  };

  const calculator = (obj: EachCartItemType) => {
    const price = Number(obj.price.substring(3).replace(",", ".")) * obj.amount;
    budgetControll(obj);
    return price;
  };

  const budgetControll = (obj: EachCartItemType) => {
    const totalItemPrice =
      Number(obj.price.substring(3).replace(",", ".")) * obj.amount;
    budget.push(totalItemPrice);
    const reducerArray = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
    result = budget.reduce(reducerArray);
  };

  const finish = () => {
    alert("Seu pedido foi realizado.");
    dispatch(deleteCartItem());
  };

  return (
    <>
      <div className="top">
        <p>
          A Maior <span>Loja Especializada de Cervejas</span> do Brasil.
        </p>
      </div>

      <header className="header">
        <nav className="navbar">
          <div className="nav-menu">
            <div>
              <img src={Logo} width="280px"></img>
            </div>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Busque pela marca,estilo ou sabor "
            />
          </div>
          <span className=" emporiodacerveja">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.954"
              height="23.954"
              viewBox="0 0 23.954 23.954"
            >
              <g
                id="Grupo_1027"
                data-name="Grupo 1027"
                transform="translate(-772.003 -14.089)"
              >
                <path
                  id="Caminho_387"
                  data-name="Caminho 387"
                  d="M291.357,332.048l1.872-1.872,2.335,2.335-1.706,1.706Z"
                  transform="translate(486.464 -302.223)"
                  fill="#2b2e33"
                ></path>

                <g
                  id="Grupo_292"
                  data-name="Grupo 292"
                  transform="translate(772.003 14.089)"
                >
                  <g id="Grupo_291" data-name="Grupo 291">
                    <g id="Grupo_290" data-name="Grupo 290">
                      <path
                        id="Caminho_164"
                        data-name="Caminho 164"
                        d="M294.074,326.989a8.974,8.974,0,0,1-10.8,1.446l-6.519,6.518a2.243,2.243,0,0,1-1.6.657h0a2.4,2.4,0,0,1-1.7-.712,2.34,2.34,0,0,1-.055-3.3l6.519-6.519a8.981,8.981,0,1,1,14.153,1.911Zm-14.125,2.658-1.24-1.24-4.248,4.248a.843.843,0,0,0,.055,1.185.861.861,0,0,0,1.184.055Zm2.069-2.07c-.224-.184-.442-.379-.651-.588s-.4-.427-.588-.651l-1.011,1.011,1.24,1.24Zm11-12.236a7.488,7.488,0,1,0,0,10.589A7.468,7.468,0,0,0,293.016,315.341Z"
                        transform="translate(-272.747 -311.656)"
                        fill="#2b2e33"
                      ></path>
                    </g>
                  </g>
                </g>
                <g
                  id="Grupo_296"
                  data-name="Grupo 296"
                  transform="translate(780.985 17.083)"
                >
                  <g id="Grupo_295" data-name="Grupo 295">
                    <g id="Grupo_294" data-name="Grupo 294">
                      <path
                        id="Caminho_165"
                        data-name="Caminho 165"
                        d="M288.724,321.644a5.988,5.988,0,1,1-1.754-4.236A5.949,5.949,0,0,1,288.724,321.644Zm-1.5,0a4.492,4.492,0,1,0-1.315,3.176A4.466,4.466,0,0,0,287.227,321.644Z"
                        transform="translate(-276.747 -315.656)"
                        fill="#2b2e33"
                      ></path>
                    </g>
                  </g>
                </g>
                <g
                  id="Grupo_300"
                  data-name="Grupo 300"
                  transform="translate(786.228 20.074)"
                >
                  <g id="Grupo_299" data-name="Grupo 299">
                    <g id="Grupo_298" data-name="Grupo 298">
                      <path
                        id="Caminho_166"
                        data-name="Caminho 166"
                        d="M281.491,319.651a.749.749,0,1,0,0,1.5,1.5,1.5,0,0,1,1.5,1.5.749.749,0,0,0,1.5,0A3,3,0,0,0,281.491,319.651Z"
                        transform="translate(-280.742 -319.651)"
                        fill="#2b2e33"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>

          <div className="icons-header">
            <FaUser className="icons" />
            <FaShoppingCart className="icons" />{" "}
       
            <span className="cart-count"> {notificationSum} </span>
          </div>
        </nav>

        <div className="categories">
          {categories !== undefined &&
            categories.map((item: any) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <p>
                      <a href="">{item}</a>
                    </p>
                  </li>
                </ul>
              </div>
            ))}

          <div className="Fale">
            <p>
              <a href=""> Fale Conosco </a>
            </p>
          </div>
        </div>
      </header>

      <div>
        {cartItens.length === 0 ? (
          <h1 className="h1">Seu carrinho está vazio :(</h1>
        ) : (
          <h1>Carrinho</h1>
        )}

<section className="Beers">
        {cartItens.map((i: EachCartItemType) => (
          <ul className="  beers-container" key={i.id}>
            <li className="li">
              <img
                className="img"
                src={i.image}
                width="auto"
                height="160px"
                alt={i.title}
              />
              <p className="description">{i.description}</p>
              <p className="title">{i.title}</p>
              <p className="price"> Preço : {i.price}</p>
             
           
            
              <p className="total">
              Total do item: R$ {calculator(i).toFixed(2)}
            </p>
           
              <div className="add">
              <button onClick={() => addMount(i)}>+</button>
               <button className="contagem"> <p>{i.amount}</p></button>
              <button onClick={() => decreaseMount(i)}>-</button>

              <FaTrashAlt className="lixo" onClick={() => deleteItem(i)} />
           
            </div>
            <button className="finish" onClick={() => finish()}>Comprar </button>
            <Link to="/home"> <button>Voltar as compras</button></Link>

      
         
           
            </li>
          </ul>
          
        ))}
        
      </section>





      
      </div>
    </>
  );
};

export default Carrinho;
