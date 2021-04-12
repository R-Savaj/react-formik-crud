import React from "react";
import PantoneList from "./components/list-pantone/list-pantone";
import PantoneForm from "./components/pantone-form/pantone-form";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
   <Router>
     <div>
       <switch>
       <Route exact path="/" component={PantoneList}/>
       <Route path="/add-user" component={PantoneForm}/>
       <Route path="/edit-user/:id" component={PantoneForm}/>
      </switch>
     </div>
   </Router>
  );
}

export default App;
