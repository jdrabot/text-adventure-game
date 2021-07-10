import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (signUpCreds.password < 8) {
      setErrorMsg("Your password must be at least 8 characters long.");
      return
    }

    axios
      .post('/api/users/signup', {
        email: signUpCreds.email,
        password: signUpCreds.password,
      })
      .then((response) => {
        console.log('RESPONSE', response);
        history.replace('/login');
      })
      .catch((error) => {
        console.log('ERROR', error);
        setErrorMsg(error.message)
      });
  };

  return (
    <div className="text-center">
      {errorMsg ?
        <p>{errorMsg}</p> :
        null
      }
      <form className="form-signin">
        <label htmlFor="inputEmail">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          // className="form-control"
          name="email"
          placeholder="Email address"
          block
          value={signUpCreds.email}
          onChange={handleChange}
        />
        <label htmlFor="inputPassword">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          // className="form-control"
          name="password"
          placeholder="Password"
          value={signUpCreds.password}
          onChange={handleChange}
        />
        <div>
          <button className="action-button" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
