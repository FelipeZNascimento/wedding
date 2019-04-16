import React from 'react';
import MenuButton from './menu_button.jsx';
import logo from '../img/logo.png';

let menuButtons = [
    {id:0, description: "evento", link: "#evento"},
    {id:1, description: "informações", link: "#info"},
    {id:2, description: "logo", link: "#"},
    {id:3, description: "presentes", link: "#presentes"},
    {id:4, description: "confirmação", link: "#confirmacao"}
]

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopBar:false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll()); //Listener for scroll event
    }

    handleScroll (e) {
        let showTopBar;
        if (window.pageYOffset >= (window.innerHeight/2))
            showTopBar = true;
        else
            showTopBar = false;
        
        this.setState({showTopBar:showTopBar});
        return;
    }


    render () {
        const renderButtons = menuButtons.map((button, id) => {
            if (button.description !== "logo") {
                return (
                    <MenuButton key={button.id} link={button.link} description={button.description} />
                ) 
            } else if(!this.props.mobile) {
                return (
                    <a className="hide-on-mobile" key={button.id} href="#"><img className="logo" src={logo} alt="Oi"></img></a>
                )
            }
        });
        let renderMenu;
        renderMenu = renderButtons;

        return (
            <nav className={'shadowed top-bar ' + (!this.state.showTopBar ? 'hidden' : '')}>
                <ul>
                    {renderMenu}
                </ul>
            </nav>
        )
    }
}

export default TopBar;