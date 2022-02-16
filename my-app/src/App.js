import React from "react";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';

function App() {
  return (
    <div className="App">
    {/* <Router> */}
      <h1>Nav</h1>
      {/* <Switch> */}
      <Home/>
      <AddUser/>
      {/* </Switch> */}
    {/* </Router> */}
    </div>
  );
}

export default App;
