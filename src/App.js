import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom' ;
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';



function App() {
  return (
   <Router>
     <div className="App">
    <Navbar/>

    <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/users/add" component={AddUser}/>
      <Route exact path="/users/edit/:id" component={EditUser}/>
      <Route exact path="/users/:id" component={User}/>

    </Switch>
    
    

    </div>
   </Router> 
    
  );
}

export default App;
