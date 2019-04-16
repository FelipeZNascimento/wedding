import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bgUrl: null,
            bgmUrl: null
        }
    }

    componentDidMount() {
        let imgName = 'home0'+(Math.floor(Math.random() * 4) + 1);
        let imageUrl = require(`../img/${imgName}.jpg`);
        let imgNameMobile = 'home0'+(Math.floor(Math.random() * 5) + 1)+'m';
        let imageUrlMobile = require(`../img/${imgNameMobile}.jpg`);

        this.setState({ bgUrl: imageUrl, bgmUrl: imageUrlMobile }); 
    }
  
    renderArrow () {
        return (
            <div className="down-arrow">
                <a href="#evento">
                    <FontAwesomeIcon icon="chevron-down" />
                </a>
            </div>
        )
    }
    render () {
        let imgName;
        if (this.props.mobile)
            imgName = this.state.bgmUrl;
        else imgName = this.state.bgUrl;
    
        return (
            <div style={{backgroundImage: `url(${imgName})` }} className="full-screen main-screen flex-end">
                {this.renderArrow()}
            </div>
        )
    }
}

export default Home;