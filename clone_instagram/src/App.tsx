import React from "react";

import "./App.css";

import Form from "./Components/Form";
import User from "./Components/User";
import Stories2 from "./Components/Stories";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import { Provider } from "react-redux";
import { store } from "./store/";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="home">
        <div className="post-container">
          <Form />
          <Posts />
        </div>
        <div>
          <User />
          <Stories2 />
        </div>
      </div>
    </Provider>
  );
}

export default App;
