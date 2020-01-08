import React, { Component } from "react";
import Logo from './Thomas Krief Art Logo Noir.png';

class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <div className="site-header-wrapper">
          <header className="main-header">
            <div className="main-header-top">
              <div className="main-header-center">
                <div className="nav-menu d-none d-sm-none d-md-flex">
                  <div className="nav-menu-item"><a href="#Créations">Créations</a></div>
                  <div className="nav-menu-item"><a href="#Artiste">L'Artiste</a></div>
                  <div className=""><img src={Logo} id="logo" alt="Logo" />
                  </div>
                  <div className="nav-menu-item"><a href="#Biographie">Biographie</a></div>
                  <div className=""> <a id="hire-me" href="mailto:thomas.krief@gmail.com" title="hire-me" className="btn-ghost">
                    Contactez-moi</a>
                  </div>
                </div>
                <div className="mobile mobile-menu">
                  <div className="mobile-header">
                    <div className="menu-logo"><img src={Logo} id="logo" alt="Logo" />
                    </div>
                    <div className="menu-toggle">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <div className="mobile-nav">
                    <h2>Navigation</h2>
                    <ul>
                      <li><a href="#Créations">Créations</a></li>
                      <li><a href="#Artiste">L'Artiste</a></li>
                      <li><a href="#Biographie">Biographie</a></li>
                      <li><a href="mailto:thomas.krief@gmail.com">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
