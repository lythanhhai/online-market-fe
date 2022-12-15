import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../APIs/auth.api";

function SignUp() {
  const [data, setData] = useState({
    username: "",
    password: "",
    conPassword: "",
  });
  const [errData, setErrData] = useState({
    errUsername: "err",
    errPassword: "err",
    errConPassword: "err",
    errCommon: "",
  });
  const validateUsername = (value) => {
    if (value === "") {
      setErrData({
        ...errData,
        errUsername: "Username is required",
      });
    } else {
      setErrData({
        ...errData,
        errUsername: "",
      });
    }
  };
  const validatePassword = (value) => {
    if (value === "") {
      setErrData({
        ...errData,
        errPassword: "Password is required",
      });
    } else if (value.length < 8) {
      setErrData({
        ...errData,
        errPassword: "Password must contain at least 8 character",
      });
    } else {
      setErrData({
        ...errData,
        errPassword: "",
      });
    }
  };
  const validateConPassword = (value) => {
    if (value === "") {
      setErrData({
        ...errData,
        errConPassword: "Confirm password is required",
      });
    } else if (value !== data.password) {
      setErrData({
        ...errData,
        errConPassword: "Confirm password must same as password",
      });
    } else {
      setErrData({
        ...errData,
        errConPassword: "",
      });
    }
  };
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    if (
      !errData.errUsername &&
      !errData.errPassword &&
      !errData.errConPassword
    ) {
      setErrData({
        ...errData,
        errCommon: "",
      });
      register(data, navigate, setErr);
    } else {
      setErrData({
        ...errData,
        errCommon: "You must enter correct and full information",
      });
    }
  };
  return (
    <div className="signUp-container">
      <div class="account section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="login-form border p-5">
                <div class="text-center heading">
                  <h2 class="mb-2">Sign Up</h2>
                  <p class="lead">
                    Already have an account? <a href="/login"> Login now</a>
                  </p>
                </div>

                <form action="#">
                  {/* <div class="form-group mb-4">
                    <label for="#">Enter Email Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div> */}
                  <div class="form-group mb-4">
                    <label for="#">Enter username</label>
                    {/* <a class="float-right" href="">
                      Forget password?
                    </a> */}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        setData({
                          ...data,
                          username: e.target.value,
                        });
                        validateUsername(e.target.value);
                      }}
                    />
                  </div>
                  {errData.errUsername && errData.errUsername !== "err" ? (
                    <p style={{ color: "red" }}>{errData.errUsername}!!!</p>
                  ) : null}
                  <div class="form-group mb-4">
                    <label for="#">Enter Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setData({
                          ...data,
                          password: e.target.value,
                        });
                        validatePassword(e.target.value);
                      }}
                    />
                  </div>
                  {errData.errPassword && errData.errPassword !== "err" ? (
                    <p style={{ color: "red" }}>{errData.errPassword}!!!</p>
                  ) : null}
                  <div class="form-group">
                    <label for="#">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      onChange={(e) => {
                        setData({
                          ...data,
                          conPassword: e.target.value,
                        });
                        validateConPassword(e.target.value);
                      }}
                    />
                  </div>
                  {errData.errConPassword &&
                  errData.errConPassword !== "err" ? (
                    <p style={{ color: "red" }}>{errData.errConPassword}!!!</p>
                  ) : null}
                  {errData.errCommon ? (
                    <p style={{ color: "red" }}>{errData.errCommon}!!!</p>
                  ) : null}
                  {err ? <p style={{ color: "red" }}>{err}!!!</p> : null}
                  <a
                    class="btn btn-main mt-3 btn-block"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleSignUp();
                    }}
                  >
                    Signup
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
