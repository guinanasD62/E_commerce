"use client";

const LoginForm = () => {

  return (
    <form >
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
       
    </form>
  );
};

export default LoginForm;