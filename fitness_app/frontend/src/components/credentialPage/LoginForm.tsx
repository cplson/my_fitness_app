import React from "react";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);

    setUsername("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" name="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
