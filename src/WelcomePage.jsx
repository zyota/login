import { useState } from "react";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="welcome">
      <h2>Welcome</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => setLogin(userName, password)}>Login</button>
    </div>
  );
}
