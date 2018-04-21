import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';

class BurgerMenu extends Component {

  render () {
    return (
      <div>
      <Menu>
        <a style={{marginBottom: '3rem', marginTop: '1rem'}}>Tchatchotho usuário</a>
        <a id="home" className="menu-item" href="/">&#9883;	Home</a>
        <a id="about" className="menu-item" href="/about">&#128712; About</a>
        <a id="contact" className="menu-item" href="/contact">&#x260f; Contact</a>
      </Menu>
      </div>
    );
  }
}

export default BurgerMenu
