import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const axios = require("axios").default;

export default function Regform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prn, setprn] = useState("");
  const [div, setDiv] = useState("");
  const [rollNo, setRollNo] = useState(null);
  const [Class, setClass] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { registerDetails, setRegisterDetails, userDetails, setUserDetails } =
    useContext(UserContext);

  const { frontface, leftSide, rightSide } = registerDetails;
  console.log(registerDetails);

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(name, email, prn, div, rollNo, Class);
    let student = {
      name: name,
      Class: Class,
      div: div,
      roll_no: rollNo,
      email: email,
      prn: prn,
      password: password,
      frontface: frontface,
      leftSide: leftSide,
      rightSide: rightSide,
    };
    if (
      (name, email, prn, div, rollNo, Class, frontface, leftSide, rightSide)
    ) {
      axios
        .post("http://127.0.0.1:8000/user", student)
        .then(function (response) {
          toast.success(
            "Registered Successfuflly..You will be redirected to Login Automatically"
          );
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          console.log(response);
        })
        .catch(function (error) {
          toast.error("Registration Failed Please Try again");
          console.log(error);
        });
      //   console.log(student);
    } else {
      alert("Fill all fields");
    }
  };
  return (
    <div className="container">
      <h3 className="text-center">Registration Form</h3>
      <div className="row">
        <div className="container w-50 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                name="name"
                className="form-control password "
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <label className="text-dark">
                Email ID <span className="text-danger">*</span>
              </label>
              <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
                required
                value={email}
              />
            </div>
            <div className="form-group ">
              <label className="text-dark">
                Password <span className="text-danger">*</span>
              </label>
              <input
                name="email"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                type="password"
                required
                value={password}
              />
            </div>
            <div className="form-group ">
              <label className="text-dark">
                PRN <span className="text-danger">*</span>
              </label>
              <input
                name="PRN"
                onChange={(e) => setprn(e.target.value)}
                className="form-control"
                type="text"
                required
                value={prn}
              />
            </div>

            <div className="form-group ">
              <label className="text-dark">
                Roll No <span className="text-danger">*</span>
              </label>
              <input
                name="rollNo"
                onChange={(e) => setRollNo(e.target.value)}
                className="form-control"
                type="text"
                required
                value={rollNo}
              />
            </div>

            <div className="form-group ">
              <label className="text-dark">
                Div <span className="text-danger">*</span>
              </label>
              <input
                name="rollNo"
                onChange={(e) => setDiv(e.target.value)}
                className="form-control"
                type="text"
                required
                value={div}
              />
            </div>

            <div className="form-group mt-2">
              <label className="text-dark">
                Class
                <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-group ">
              <div className="d-flex align-items-center mt-2">
                <input
                  type="radio"
                  name="year"
                  value="FY"
                  onChange={(e) => setClass(e.target.value)}
                />
                <label htmlFor="styles" className="me-2 text-dark">
                  F.Y.
                </label>
              </div>
              <div className="d-flex align-items-center mt-2">
                <input
                  type="radio"
                  name="year"
                  value="SY"
                  onChange={(e) => setClass(e.target.value)}
                />
                <label htmlFor="styles" className="me-2 text-dark">
                  S.Y.
                </label>
              </div>
              <div className="d-flex align-items-center mt-2">
                <input
                  type="radio"
                  name="year"
                  value="TY"
                  onChange={(e) => setClass(e.target.value)}
                />
                <label htmlFor="styles" className="me-2 text-dark">
                  T.Y.
                </label>
              </div>
              <div className="d-flex align-items-center mt-2">
                <input
                  type="radio"
                  name="year"
                  value="BE"
                  onChange={(e) => setClass(e.target.value)}
                />
                <label htmlFor="styles" className="me-2 text-dark">
                  B.E.
                </label>
              </div>
            </div>

            <div className="d-grid gap-2 my-3">
              <button
                className="btn btn-dark"
                type="submit"
                onClick={submitDetails}
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
