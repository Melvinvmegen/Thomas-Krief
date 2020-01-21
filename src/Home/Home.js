import React, { Component } from "react";
import Artist from './TK-Portraitgoldentiger.jpg'
import Ski from './Toto Ski.jpg'

class Home extends Component {
  render() {
    return (
      <div id="section-home" className="section-home">
        <div className="relative">
          <a id="Biographie" className="section-anchor" href=""></a>
          <div id="section-one" className="section-one">
            <div className="section-wrapper-two">
              <div className="section-left col-xs-12 col-sm-12 col-md-6">
                <h2 className="title-bold">THOMAS KRIEF</h2>
                <h3 className="featured-item-subheader italic">Ancien skieur professionnel</h3>
                <p className="featured-item-body">Né dans les Alpes, Thomas chausse les skis pour la première fois à l'âge de 3
                      ans. A 6 ans sa carrière dans le ski freestyle est lancée et il participe à ses premières compétitions.
                      Rapidement repéré par ses premiers sponsors, il devient alors le jeune prodige du ski freestyle français.
            C'est le début d'une carrière internationale qui va durer 20 ans. <br></br><br></br>Compétitions, vidéos, photos,
                  publicités
                  etc. Thomas a fait parti des meilleurs skieurs de sa discipline avec notamment des podiums aux championnats
            du monde X-Games, Coupes du monde... Il a également participé deux fois aux Jeux Olympiques.</p>
                <div className="btn-slide">
                  <a href="https://www.instagram.com/thomaskrief/?hl=fr" className="btn-ghost">
                    <span className=" fa fa-instagram"></span><span className="text"> Découvrez en plus ►</span>
                  </a>
                </div>
              </div>
              <div className="section-wrapper-right col-xs-12 col-sm-12 col-md-6 align-center">
                <img src={Ski}
                  className="img-home" id="image-bio" alt="Skieur professionnel" />
              </div>
            </div>
          </div>
        </div>
        <a id="Artiste" className="section-anchor-artist"></a>
        <div id="Artiste" className="section-two">
          <div className="section-wrapper">
            <div className="section-wrapper-left col-xs-12 col-sm-12 col-md-6 align-center">
              <img src={Artist} className="img-home" alt="Portrait de l'artiste" />
            </div>
            <div className="section-right-text col-xs-12 col-sm-12 col-md-6">
              <h2 className="title-bold">L'ARTISTE</h2>
              <h3 className="featured-item-subheader italic">Précision et patience</h3>
              <p className="featured-item-body">Fraîchement retraité, il ouvre aujourd'hui un nouveau chapitre de sa vie, ainsi
                        il peut
            s'adonner à sa seconde passion et laisser de nouveau libre cours à son imagination.<br></br><br></br> Il décide alors
                    de se
                    lancer. Il commence par travailler ses visuels afin de les adapter à leur futur support. Vient ensuite un
                    travail long et minutieux, où à l'aide de sa visseuse il appose les milliers de vis qui donneront vie à
                    ses
            oeuvres.</p>
              <div className="btn-slide">
                <a href="https://www.instagram.com/thomaskrief/?hl=fr" className="btn-ghost">
                  <span className=" fa fa-instagram"></span><span className="text"> Découvrez en plus ►</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
