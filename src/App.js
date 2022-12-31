import { BrowserRouter as Router, Routes, Route , Switch} from 'react-router-dom';
 import './App.css'
import Home from './Component/Home/Home';
import Profile from './Component/Profile/Profile';
import Sidebar from './Component/Sidebar/Sidebar';
import ContactUS from './Component/ContactUS/ContactUS';
function App() {
  return (
  
      
       <Router>
     
      <Sidebar/>
     <Switch>
         <Route path='/home' exact component={Home} />
         <Route path='/profile' exact component={Profile} />
         <Route path='/contactUS' exact component={ContactUS} />
        
       </Switch>
     </Router>
  );
}


 export default App;
