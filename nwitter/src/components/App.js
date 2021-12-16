import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "fbase";
function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <AppRouter isLoggedIn={isLoggedIn}></AppRouter>;
}

export default App;
