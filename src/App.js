import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer tittle="Diablo II Resurrected"/>
      
    </div>
  );
}

export default App;
