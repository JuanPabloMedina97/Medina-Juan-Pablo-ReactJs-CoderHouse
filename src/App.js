import React from "react";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar tittle="Diablo II Resurrected"/>
      <ItemListContainer />
      
      
      
    </div>
  );
}

export default App;
