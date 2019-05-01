import React from 'react';
import { Parallax } from 'react-parallax';
import NewSection from '../components/new_section.jsx';
import Event from './event.jsx';
import Info from './info.jsx';
import Gallery from './gallery.jsx';
import Gifts from './gifts.jsx';

import Timeline from '../img/timeline.png';

class MainContent extends React.Component {
    
    render () {
        let parallaxStr;
        let parallaxHeight;
        if (this.props.mobile) {
            parallaxStr = 600;
            parallaxHeight = '200px';
        } else {
            parallaxStr = 1000;
            parallaxHeight = '400px';
        }

        return (
            <div>
                <div className="main-content">
                    <Event></Event>
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax07.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                    <Info></Info>
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax06.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                    <span id="historia"><NewSection></NewSection></span>
                    <img className="timeline" src={Timeline} alt="Timeline"></img>
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax05.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                    <Gallery mobile={this.props.mobile}></Gallery>
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax03.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                    <Gifts></Gifts>
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax04.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                </div>
            </div>
        )
    }
}

export default MainContent;