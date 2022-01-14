import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import Navbarr from "../Components/Navbarr";
import { Spinner } from "react-bootstrap";

export default function Profile() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    email,
    name,
    Class,
    div,
    roll_no,
    prn,
    frontface,
    leftSide,
    rightSide,
  } = userDetails;

  const userLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">User Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">Profile</li>
        </ul>
      </div>
    );
  };
  const userRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <p className="badge bg-success me-2">Email: </p>
            {email}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Name: </p>
            {name}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">PRN: </p>
            {prn}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Class: </p>
            {Class}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Div: </p>
            {div}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Roll No: </p>
            {roll_no}
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Front Face: </p>
            <img src={frontface} alt="" />
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Lrft Side: </p>
            <img src={leftSide} alt="" />
          </li>
          <li className="list-group-item">
            <p className="badge bg-success me-2">Right Side: </p>
            <img src={rightSide} alt="" />
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Navbarr />
      {isLoading && (
        <div className="text-center mt-5">
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
      {!isLoading && (
        <div className="row mt-5">
          <div className="col-3">{userLeftSide()}</div>
          <div className="col-9">{userRightSide()}</div>
        </div>
      )}
    </div>
  );
}
