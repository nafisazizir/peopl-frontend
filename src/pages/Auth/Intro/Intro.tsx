import "./IntroStyle.css";
import { useNavigate } from "react-router-dom";
import ButtonAuthGoogle from "../../../components/Button/AuthButton/ButtonAuthGoogle";
import ButtonAuth from "../../../components/Button/AuthButton/ButtonAuth";

type Props = {};

export default function Intro({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo-app">Peopl.</div>
      <div className="auth-page">
        <div className="intro-container ">
          <div className="intro-header">
            <h1>Welcome to Peopl.</h1>
            <div className="body-p5 text-center">
              Connecting Minds, Empowering Voices: Your Community Hub!
            </div>
          </div>
          <div className="intro-option">
            <h3>Register</h3>
            <ButtonAuthGoogle onClick={() => {
                navigate("/xxxx");
              }}/>
            <ButtonAuth onClick={() => {
                navigate("/register");
              }}/>
    
            <div className="login-frame">
              <div className="body-p6">Already have an account?</div>
              <a onClick={() => {
                navigate("/login");
              }}><div className="body-p6 login-text">Log In</div></a>
            </div>
          </div>
          <div className="intro-footer">
            <div className="body-p8">
              By continuing, you acknowledge that you have read, understood, and
              agree to Peopl’s Terms & Conditions and Privacy Policy.
            </div>
            <div className="body-p9">© 2023 Peopl.</div>
          </div>
        </div>
      </div>
    </>
  );
}
