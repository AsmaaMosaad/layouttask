
import React from "react";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import ContactUS from "../ContactUS/ContactUS";
import { BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
   const All = () => {
 return(
 <>
       <Router>
     <Home/>
      
      <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
         <Route path='/contactUS' exact component={ContactUS} />
        
       </Switch>
      </Router> 
  </>
 )
}
 export default All;
