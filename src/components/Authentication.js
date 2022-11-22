import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import {Form, Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css'


function Authentication() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="auth">
      <div className="py-5 text-center">
        <h1>Log In</h1>
        <h4>It will allow you to send documents and receive feedback</h4>
          <div class="user-info">
          <h4> User Logged In: </h4>
            {user?.email} <br/>
            <button 
              class="myButton"
              onClick={logout}> SIGN OUT </button>
          </div>
      </div>
      <InputGroup>
        <Form.Control
          className="mx-5"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <Form.Control
          className= "mx-5"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
      </InputGroup>
      

      <button 
      class="myButton"
      onClick={login}>LOG IN</button>

      <InputGroup className="my-4">
        <Form.Control
        className= "mx-5"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Form.Control
        className= "mx-5"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          
        />
      </InputGroup>

      <button 
      class="myButton"
      onClick={register}> CREATE USER</button>
    </div>
  );
}
export default Authentication