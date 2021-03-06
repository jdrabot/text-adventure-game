import axios from 'axios';
import { isNil } from 'lodash';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from "./components/navbar";
// import Home from './pages/home';
import Gameplay from "./pages/gameplay";
import Login from './pages/login';
import Signup from './pages/signUp';
import Title from "./pages/title";
import Banner from "./components/banner";
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
// import Title from "./pages/title";

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (!isNil(response.data.user)) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
      }
    });
  }, [dispatch, history]);

  

  return (
    <div>
      <Navbar />
      <Banner />

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Gameplay} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/title" component={Title} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
};

export default App;
