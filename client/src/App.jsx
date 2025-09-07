import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Front from "./Front.jsx";


 function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Front />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
