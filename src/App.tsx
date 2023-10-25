import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Component-Set/Button/Button";
import { Input } from "./Component-Set/Input/Input";

function App() {


  return (
    <div className="App">
      <Button > HELLO </Button>
      <Input placholder="Email... "  />
    </div>
  );
}

export default App;
