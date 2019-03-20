import React, { Component } from 'react';
import TopBar from './components/Topbar.jsx';
import Home from './sections/home.jsx';
import MainContent from './sections/mainContent.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: true,
            showTopBar:false
        };
    }
    
    handleScroll (e) {
        let showTopBar;
        if (window.pageYOffset >= window.innerHeight)
            showTopBar = true;
        else
            showTopBar = false;
        
        this.setState({
            showTopBar:showTopBar
        });
        return;
    }
    
    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll()); //Listener for scroll event
    }


    render () {
        return (
            <span>
                <TopBar visible={this.state.showTopBar}/>
                <Home content={this.state.content}/>
                <MainContent visible={this.state.content}/>
            </span>
        )
    }
}

export default App;