
import './App.css';


import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  
  return (
    <div>
       <div className="cursor"></div>
      <Routes>
      <Route path='' element={<Home></Home>}></Route>

      </Routes>
     import './Cursor.js'
   
    </div>
  );
}

export default App;
