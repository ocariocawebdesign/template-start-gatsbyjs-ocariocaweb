import React from "react";
import Logo from "../Header/img/ocarioca-logo.png";

const Header = () => (
  <header>
    <img className="img-fluid" src={Logo} alt="Logo O Carioca Web" />
    <h3 className="text-left">Template Starter Gatsbyjs</h3>

<div className="menu">
      <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>

</div>

  </header>
)

export default Header
