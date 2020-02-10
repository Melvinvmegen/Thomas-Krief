import React, { Component } from "react";
import GoldenTiger from './Golden Tiger 90x90 5184 vis.jpg';
import CrazySkull from './Crazy Skull 90x90 5184 vis.jpg';
import Cali from './CALI 90x90 5184 vis.jpg';
import King from './King Of The Jungle 90x90 5184 vis.jpg';
import Carousel from 'react-bootstrap/Carousel'

class Slide extends Component {
  render() {
    return (
      <div className="section-slide">
        <a id="Créations" className="section-anchor-slide"></a>
        <div className="section-wrapper-gallery">
          <div>
            <div className="section-title" data-aos="zoom-in-up">
              <h2 className="title-bold align-center">DERNIERES CREATIONS</h2>
              <h3 className="featured-item-subheader italic align-center">" Quand une oeuvre est terminée je laisse la lumière
                faire son travail et lui donner vie. Je pourrais passer des heures à contempler les milliers de reflets
                qu'elle crée sur chacune des vis. Le rendu est captivant, presque hypnotisant..."
          </h3>
            </div>
            <Carousel className="gallery-content" interval="1000000">
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={Cali} alt="Cali" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">CALI</h2>
                  <p className="description-art">"Elle est la première oeuvre de ma série « visages ». Elle est douce et délicate. C’est pour cela que j’ai décidé de lui donner le nom de ma fille qui vient de naître."</p>
                  <p className="bold params-art">90x90 cm <br></br> 5184 vis</p>
                  <div className="btn-slide">
                    <a href="mailto:thomas.krief@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-slide">
                      <span className=" fa fa-paper-plane"></span><span className="text"> Contactez-moi ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={GoldenTiger} alt="Golden Tiger" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">GOLDEN TIGER</h2>
                  <p className="description-art">"Regard perçant et dents acérées… Le Golden Tiger est toujours prêt à bondir sur sa proie !"</p>
                  <p className="bold params-art">90x90 cm <br></br> 5184 vis </p>
                  <div className="btn-slide">
                    <a href="mailto:thomas.krief@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-slide">
                      <span className=" fa fa-paper-plane"></span><span className="text"> Contactez-moi ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={CrazySkull} alt="CrazySkull" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">CRAZY SKULL</h2>
                  <p className="description-art">"Faites attention de ne pas le regarder trop longtemps dans les yeux ou vous risqueriez de vous faire hypnotiser."</p>
                  <p className="bold params-art">88x115 cm <br></br> 6580 vis</p>
                  <div className="btn-slide">
                    <a href="mailto:thomas.krief@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-slide">
                      <span className=" fa fa-paper-plane"></span><span className="text"> Contactez-moi ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={King} alt="Cali" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">KING OF THE JUNGLE</h2>
                  <p className="description-art">"La force tranquille. Il n’a pas besoin de montrer ses crocs pour que l’on sache qu’il est le roi de la jungle."</p>
                  <p className="bold params-art">90x90 cm <br></br> 5184 vis</p>
                  <div className="btn-slide">
                    <a href="mailto:thomas.krief@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-slide">
                      <span className=" fa fa-paper-plane"></span><span className="text"> Contactez-moi ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
