import React,{FC} from 'react';
import { Person } from './Components/Person';
import 'bootstrap/dist/css/bootstrap.min.css';

const App : FC=() => {
  return (
    <div className="App">
      <Person name="walid" age={30} email="walid@gmail.com"/>
    </div>
  );
}

export default App;
