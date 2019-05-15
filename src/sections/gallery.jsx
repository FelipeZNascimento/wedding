import React from 'react';
import NewSection from '../components/new_section.jsx';
import Swiper from 'react-id-swiper';

import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const galleryImages = require.context('../img/gallery', true);
const galleryThumbs = require.context('../img/gallery/thumbs', true);
library.add(faChevronLeft, faChevronRight);

let galleryTexts = [
    {id:0, description: "Tapejara/RS, 2008"},
    {id:1, description: ""},
    {id:2, description: "Pedido de namoro - Curitiba/PR, 2008"},
    {id:3, description: "Amigos 💖 - Curitiba/PR, 2008"},
    {id:4, description: ""},
    {id:5, description: "Formatura Ensino Médio, Santa Maria - Curitiba/PR, 2009"},
    {id:6, description: "Banho de lama UFPR - Curitiba/PR, 2009"},
    {id:7, description: "Foz do Iguaçu/PR, 2009"},
    {id:8, description: "Porto Belo/SC, 2010"},
    {id:9, description: "Cabo Frio/RJ, 2011"},
    {id:10, description: "São Pedro da Aldeia/RJ, 2011"},
    {id:11, description: "Roger Waters: The Wall - São Paulo/SP, 2012"},
    {id:12, description: "Amigos 💖 - Curitiba/PR, 2012"},
    {id:13, description: "Trabalho de graduação Gi: nota 10 - UFPR, 2013"},
    {id:14, description: "Formatura da Jeh - Curitiba/PR, 2014"},
    {id:15, description: "Aniversário Mariana - Curitiba/PR, 2015"},
    {id:16, description: "Txupitos! - Curitiba/PR, 2015"},
    {id:17, description: "Casamento Anita e Felipe - Porto Alegre/RS, 2015"},
    {id:18, description: "San Andrés/Colômbia, 2016"},
    {id:19, description: "Primeiro mergulho - San Andrés/Colômbia, 2016"},
    {id:20, description: "Um rema até cair os braços, a outra tira foto - San Andrés/Colômbia, 2016"},
    {id:21, description: "Brasília/DF, 2017"},
    {id:22, description: "Aniversários em família, Curitiba/PR, 2017"},
    {id:23, description: "Casamento Ane e Walda - Curitiba/PR, 2017"},
    {id:24, description: "Formatura Fê (finalmente) - Curitiba/PR, 2017"},
    {id:25, description: "Puzzle Room - Curitiba/PR, 2017"},
    {id:26, description: "Festa de Formatura Fê - Curitiba/PR, 2017"},
    {id:27, description: "Festa de Formatura Fê - Curitiba/PR, 2017"},
    {id:28, description: "Festa de Formatura Carol - Curitiba/PR, 2017"},
    {id:29, description: "Mont Saint-Michel - Normandia/França, 2018"},
    {id:30, description: "Saint-Malo - Normandia/França, 2018"},
    {id:31, description: "Pedido de noivado 💍 -  Étretat, Normandia/França, 2018"},
    {id:32, description: "Pedido aceito 💍 - Étretat, Normandia/França, 2018"},
    {id:33, description: "Étretat, Normandia/França, 2018"},
    {id:34, description: "Arco do Triunfo - Paris/França, 2018"},
    {id:35, description: "Torre Eiffel - Paris/França, 2018"},
    {id:36, description: "Musée d'Orsay - Paris/França, 2018"},
    {id:37, description: "Jardins de Luxemburgo - Paris/França, 2018"},
    {id:38, description: "Mona Lisa, Museu do Louvre - Paris/França, 2018"},
    {id:39, description: "🕊 Notre-Dame 😢 - Paris/França, 2018"},
    {id:40, description: "Jardins do Palácio de Versalhes - Versailles/França, 2018"},
    {id:41, description: "Jardins do Palácio de Versalhes - Versailles/França, 2018"},
    {id:42, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:43, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:44, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:45, description: "Praça de São Pedro - Vaticano, 2018"},
    {id:46, description: "Fê se arrependendo dos seus pecados na Basílica de São Pedro - Vaticano, 2018"},
    {id:47, description: "Imitando a estátua na Piazza Navona - Roma/Itália, 2018"},
    {id:48, description: "Coliseu - Roma/Itália, 2018"},
    {id:49, description: "Arco di Constantino - Roma/Itália, 2018"},
    {id:50, description: "Palatino - Roma/Itália, 2018"},
    {id:51, description: "Roseto di Roma - Roma/Itália, 2018"},
    {id:52, description: "Fontana di Trevi - Roma/Itália, 2018"},
    {id:53, description: "(Fingindo tristeza) The Chaaaaaaampiooooons, Stadio Olimpico - Roma/Itália, 2018"},
    {id:54, description: "Vondelpark - Amsterdam/Holanda, 2018"},
    {id:55, description: "Moinho próximo a Brouwerij 't IJ - Amsterdam/Holanda, 2018"},
    {id:56, description: "Keukenhof - Lisse/Holanda, 2018"},
    {id:57, description: "Keukenhof - Lisse/Holanda, 2018"},
    {id:58, description: "Zaanse Schans - Zaandam/Holanda, 2018"},
    {id:59, description: "Um canal qualquer 💖 - Amsterdam/Holanda, 2018"},
    {id:60, description: "Palais de Paix - Haia/Holanda, 2018"},
    {id:61, description: "Anne Frank Haus - Amsterdam/Holanda, 2018"},
    {id:62, description: "Mercearia Fantinatto - Curitiba/PR, 2018"},
    {id:63, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:64, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:65, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:66, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:67, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:68, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:69, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:70, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:71, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:72, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:73, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:74, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:75, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:76, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:77, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:78, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:79, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"}
]


class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen:false,
            photoIndex:0
        }
    }
    componentDidMount() {
        document.body.addEventListener('keydown', (e) => this.handleKey(e));
    }
    handleClick (event, id) {
        let modal = !this.state.modalOpen;
        this.setState({
            modalOpen: modal, 
            photoIndex: id
        });
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
        if (event.target.id === 'closeModal' || event.target.id === 'desktop-menu' || event.target.id === 'mainContainer' || !document.getElementById('mainContainer').contains(event.target))
            this.setState({modalOpen: false});
    }
    setPreviousImage () {
        const photoIndex = this.state.photoIndex - 1;
        if (photoIndex > 0)
            this.setState({photoIndex: photoIndex});
    }
    setNextImage () {
        const photoIndex = this.state.photoIndex + 1;
        if (photoIndex < galleryTexts.length)
            this.setState({photoIndex: photoIndex});
    }

    renderModal () {
        const swipeParams = {
            lazy: true,
            zoom: true,
            modules: [Pagination, Navigation],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },    
            pagination: {
                el: '.customized-swiper-pagination',
                type: 'fraction',
            },
            containerClass: 'customized-swiper-container',
            slideClass: 'customized-swiper-slide',
            wrapperClass: 'customized-swiper-wrapper',
            initialSlide: this.state.photoIndex
        };

        const renderImageSwiper = galleryTexts.map((thumbnail, id) => {
            let photo = galleryImages(`./`+ thumbnail.id +`.jpg`);
            return (
                <div key={thumbnail.id}>
                    <img className="image-swipe" src={photo} alt={thumbnail.description} />
                    <p className="subtitle regular-text">{thumbnail.description} </p>
                </div>
            )
        });


        if (this.state.modalOpen && !this.props.mobile) {
            const photoSrc = galleryImages(`./`+(this.state.photoIndex)+`.jpg`);
            return (
                <div tabIndex="0" onKeyDown={(e) => this.handleKey(e)} onClick={(e) => this.closeModal(e)} className={this.state.modalOpen ? 'modal-container' : 'display-none'}>
                    <div id="mainContainer" className="main-container">
                        <span className="arrow" onClick={() => this.setPreviousImage()}><FontAwesomeIcon icon="chevron-left" /></span>
                        <div id="galleryModal" className="content-modal">
                            <div className="image-frame">
                                <img className="image-gallery" src={photoSrc} alt={galleryTexts[this.state.photoIndex].description} />
                            </div>
                            <p className="noPadding noMargin regular-text">{galleryTexts[this.state.photoIndex].description}</p>                        
                        </div>
                        <span className="arrow" onClick={() => this.setNextImage()}><FontAwesomeIcon icon="chevron-right" /></span>
                    </div>
                </div>
            )
        } else if (this.state.modalOpen && this.props.mobile) {
            return (
                <div id="mainContainer" tabIndex="0" className={this.state.modalOpen ? 'modal-container' : 'display-none'} onClick={(e) => this.closeModal(e)}>
                    <div id="closeModal" className="close-modal">X</div>
                    <Swiper {...swipeParams}>
                        {renderImageSwiper}
                    </Swiper>
                </div>

            )
        } else return null;
    }
    render () {
        const renderThumbnails = galleryTexts.map((thumbnail, id) => {
            let photo = galleryThumbs(`./`+(thumbnail.id)+`.jpg`);
            return (
                <div key={id} className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(e, thumbnail.id)} >
                    <img className="thumbnail" src={photo} alt={thumbnail.description} />
                </div>
            )
        });

        return (
            <div>
                {this.renderModal()}
                <span id="galeria"><NewSection></NewSection></span>
                <h1>Galeria</h1>
                <div className="gallery flex-center">
                    {renderThumbnails}
                </div>
            </div>
        )
    }
}

export default Gallery;