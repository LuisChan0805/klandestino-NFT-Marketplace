import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import '/assets/main/sass/app.scss';
import '/assets/main/sass/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {addToCart, addToCartHelper} from "./actions/shoppingCart";
// import {imageWatch} from "./components/image";
// import axios from "./api/axiosInstance";
// import {getUserAPI, getUserCartAPI} from "./api/apiURLs";
// import {loginUser, logoutUser} from "./actions/authentication";
// import {ACCESS_TOKEN} from "./api/strings";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const store = configureStore();



function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
           <MuiThemeProvider>
                  <AppRouter />
           </MuiThemeProvider>
      </Provider>
    </React.Fragment>

  );
}

export default App;
