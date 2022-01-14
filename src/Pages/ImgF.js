import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
export default function ImgF() {
  const navigate = useNavigate();

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const { registerDetails, setRegisterDetails } = useContext(UserContext);
  const { frontface } = registerDetails;
  const [imageF, setImageF] = useState(frontface);
  const capture1 = React.useCallback(() => {
    const imageF = setImageF(webcamRef.current.getScreenshot());
  }, [webcamRef]);
  const handleNext = (e) => {
    setRegisterDetails({ ...registerDetails, frontface: imageF });
    navigate("/register/imgL");
  };
  return (
    <div className="container">
      <h3 className="text-center">Registration Form</h3>
      <div className="row">
        <div className="container w-50 text-left">
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
            <button className="btn btn-dark" onClick={handleNext}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
