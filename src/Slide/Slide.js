import React, { Component } from "react";
import Marilyn from './Marilyn.jpg';
import Supreme from './LV X Supreme Camo Skull.jpg';
import LVHeart from './LV Heart RED.jpg';
import Hendrix from './Hendrix.jpg';
import LoveHeart from './Hello My Name Is Love.jpg'
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
              <Carousel.Item className="myslides fade-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={Supreme} alt="LV X SUPREME CAMO SKULL" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">LV X SUPREME CAMO SKULL</h2>
                  <p className="bold params-art">90x90 cm </p>
                  <p className="description-art">Nouvelle oeuvre de la série « Skulls ». Ici dans une version camouflage accompagné du célèbre monogramme Vuitton</p>
                  <div className="btn-slide">
                    <a data-rel="external" href="https://www.artmajeur.com/thomas-krief" className="btn-ghost-slide">
                      <span className=" fa fa-plus"></span><span className="text"> Voir toutes les oeuvres ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={LoveHeart} alt="HELLO MY NAME IS LOVE" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">HELLO MY NAME IS LOVE</h2>
                  <p className="bold params-art">90x90 cm  </p>
                  <p className="description-art">Love, amour, amore, liebe, amor… Peu importe le langage, on se comprend toujours quand il s’agit d’amour</p>
                  <div className="btn-slide">
                    <a data-rel="external" href="https://www.artmajeur.com/thomas-krief" className="btn-ghost-slide">
                      <span className=" fa fa-plus"></span><span className="text"> Voir toutes les oeuvres ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={Hendrix} alt="HENDRIX" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">HENDRIX</h2>
                  <p className="bold params-art">90x90 cm </p>
                  <p className="description-art">« When the power of love overcomes the love of power, the world will know peace »</p>
                  <div className="btn-slide">
                    <a data-rel="external" href="https://www.artmajeur.com/thomas-krief" className="btn-ghost-slide">
                      <span className=" fa fa-plus"></span><span className="text"> Voir toutes les oeuvres ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={LVHeart} alt="LV HEART RED" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">LV HEART RED</h2>
                  <p className="bold params-art">50x50 cm </p>
                  <p className="description-art">Mariage d’amour entre l’art et le luxe</p>
                  <div className="btn-slide">
                    <a data-rel="external" href="https://www.artmajeur.com/thomas-krief" className="btn-ghost-slide">
                      <span className=" fa fa-plus"></span><span className="text"> Voir toutes les oeuvres ►</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="myslides fade-slide" data-aos="fade-up">
                <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <img src={Marilyn} alt="MARILYN" className="img-gallery" />
                </div>
                <div className="gallery-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <h2 className="title-art">MARILYN</h2>
                  <p className="bold params-art">115x88 cm </p>
                  <p className="description-art">Icône de la Pop Culture, ici réinterprétée avec plus de 6500 vis</p>
                  <div className="btn-slide">
                    <a data-rel="external" href="https://www.artmajeur.com/thomas-krief" className="btn-ghost-slide">
                      <span className=" fa fa-plus"></span><span className="text"> Voir toutes les oeuvres ►</span>
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
