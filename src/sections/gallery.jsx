import React from 'react';
import NewSection from '../components/new_section.jsx';
import Photo01 from '../img/gallery/01.jpg';
import Photo02 from '../img/gallery/02.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight);


class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen:false,
            modalImage:null,
            modalObject:null
        }
    }
    componentDidMount() {
        document.body.addEventListener('keydown', (e) => this.handleKey(e));
    }
    handleClick (event) {
        let modal = !this.state.modalOpen;
        this.setState({modalOpen: modal, modalImage:event.target, modalObject:event.currentTarget});
    }
    handleKey (event) {
        if (this.state.modalOpen) {
            if (event.keyCode === 39)
                this.setNextImage();
            else if (event.keyCode === 37)
                this.setPreviousImage();
            else if (event.keyCode === 27)
                this.closeModal(event);
        }        
    }
    closeModal (event) {
        if (event.target.id === 'desktop-menu' || event.target.id === 'mainContainer' || !document.getElementById('mainContainer').contains(event.target))
            this.setState({modalOpen: false});
    }
    setPreviousImage () {
        let previousObject = this.state.modalObject.previousSibling;
        if (previousObject)
            this.setState({modalImage: previousObject.children[0], modalObject:previousObject});
    }
    setNextImage () {
        let nextObject = this.state.modalObject.nextSibling;
        if (nextObject)
            this.setState({modalImage: nextObject.children[0], modalObject:nextObject});
    }

    renderModal () {
        if (this.state.modalOpen) {
            return (
                <div tabIndex="0" onKeyDown={(e) => this.handleKey(e)} onClick={(e) => this.closeModal(e)} className={this.state.modalOpen ? 'modal-container' : 'display-none'}>
                    <div id="mainContainer" className="main-container">
                        <span className={this.props.mobile ? 'display-none' : 'arrow'} onClick={() => this.setPreviousImage()}><FontAwesomeIcon icon="chevron-left" /></span>
                        <div id="galleryModal" className="content-modal">
                            <div className="image-frame">
                                <img className="image-gallery" src={this.state.modalImage.currentSrc} alt={this.state.modalImage.alt} />
                            </div>
                            <p className="noPadding noMargin regular-text">{this.state.modalImage.alt}</p>                        
                        </div>
                        <span className={this.props.mobile ? 'display-none' : 'arrow'} onClick={() => this.setNextImage()}><FontAwesomeIcon icon="chevron-right" /></span>
                    </div>
                </div>
            )
        } else
            return null;
    }
    render () {
        return (
            <div>
                {this.renderModal()}
                <span id="galeria"><NewSection></NewSection></span>
                <h1>Galeria</h1>
                <div className="gallery flex-center">
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo01} alt="Sceaux, França | 2018"/>
                    </div>
                    <div className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e)} >
                        <img className="thumbnail" src={Photo02} alt="Notre Dame, Paris, França | 2018"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;