import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Auth/Intro/Intro";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import CreateUsername from "./pages/Auth/Register/CreateUsername";
import Login from "./pages/Auth/Login/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import EmailSent from "./pages/Auth/ForgotPassword/EmailSent";
import ResetPassword from "./pages/Auth/ForgotPassword/ResetPassword";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/create" element={<CreateUsername/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/forgot" element={<ForgotPassword />} />
          <Route path="/login/forgot/sent" element={<EmailSent />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} /> 
        </Routes>
    </>
  );
}

export default App;
