import React, { Component } from "react";
import Logo from './Thomas Krief Art Logo Noir.png';

class Header extends Component {
  state = {
    show: false
  }

  toggleMenu = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow })
  }

  render() {
    return (
      <div className="site-header">
        <div className="site-header-wrapper">
          <header className="main-header">
            <div className="main-header-top">
              <div className="main-header-center">
                <div className="nav-menu d-none d-sm-none d-md-flex">
                  <div className="nav-menu-item"><a href="#Créations">CREATIONS</a></div>
                  <div className="nav-menu-item"><a href="#Artiste">L'ARTISTE</a></div>
                  <div className=""><img src={Logo} id="logo" alt="Logo" />
                  </div>
                  <div className="nav-menu-item"><a href="#Biographie">BIOGRAPHIE</a></div>
                  <div className=""> <a id="hire-me" href="mailto:thomas.krief@gmail.com" title="hire-me" className="btn-ghost">
                    Contactez-moi</a>
                  </div>
                </div>
                <div className="mobile mobile-menu">
                  <div className="mobile-header">
                    <div className="menu-logo"><img src={Logo} id="logo" alt="Logo" />
                    </div>
                    <div className="menu-toggle" onClick={this.toggleMenu}>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                  {
                    this.state.show ?
                      <div className="mobile-nav">
                        <div className="menu-toggle" onClick={this.toggleMenu}>
                          <div className="line-active"></div>
                          <div className="line-active"></div>
                          <div className="line-active"></div>
                        </div>
                        <div className="mobile-nav-menu">
                          <h2 className="mobile-nav-title">Navigation</h2>
                          <ul>
                            <li><a href="#Créations" onClick={this.toggleMenu}>Créations</a></li>
                            <li><a href="#Artiste" onClick={this.toggleMenu}>L'Artiste</a></li>
                            <li><a href="#Biographie" onClick={this.toggleMenu}>Biographie</a></li>
                            <li><a href="mailto:thomas.krief@gmail.com" onClick={this.toggleMenu}>Contact</a></li>
                          </ul>
                        </div>
                      </div> : null
                  }
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
