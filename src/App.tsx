import React,{FC, createContext} from 'react';
import { Person } from './Components/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Job } from './Types/Enums';

interface AppContextInterface {
  name :string;
  age :number;
  email: string;
}
const AppContext = createContext<AppContextInterface | null>(null)
const App : FC=() => {

  const contextValue : AppContextInterface= {
    name :"Walid",
    age :30,
    email:"walid@gmail.com"

  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person name="walid" age={30} email="walid@gmail.com" job={Job.student}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
