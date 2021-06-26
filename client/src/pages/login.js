import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';

const Login = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/login', {
        email: loginCreds.email,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('login error: ');
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <h4>Login</h4>
      <form className="form-signin">
        <label htmlFor="inputEmail">Email address</label>
        <input
          type="email"
          id="inputEmail"
          // className="form-control"
          name="email"
          placeholder="Email address"
          value={loginCreds.email}
          onChange={handleChange}
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          // className="form-control"
          name="password"
          placeholder="Password"
          value={loginCreds.password}
          onChange={handleChange}
        />
        <div>
                      <button
          
          
          
          
          
          
                  className="action-button"
           
           
           
           
           
           
            type="submit"






                                                                              onClick={handleSubmit}
          
          
          
          
          
          
          >
            Login
                      </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
