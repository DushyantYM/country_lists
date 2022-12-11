// import logo from './logo.svg';
import Signin from './Components/Signin/Signin';
import HomePage from './Components/HomePage/HomePage';
import { Routes,Route,  BrowserRouter } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
     
        <Routes>
          
          <Route exact path="/" element= {<Signin />} />
          
          <Route path="/home"element= {<HomePage />} />

        </Routes>
   
      </BrowserRouter>
    
      
      
    </div>
  );
}

export default App;
