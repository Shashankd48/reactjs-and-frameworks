import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import User from "./routes/User";
import Visit from "./routes/Visit";
import NotFound from "./routes/NotFound";
import { AuthContext } from "./context/AuthContext";

const menu = () => {
   return (
      <div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/user">User</Link>
            </li>
            <li>
               <Link to="/visit">Visit</Link>
            </li>
         </ul>
      </div>
   );
};

function routing() {
   // const { auth, setAuth } = useState();
   return (
      <Router>
         {menu()}
         <AuthContext.Provider>
            <Switch>
               <Route exact path="/" component={App} />
               <Route path="/user" component={User} />
               <Route path="/visit" component={Visit} />
               <Route component={NotFound} />
            </Switch>
         </AuthContext.Provider>
      </Router>
   );
}

ReactDOM.render(routing, document.getElementById("root"));
