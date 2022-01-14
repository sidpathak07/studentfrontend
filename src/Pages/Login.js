import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Base from "../Components/Base";
import { UserContext } from "../Context/UserContext";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email && password) {
      axios
        .get(`http://127.0.0.1:8000/update/${email}/${password}`)
        .then(function (response) {
          setUserDetails({
            name: response.data.name,
            Class: response.data.Class,
            div: response.data.div,
            roll_no: response.data.roll_no,
            email: response.data.email,
            prn: response.data.prn,
            frontface: response.data.frontface,
            leftSide: response.data.leftSide,
            rightSide: response.data.rightSide,
          });
          setIsLoading(false);
          toast.success("Login Success");
          navigate("/profile");
          console.log(response);
        })
        .catch(function (error) {
          setIsLoading(false);
          toast.error(error);
          console.log(error);
        });
    } else {
      setIsLoading(false);
      toast.error("Fill all fields");
    }
  };
  return (
    <div>
      <Base>
        <h1 className="text-center">Log In</h1>
        <div className="row">
          <div className="container w-50 text-left">
            <form>
              <div className="form-group ">
                <label className="text-dark">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  value={email}
                  type="email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-dark">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  name="password"
                  className="form-control password "
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                {showPassword ? (
                  <blockquote
                    style={{ cursor: "pointer", margin: "0" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Hide password
                  </blockquote>
                ) : (
                  <blockquote
                    style={{ cursor: "pointer", margin: "0" }}
                    className="text-decoration-underline text-primary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Show password
                  </blockquote>
                )}
              </div>

              <div className="d-grid gap-2 my-3">
                <button
                  className="btn btn-dark"
                  onClick={(e) => onSubmit(e)}
                  type="submit"
                >
                  Login
                </button>
                <a className="text-center" href="/register/imgF">
                  Register
                </a>
              </div>
            </form>
            {isLoading && (
              <div className="text-center">
                <Spinner
                  className="text-center"
                  animation="border"
                  role="status"
                  style={{ color: "#000000" }}
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
          </div>
        </div>
      </Base>
    </div>
  );
}
