import React from "react";

import Routes from "./routes";

import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from "./theme";


function App() {
  return (
    <div className="App">
    
      <ThemeProvider theme={theme}>
    
      <GlobalStyles />
        <Provider store={store}>
          <Routes />
       
        </Provider>
        </ThemeProvider>
     
    </div>
  );
}

export default App;
