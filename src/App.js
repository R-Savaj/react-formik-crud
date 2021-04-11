import React from "react";
import UserList from "./components/list-user/list-user";
import UserForm from "./components/user-form/user-form";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
   <Router>
     <div>
       <switch>
       <Route exact path="/" component={UserList}/>
       <Route path="/add-user" component={UserForm}/>
       <Route path="/edit-user/:id" component={UserForm}/>
      </switch>
     </div>
   </Router>
  );
}

export default App;
