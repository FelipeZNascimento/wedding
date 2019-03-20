import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown);

class Home extends React.Component {
    renderArrow () {
        if (this.props.content) {
            return (

                <div className="down-arrow">
                    <a href="#mainContent">
                        <FontAwesomeIcon icon="chevron-down" />
                    </a>
                </div>
            )
        } else 
            return null;
    }
    render () {
        return (
            <div className="full-screen main-screen">
                <div className="inner-border">
                    {this.renderArrow()}
                </div>                
            </div>
        )
    }
}

export default Home;