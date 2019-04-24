import React, { Component } from 'react';
import TopFlowers from '../img/top_flowers.png';
import TopFlowersInv from '../img/top_flowers_inv.png';

class NewSection extends Component {
    render () {
        return (
            <span>
                <p className="noPadding noMargin hide-on-mobile"><img className="top-flowers" src={TopFlowersInv} alt="flores"></img></p>
                <p className="noPadding noMargin"><img className="top-flowers" src={TopFlowers} alt="flores"></img></p>
            </span>
        )
    }
    
}

export default NewSection;