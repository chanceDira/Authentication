import React from "react";
import Signup from "./components/Authentication/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/Authentication/Contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../src/components/Authentication/Dashboard"
import Login from "../src/components/Authentication/Login"
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ForgotPassword from "./components/Authentication/ForgotPassword"
import './App.css';
import UpdateProfile from "./components/Authentication/UpdateProfile";

function App() {
  return (
    <div className="App">
        <Container 
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}  
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard}/>
                  <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          
          </div>
         
        </Container>
       
    </div>
  );
}

export default App;
