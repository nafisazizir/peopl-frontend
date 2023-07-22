import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Auth/Intro/Intro";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";
import CreateUsername from "./pages/Auth/Register/CreateUsername";
import Login from "./pages/Auth/Login/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import EmailSent from "./pages/Auth/ForgotPassword/EmailSent";
import ResetPassword from "./pages/Auth/ForgotPassword/ResetPassword";
import Search from "./pages/Search/Search";
import CreatePost from "./pages/Create/CreatePost";
import DetailPost from "./pages/DetailPost/DetailPost";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/create" element={<CreateUsername />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot" element={<ForgotPassword />} />
        <Route path="/login/forgot/sent" element={<EmailSent />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post" element={<DetailPost />} />

      </Routes>
    </>
  );
}

export default App;
