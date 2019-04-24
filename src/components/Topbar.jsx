import React from 'react';
import MobileMenu from './mobile_menu.jsx';
import DesktopMenu from './desktop_menu.jsx';

let menuButtonsRelative = [
    {id:0, description: "evento", link: "#evento"},
    {id:1, description: "informações", link: "#info"},
    {id:6, description: "história", link: "#historia"},
    {id:2, description: "logo", link: "#home"},
    {id:5, description: "galeria", link: "#galeria"},
    {id:3, description: "presentes", link: "#presentes"},
    {id:4, description: "confirmação", link: "confirmacao"}    
]

let menuButtonsAbsolute = [
    {id:0, description: "evento", link: "/#evento"},
    {id:1, description: "informações", link: "/#info"},
    {id:6, description: "história", link: "/#historia"},
    {id:2, description: "logo", link: "/#home"},
    {id:5, description: "galeria", link: "/#galeria"},
    {id:3, description: "presentes", link: "/#presentes"},
    {id:4, description: "confirmação", link: "confirmacao"}    
]


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopBar:false
        };
    }

    componentDidMount() {
        if (this.props.alwaysVisible)
            this.setState({showTopBar:true});

        window.addEventListener('scroll', () => this.handleScroll()); //Listener for scroll event
    }

    handleScroll (e) {
        if (!this.props.alwaysVisible) {
            let showTopBar;
            if (window.pageYOffset >= (window.innerHeight/2))
                showTopBar = true;
            else
                showTopBar = false;
            
            this.setState({showTopBar:showTopBar});
            return;
        }
    }


    render () {
        let menuButtons;
        if (this.props.alwaysVisible)
            menuButtons = menuButtonsAbsolute;
        else menuButtons = menuButtonsRelative;

        let renderMenu;
        if (this.props.mobile)
            renderMenu = <MobileMenu buttons={menuButtons} visible={this.state.showTopBar}/>;
        else
            renderMenu = <DesktopMenu buttons={menuButtons} visible={this.state.showTopBar}/>;

        return (
            <span>
                {renderMenu}
            </span>
        )
    }
}

export default TopBar;