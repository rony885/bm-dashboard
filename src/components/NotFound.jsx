import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="text-center">
        <img
          src="/assets/images/file-searching.svg"
          height="90"
          alt="File not found"
        />

        <h1 className="text-error mt-4">404</h1>
        <h4 className="text-uppercase text-danger mt-3">Page Not Found</h4>
        <p className="text-muted mt-3">
          It looks like you may have taken a wrong turn. Don’t worry... it
          happens to the best of us. Here's a little tip that might help you get
          back on track.
        </p>

        <Link className="btn btn-info mt-3" to="/">
          <i className="mdi mdi-reply"></i> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
