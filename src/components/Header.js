import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
            <div class="wrapper">
                <div class="logo"></div>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><div class="close" id="close-button"></div></li>
                </ul>
                <div class="menu-button" id="menu-button"></div>
            </div>
        </nav>
      </header>
    )
  }
}

export default Header;