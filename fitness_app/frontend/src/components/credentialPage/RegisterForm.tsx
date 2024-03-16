import React from "react";
import { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    console.log("first name:", firstName);
    console.log("lastName:", lastName);

    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name: </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last name: </label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" name="submit" value="Register" />
    </form>
  );
}

export default RegisterForm;
