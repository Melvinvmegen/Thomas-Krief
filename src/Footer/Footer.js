import React, { Component } from "react";
import Signature from './Signature oeuvres blanc.png'


class Footer extends Component {
  render() {
    return (
      <div className="component-footer">
        <div className="footer-full-row">
          <div className="footer-inner">
            <div className="footer-header">
              <div className="footer-header-inner">
                <div className="footer-header-inner-left">
                  <img src={Signature} alt="Signature" className="img-footer" />
                </div>
                <div className="footer-header-inner-right">
                  <ul className="social-links">
                    <li>
                      <a href="" className="icon fa fa-facebook">
                        <p className="font">Facebook</p>
                      </a>
                    </li>
                    <li>
                      <a href="" className="icon fa fa-twitter">
                        <p className="font">Twitter</p>
                      </a>
                    </li>
                    <li>
                      <a href="" className="icon fa fa-instagram">
                        <p className="font">Instagram</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
