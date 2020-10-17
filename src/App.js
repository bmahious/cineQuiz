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

function App() {
  return (
    <Router >
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
    </Router>
  );
}

export default App;
