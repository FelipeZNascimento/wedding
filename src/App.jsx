import React from 'react';
import TopBar from './components/topbar.jsx';
import Home from './sections/home.jsx';
import MainContent from './sections/mainContent.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile:false
        };
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        if(window.innerHeight > window.innerWidth)
            this.setState({mobile: true})
        else
            this.setState({mobile: false})
    }

    render () {
        return (
            <span>
                <TopBar mobile={this.state.mobile}/>
                <Home mobile={this.state.mobile}/>
                <MainContent mobile={this.state.mobile}/>
            </span>
        )
    }
}

export default App;