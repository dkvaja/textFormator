import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <h2 className="text-light text-center">{props.title}</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
