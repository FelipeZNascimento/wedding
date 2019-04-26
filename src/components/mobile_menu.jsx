import React, { Component } from 'react';
import MenuButton from './menu_button.jsx';
import logo from '../img/logo.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

class MobileMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openMenu: false
        }
    }

    toggleMenu () {
        let openMenu = !this.state.openMenu;
        this.setState({openMenu:openMenu});
    }

    render () {
        const renderMenu = this.props.buttons.map((button, id) => {
            if (button.description !== "logo") {
                return (
                    <MenuButton onClick={() => this.toggleMenu()} key={button.id} link={button.link} description={button.description}/>
                )
            }
            return null;
        });

        return (
            <span>
                <div className={'shadowed top-bar left-align ' + (!this.props.visible ? 'hidden' : '')} onClick={() => this.toggleMenu()}>
                    <FontAwesomeIcon icon="bars"/>&nbsp;Menu                
                </div>
                <div className={'mobile-menu-container ' + (this.state.openMenu ? 'slide' : '')}>
                    <nav className={'mobile-nav ' + (this.state.openMenu ? 'slide' : '')}>
                        <ul>
                            {renderMenu}
                            <a href="/#home" onClick={() => this.toggleMenu()}><img className="logo" src={logo} alt="Logo"></img></a>
                        </ul>
                    </nav>
                </div>
            </span>
        )
    }
    
}

export default MobileMenu;