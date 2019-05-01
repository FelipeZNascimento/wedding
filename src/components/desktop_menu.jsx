import React, { Component } from 'react';
import MenuButton from './menu_button.jsx';
import logo from '../img/logo.png';

class DesktopMenu extends Component {
    render () {
        const renderMenu = this.props.buttons.map((button, id) => {
            if (button.description !== "logo") {
                return (
                    <MenuButton key={button.id} link={button.link} description={button.description} />
                ) 
            } else {
                if (!this.props.mobile) {
                    return (
                        <a className="hide-on-mobile" key={button.id} href={button.link}><img className="logo" src={logo} alt="Logo"></img></a>
                    )
                }
            }

            return null;
        });

        return (
            <nav id="desktop-menu" className={'desktop-nav shadowed top-bar ' + (!this.props.visible ? 'hidden' : '')}>
                <ul>
                    {renderMenu}
                </ul>
            </nav>
        )
    }
    
}

export default DesktopMenu;