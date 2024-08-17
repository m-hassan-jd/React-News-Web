import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MyNewsBoard from "./components/MyNewsBoard";
// import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {

  const [category, setCategory] = useState("general")
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <MyNewsBoard category={category}/>
    </>
  );
};

export default App;
