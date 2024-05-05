import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Not Facebook</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Not Facebook.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Password Again" className="registerInput" />
            <button className="registerButton">Sign Up</button>
            <button className="registerLoginButton">Log into Acount</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
