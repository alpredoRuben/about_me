import React from "react";

export default function Header(props) {
  const networks = props.data.social.map((n) => {
    return (
      <li key={n.name}>
        <a href={n.url} target="blank">
          <i className={n.className}></i>
        </a>
      </li>
    );
  });
  const { name, position } = props.data;

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Contact
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Portofolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Services
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Welcome To My Profile</h1>
          <h3 style={{ color: '#f8f8f8' }}>
            Hi.. I'm {name}, a freelance {position} from Medan, North Sumatera who has a career of more than 8 years
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
