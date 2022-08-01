import { React, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/firebase/indexxx";
import { useForm } from "react-hook-form";
import { authContext } from "../Authenticaton/AuthProvider";
import VisibilityIcon from '@material-ui/icons//Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'

const Login = () => {

  // ! scrolling to top of the page everytime user come to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //!changing state for showing and hiding password
  const [showHide, setShowHide] = useState(true)

  const {
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();



  const [spinner, setspinner] = useState(true)

  //!object for Email and pass
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  // ! getting user data data from input fields
  const getData = (e) => {
    let naame = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [naame]: value });
  };


  // !object destructuring
  const { email, password } = userData;
  const history = useHistory();

  //! Login function
  const loginin = (e) => {
    setspinner(false)
    clearErrors('LOG_IN_ERROR')
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
        setspinner(true)
      })
      .catch((err) => {
        setspinner(true)
        setError("LOG_IN_ERROR", {
          message: err.message,
        });
      });
  };


  //! checking if user already loged in then redirect to home page
  const { user } = useContext(authContext)
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <form onSubmit={loginin}>
      <div className="login-page-main-container">
        <div className="login-page-container">
          <div className="login-heading">
            <h1>Log in to MyStore</h1>
          </div>
          <p style={{ color: "red", fontSize: "0.9rem", textAlign: 'center' }}>
            {errors.LOG_IN_ERROR && errors.LOG_IN_ERROR.message}
          </p>
          <div className="login-inputs-fields">
            <span>
              <input
                sx={{ marginTop: '1vw' }}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={userData.email}
                onChange={getData}
              />
            </span>
            <span>
              {
                showHide ?
                  <>
                    <input
                      type="password"
                      name="password"
                      id="pass"
                      placeholder="Password"
                      autoComplete="off"
                      value={userData.password}
                      onChange={getData}
                    />
                    <VisibilityIcon onClick={() => setShowHide(false)} />
                  </> :
                  <>
                    <input
                      type="text"
                      name="password"
                      id="pass"
                      placeholder="Password"
                      autoComplete="off"
                      value={userData.password}
                      onChange={getData}
                    />
                    <VisibilityOffIcon onClick={() => setShowHide(true)} />
                  </>
              }
            </span>
            <button className="comman-btn login-btn" style={{ border: "none", marginTop: '1vw' }}>
              Continue With Email
            </button>
          </div>
          <div className="break-line">
            <hr /> <span>or</span> <hr />
          </div>
          <div className="login-with-google">
            <a className="comman-btn login-btn " href="">
              Continue With Google
            </a>
          </div>
          <Link className="signup-link" to="/signup">
            Register Here
            {spinner ? <p></p> : <p> <CircularProgress sx={{ position: 'relative', left: '2vw' }} /></p>}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
