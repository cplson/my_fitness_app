import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

function CredentialCard() {
  const [isLoginState, setFormState] = useState(true);

  const toggleFormState = () => {
    setFormState(!isLoginState);
  };
  return (
    <div className="px-8 py-4 rounded-sm">
      {isLoginState ? <LoginForm /> : <RegisterForm />}
      {isLoginState ? (
        <div>
          <p>Don't have an account yet?</p>
          <button onClick={toggleFormState}>Register Here</button>
        </div>
      ) : (
        <div>
          <p>Already have an account?</p>
          <button onClick={toggleFormState}>Login</button>
        </div>
      )}
    </div>
  );
}

export default CredentialCard;
