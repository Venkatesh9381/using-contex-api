import React, { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(email, password); // Call login function with email and password
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
