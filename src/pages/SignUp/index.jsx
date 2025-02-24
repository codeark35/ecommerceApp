import { useContext, useEffect } from "react";
import { MyContext } from "../../routes/App";
import { /* GoogleSignIn, */ Logo } from "../../assets";
import { FcGoogle } from "../../assets/icons";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);
  return (
    <>
      <section className="section signInPage signUpPage">
        <div className="shape-bottom">
          <svg
            fill="#fff"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 1921 819.8"
            style={{ enableBackground: "new 0 0 1921 819.8" }}
          >
            <path
              className="st0"
              d="M 1921 413.1 v 406.7 H 0 V 0.5 h 0.4 l 228.1 598.3 c 30 74.4 80.8 130.6 152.5 168.6 c 107.6 57 212.1 40.7 245.7 34.4 c 22.4 -4.2 54.9 -13.1 97.5 -26.6 L 1921 400.5 V 413.1 Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="box card p-3 shadow border-0">
            <div className="text-center">
              <a href="/">
                <img src={Logo} alt="" className="w-50" />
              </a>
            </div>
            <form className="mt-3">
              <h2 className="mb-4">Sign Up</h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Name"
                      type="text"
                      required
                      variant="standard"
                      className="w-100"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Phone No."
                      type="text"
                      required
                      variant="standard"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  required
                  variant="standard"
                  className="w-100"
                />
              </div>

              <div className="form-group">
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                  className="w-100"
                />
              </div>

              <Link to="/signIn">
                <Button className="btn-blue col btn-lg btn-big mt-3 mb-3">
                  Create Account
                </Button>
              </Link>

              <p className="txt">
                Already registered? &nbsp;
                <Link to={"/signIn"} className="border-effect">
                  Login
                </Link>
              </p>
              <h6 className="mt-4 text-center font-weight-bold">
                Or continue with social account
              </h6>

              {/* <span className="cursor">
                <img
                  src={GoogleSignIn}
                  className="w-100 "
                  style={{ height: "60px" }}
                  alt=""
                />
              </span> */}

              <Button className="loginWithGoogle mt-2" variant="outlined">
                <FcGoogle />
                Sign In with Google
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
