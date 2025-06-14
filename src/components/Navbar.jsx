import React from 'react';


const Navbar = () => {
    const token = false;
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Pizzeria mamma mia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" >{token ? 'profile': 'Login'}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" >{token ? 'Logout': 'Register'}</a>
        </li>
      </ul>
      <button>Total $25.000</button>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
