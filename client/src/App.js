import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

import FlightDetail from "./components/FlightDetail/FlightDetail";
import SuccessPayment from "./components/SuccessPayment/SuccessPayment";

import { Footer } from "./components/Footer/footer";
import UserProfile from "./components/userProfile/UserProfile";
import UserProfileForm from "./components/userProfile/UserProfileForm";
import { About } from "./components/About/About";
//import NoMatch from "./components/404/404";
import CardDestination from "./components/TopDestinations/RutaTop";
import ChatbotBtn from './components/ChatBot/Chatbot-btn/Chatbot-btn'


function App() {
  return (
    <div>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
         
        <Route exact path="/top">
          <CardDestination />
        </Route>

        <Route exact path="/userconfig">
          <UserProfileForm />
        </Route>

        <Route exact path="/userprofile">
          <UserProfile />
        </Route>
        
        {/* <Route exact path='/chatbot'>
          < ChatbotBtn />
        </Route> */}
        
        <Route exact path='/success'>
          <SuccessPayment />
        </Route>
          
        {/* <Route  path="*">
          <NoMatch/>
        </Route> */}

        <Route exact path='/:id'>
          <FlightDetail />
        </Route>

      
      </Switch>
      < ChatbotBtn />
      <Footer/>
    </div>
  );
}

export default App;
