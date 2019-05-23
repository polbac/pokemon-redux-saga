import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Header } from "./components/header/Header";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <Header />
        <List />
        <Detail />
      </main>
    </Provider>
  );
}

export default App;
