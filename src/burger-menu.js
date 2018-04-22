import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';

class BurgerMenu extends Component {

  render () {
    return (
      <div>
      <Menu>
        <a style={{marginBottom: '3rem', marginTop: '1rem'}}>Tchatchotho usuário</a>
        <a id="home" className="menu-item">&#9883;	Home</a>
        <a id="about" className="menu-item">&#128712; About</a>
        <a id="contact" className="menu-item">&#x260f; Contact</a>
      </Menu>
      </div>
    );
  }
}

export default BurgerMenu
