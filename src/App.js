
import './App.css';

import AnimatedCursor from "react-animated-cursor"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Home/Blog';
import About from './pages/Home/About';


function App() {
  
  return (
    <div>
       <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
     
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      
     

      </Routes>
    
   
    </div>
  );
}

export default App;
