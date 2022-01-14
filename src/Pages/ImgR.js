import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Webcam from "react-webcam";

export default function ImgR() {
  const navigate = useNavigate();
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };
  const { registerDetails, setRegisterDetails } = useContext(UserContext);
  const { rightSide } = registerDetails;
  const [imageR, setImageR] = useState(rightSide);
  const webcamRef = React.useRef(null);

  console.log(registerDetails);

  const capture3 = React.useCallback(() => {
    const imageR = setImageR(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  const handleBack = (e) => {
    navigate("/register/imgL");
  };

  const handleNext = (e) => {
    setRegisterDetails({ ...registerDetails, rightSide: imageR });
    navigate("/register/regForm");
  };
  return (
    <div className="container">
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
            <button className="btn btn-dark" onClick={capture3}>
              Capture Side Face(Right)
            </button>
            <img src={imageR} alt="" />
            <button className="btn btn-dark" onClick={handleBack}>
              BACK
            </button>
            <button className="btn btn-dark" onClick={handleNext}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
