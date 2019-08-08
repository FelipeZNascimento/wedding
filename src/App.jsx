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
            mobile:false,
            loading: true
        };
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        const loader = document.getElementById('loader');
        if(loader){
            loader.classList.add('available');
            setTimeout(() => {
                loader.outerHTML = '';
                this.setState({loading: false});

                var element = document.getElementById(window.location.hash.substr(1));
                if (element)
                    element.scrollIntoView();
            }, 1000)
        }


    }

    componentWillUnmount() {
        document.body.removeEventListener("resize", this.resize.bind(this));
    }


    resize() {
        if(window.innerWidth > 768 || window.innerWidth > window.innerHeight)
            this.setState({mobile: false})
        else
            this.setState({mobile: true})
    }

    render () {
        return (
            <span className={this.state.loading ? 'display-none' : ''}>
                <TopBar mobile={this.state.mobile}/>
                <Home mobile={this.state.mobile}/>
                <MainContent mobile={this.state.mobile}/>
            </span>
        )
    }
}

export default App;