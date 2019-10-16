import React from 'react';

class Header extends React.Component {

  openMenu() {
    const menu = document.querySelector('#menu');
    menu.className = 'open-menu';
  }

  closeMenu() {
    const menu = document.querySelector('#menu');
    menu.className = 'close-menu';
  }

  render() {
    return(
      <header>
        <nav>
            <div className="wrapper">
                <div className="logo"></div>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><div className="close" id="close-button" onClick={this.closeMenu}></div></li>
                </ul>
                <div className="menu-button" id="menu-button" onClick={this.openMenu}></div>
            </div>
        </nav>
      </header>
    )
  }
}

export default Header;