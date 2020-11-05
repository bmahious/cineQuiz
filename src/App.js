import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Welcom from './components/Welcom/Welcom';
import Login from './components/Login/Login';
import SigUp from './components/SignUP/SigUp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import {IconContext} from 'react-icons';


function App() {
  return (
    <Router >
      <IconContext.Provider value={{style:{verticalAlign:'middle'}}}>
        <Header />
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/welcom' component={Welcom} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SigUp} />
            <Route path='/forgetpassword' component={ForgetPassword} />
            <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </IconContext.Provider>
    </Router>
  );
}

export default App;
