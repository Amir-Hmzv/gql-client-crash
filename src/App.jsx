import React from "react";
import CharectersList from "./pages/CharactersList";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
import Mutations from "./pages/Mutations";
const App = () => {
  return <div className="App">
   <Routes>
    <Route path="/" element={<CharectersList/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/mut" element={<Mutations/>}/>
    <Route path="/:id" element={<Character/>}/>

   </Routes>
  </div>
};

export default App;
