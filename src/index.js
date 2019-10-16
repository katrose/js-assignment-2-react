import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));