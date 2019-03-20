import React, { Component } from 'react';
import MenuButton from './menu_button.jsx';

let menuButtons = [
    {id:0, description: "about", link: "#about"},
    {id:1, description: "resume", link: "#resume"},
    {id:2, description: "portfolio", link: "#portfolio"},
    {id:3, description: "contact", link: "#contact"}
]

class TopBar extends React.Component {
    render () {
        const renderButtons = menuButtons.map((button, id) => {
            return (
                <MenuButton key={button.id} link={button.link} description={button.description} />
            ) 
        });

        return (
            <div className={'shadowed top-bar ' + (!this.props.visible ? 'hidden' : '')}>
                {renderButtons}
            </div>
        )
    }
}

export default TopBar;