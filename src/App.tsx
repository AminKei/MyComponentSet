import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./Component-Set/Button/Button";
import { Input } from "./Component-Set/Input/Input";
import { Typography } from "./Component-Set/Typography/Typography";
import { Card } from "./Component-Set/Card/Card";




function App() {


  return (
    <div className="App">
      <Button width={330} > HELLO </Button>
      <Input placholder="Email... "  />
      <Typography fontSize={30  }>Mohamad Amin keimasi</Typography>
      <Card >
      </Card>
    </div>
  );
}

export default App;
