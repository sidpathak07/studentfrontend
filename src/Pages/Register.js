import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const axios = require("axios").default;

export default function Register() {
  const navigate = useNavigate();

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };

  const { registerDetails, setRegisterDetails, userDetails, setUserDetails } =
    useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prn, setprn] = useState("");
  const [div, setDiv] = useState("");
  const [rollNo, setRollNo] = useState(null);
  const [Class, setClass] = useState("");
  const [password, setPassword] = useState("");
  const [imageF, setImageF] = useState("");
  const [imageL, setImageL] = useState("");
  const [imageR, setImageR] = useState("");
  const webcamRef = React.useRef(null);

  const capture1 = React.useCallback(() => {
    const imageF = setImageF(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  const capture2 = React.useCallback(() => {
    const imageL = setImageL(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  const capture3 = React.useCallback(() => {
    const imageR = setImageR(webcamRef.current.getScreenshot());
  }, [webcamRef]);

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
      frontface: imageF,
      leftSide: imageL,
      rightSide: imageR,
    };
    if ((name, email, prn, div, rollNo, Class, imageF, imageL, imageR)) {
      console.log(imageF);
      // fetch(`http://127.0.0.1:8000/user`, {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(student),
      // })
      //   .then((response) => {
      //     console.log(response);
      //     toast.success("Registered Successfully");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     toast.error("Registration Failed Please Try again");
      //   });
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
            <div className="d-flex align-items-center mt-2">
              <div className="col-4 d-flex justify-content-center text-center">
                <Webcam
                  audio={false}
                  height={360}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={360}
                  videoConstraints={videoConstraints}
                  screenshotQuality={1}
                  className=""
                />
              </div>
            </div>
            <div className="d-grid gap-2 my-3">
              <button className="btn btn-dark" onClick={capture1}>
                Capture Front Face
              </button>
              <img src={imageF} alt="" />
            </div>
            <div className="d-grid gap-2 my-3">
              <button className="btn btn-dark" onClick={capture2}>
                Capture Side Face(Left)
              </button>
              <img src={imageL} alt="" />
            </div>
            <div className="d-grid gap-2 my-3">
              <button className="btn btn-dark" onClick={capture3}>
                Capture Side Face(Right)
              </button>
              <img src={imageR} alt="" />
            </div>
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
