import { useRef } from 'react';
import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';

const Auth = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (emailRef.current.value.trim() === "" && passwordRef.current.value.trim() === ""){
      return;
    }

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
