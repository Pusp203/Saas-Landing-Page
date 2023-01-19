import React from "react";
import "./middlenavbar.scss";

const Middlenavbar = () => {
  return (
    <div class="navbar__navItems ">
      <nav className="navbar__navItems-item">Product</nav>
      <nav className="navbar__navItems-item">Template</nav>
      <nav className="navbar__navItems-item">Blog</nav>
      <nav className="navbar__navItems-item">Pricing</nav>
    </div>
  );
};

export default Middlenavbar;
