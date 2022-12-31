
import React from "react";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import ContactUS from "../ContactUS/ContactUS";
import { BrowserRouter as Router ,Switch, Route, BrowserRouter} from 'react-router-dom';
   const All = () => {
 return(
 <>
<BrowserRouter>
       <Router>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
         <Route path='/contactUS' exact component={ContactUS} />
       </Switch>
      </Router> 
      </BrowserRouter>
  </>
 )
}
 export default All;
