import logo from "./logo.svg";
import "./App.css";
import WelcomePage from "./WelcomePage";
import Profile from "./Profile";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    console.log("loginhandler is running");
    console.log("username: ", userName);
    console.log("password ", password);
    if (userName === "zalukh" && password === "qwe") {
      setIsLoggedIn(true);
    } else {
      console.error("Wrong password or username!");
    }
  }
  return (
    <div className="App">
      {isLoggedIn ? (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <WelcomePage setLogin={loginHandler} />
      )}
    </div>
  );
}

export default App;
