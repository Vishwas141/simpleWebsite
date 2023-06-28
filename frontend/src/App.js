import React, { useEffect, useState } from "react";

import { Route,Routes } from "react-router-dom";
import Card from "../src/components/Card"


import Home from "../src/components/Home"




function App() 
{
 
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/card/:id" element={<Card/>}/>

      </Routes>
      
    </div>
  )
}

export default App;
