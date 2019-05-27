import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import Detail from "./components/detail/Detail";
import { Header } from "./components/header/Header";
import List from "./components/list/List";
import { store } from "./store/store";

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
