import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import AdminLogin from './components/AdminLogin.js';
import AlumniLogin from './components/AlumniLogin.js';
import CompanyLogin from './components/CompanyLogin.js';
import Register from './components/Register.js';
import Navold from './components/Navold.js';
import Profile from './components/Profile.js';
import AlumniNav from './components/AlumniNav.js';


function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home/>
      <Footer/>
      <Login/>
      <AdminLogin/>
      <AlumniLogin/>
      <CompanyLogin/>
      <Register/> */}
      <Header/>
      <Routes>
          <Route path="/" element={<><Navold/><Home/></>}/>
          <Route path="loginpage.html" element={<><Navold/><Login/></>}/>
          <Route path="register.html" element={<><Navold/><Register/></>}/>
          <Route path="alumnilogin.html" element={<AlumniLogin/>}/>
          <Route path="adminlogin.html" element={<AdminLogin/>}/>
          <Route path="companylogin.html" element={<CompanyLogin/>}/>
          <Route path="profile.html" element={<><Navold/><Profile/></>}/>
          <Route path="alumnihomepage.html" element={<><AlumniNav/><Home/></>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;