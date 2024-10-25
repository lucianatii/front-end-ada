import React from "react";

import { Header } from "./Components/Header/Header";
import "./Styles/global.css";
import { Tasks } from "./Components/Tasks/Tasks";

function App() {
  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
