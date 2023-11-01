import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Component-Set/Button/Button";
import { Input } from "./Component-Set/Input/Input";
import { Typography } from "./Component-Set/Typography/Typography";

function App() {


  return (
    <div className="App">
      <Button > HELLO </Button>
      <Input placholder="Email... "  />
      <Typography fontSize={30}>Mohamad Amin keimasi</Typography>
    </div>
  );
}

export default App;
