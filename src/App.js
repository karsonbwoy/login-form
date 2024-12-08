
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Home from './Components/Home/Home';
import Success from './Components/Success/Success';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
