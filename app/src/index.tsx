import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./lib/apollo";

ReactDOM.render(
  <Provider store={configureStore({})}>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
