"use client";

import styles from "@/ui/login/loginForm/loginForm.module.css"


const LoginForm = () => {

  return (
    <form action="{}" className={styles.form} >
      <h1>Login</h1>
      <label >Username</label>
      <input type="text" placeholder="username" name="username" />

      <label>Password</label>
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
{/*        
       <div>
      <label>
      <input type="checkbox" name="remember"> Remember me </input>
    </label>
  </div>

  <div >
    <button >Cancel</button>
    <span >Forgot <a >password?</a></span>
  </div> */}
    </form>
  );
};

export default LoginForm;