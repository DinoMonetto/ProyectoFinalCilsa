import React from "react";
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="/logo.png" alt="Logo" width="30" class="d-inline-block align-text-top"></img>
      <span className="ms-2">TASKS</span>
      </a>
    </div>
  </nav>
);

export default Navbar;
