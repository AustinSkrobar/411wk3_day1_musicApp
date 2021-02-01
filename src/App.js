import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  if (isLoggedIn) {
    return (
      <div>
        <NavBar />
        <Dashboard setIsOnline={setIsOnline} isOnline={isOnline} />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
