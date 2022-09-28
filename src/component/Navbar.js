import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-warning fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand text-dark "> Free Crypto News</a>
          <form className="d-flex">
        
            <button className="btn btn-dark" type="button" onClick={props.setSecondCount} >
              Add More News
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
