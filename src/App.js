import React, { Component } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Slide from './Slide/Slide';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Slide />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
