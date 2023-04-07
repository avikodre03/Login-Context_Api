import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

import { useContext } from 'react';

import { mainContext } from './ContextApi/Context';


function App() {
 const { isloggedIn } = useContext(mainContext);

  return (
    
    <div className="App">
   
   
   {isloggedIn ? (
        <div className='mainContainer'>
          <NavBar />
          <Home />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
