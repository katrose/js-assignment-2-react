import React from 'react';

class Header extends React.Component {

  state = {isMenuOpen: false}

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return(
      <header>
        <nav>
            <div className="wrapper">
                <div className="logo"></div>
                <ul id="menu" className={this.state.isMenuOpen ? 'open-menu' : 'close-menu'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><div className="close" onClick={this.toggleMenu}></div></li>
                </ul>
                <div className="menu-button" onClick={this.toggleMenu}></div>
            </div>
        </nav>
      </header>
    )
  }
}

export default Header;