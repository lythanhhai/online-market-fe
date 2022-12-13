import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../APIs/auth.api";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// Material Dashboard 2 React components
import { MDBRow } from  "mdb-react-ui-kit";
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [position, setPosition] = useState("");
  useEffect(() => {
    localStorage.setItem("POSITION", position);
  }, [position]);
  
  const navigate = useNavigate();
  const handleSignIn = () => {
    login(data, navigate, setErr);
  };
  return (
    <div className="login-container">
      <div class="account section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="login-form border p-5">
                <div class="text-center heading">
                  <h2 class="mb-2">Login</h2>
                  <p class="lead">
                    Don’t have an account?{" "}
                    <a href="/signup">Create a free account</a>
                  </p>
                </div>

                <form action="#">
                  <div class="form-group mb-4">
                    <label for="#">Enter username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        setData({
                          ...data,
                          username: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label for="#">Enter Password</label>
                    <a class="float-right" href="">
                      Forget password?
                    </a>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        setData({
                          ...data,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  {err ? <p style={{ color: "red" }}>{err}!!!</p> : null}
                  <MDBRow>
                    <FormControl fullWidth style={{ padding: "5px 13px" }}>
                      <InputLabel id="demo-simple-select-label" style={{ marginLeft: "15px" }}>Position</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={position}
                        label="Position"
                        sx={{ height: "45px" }}
                        onChange={(e) => {
                          setPosition(e.target.value);
                        }}
                      >
                        <MenuItem value={0}>User</MenuItem>
                        <MenuItem value={1}>Seller</MenuItem>
                      </Select>
                    </FormControl>
                  </MDBRow>
                  <a
                    class="btn btn-main mt-3 btn-block"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleSignIn();
                    }}
                  >
                    Login
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
export default Login;
