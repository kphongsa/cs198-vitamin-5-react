import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import CounterPage from "./pages/CounterPage/CounterPage";
import { Routes, Route } from "react-router-dom";

// TODO: Add Routes for Home and CounterPage
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path = "/" component = {<Home/>}/>
          <Route path = "/counter" component = {<CounterPage/>}/> 
        </Routes>
    </div>
  );
}

export default App;