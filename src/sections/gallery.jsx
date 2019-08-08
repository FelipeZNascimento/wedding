import React from 'react';
import NewSection from '../components/new_section.jsx';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const galleryImages = require.context('../img/gallery', true);
const galleryThumbs = require.context('../img/gallery/thumbs', true);
library.add(faChevronLeft, faChevronRight);

let galleryTexts = [
    {id:0, description: "Tapejara/RS, 2008"},
    // {id:1, description: ""},
    {id:2, description: "Pedido de namoro - Curitiba/PR, 2008"},
    {id:3, description: "Amigos 💖 - Curitiba/PR, 2008"},
    {id:4, description: ""},
    {id:5, description: "Formatura Ensino Médio, Santa Maria - Curitiba/PR, 2009"},
    {id:6, description: "Banho de lama UFPR - Curitiba/PR, 2009"},
    {id:7, description: "Foz do Iguaçu/PR, 2009"},
    {id:8, description: "Porto Belo/SC, 2010"},
    {id:9, description: "Saudades vô Ivory, São José dos Pinhais/PR, 2010"},
    {id:10, description: "Cabo Frio/RJ, 2011"},
    {id:11, description: "São Pedro da Aldeia/RJ, 2011"},
    {id:12, description: "Roger Waters: The Wall - São Paulo/SP, 2012"},
    {id:13, description: "Amigos 💖 - Curitiba/PR, 2012"},
    {id:14, description: "Monografia da Gi: nota 10 - UFPR, 2013"},
    {id:15, description: "Formatura da Jeh - Curitiba/PR, 2014"},
    {id:16, description: "Aniversário da Mariana - Curitiba/PR, 2015"},
    {id:17, description: "Aniversário da Nat (TXUPITOS) - Curitiba/PR, 2015"},
    {id:18, description: "Casamento Anita e Felipe - Porto Alegre/RS, 2015"},
    {id:19, description: "San Andrés/Colômbia, 2016"},
    {id:20, description: "Primeiro mergulho - San Andrés/Colômbia, 2016"},
    {id:21, description: "Um rema até cair os braços, a outra tira foto - San Andrés/Colômbia, 2016"},
    {id:22, description: "Batizado da Manu, Curitiba/PR, 2016"},
    {id:23, description: "Brasília/DF, 2017"},
    {id:24, description: "Aniversários em família, Curitiba/PR, 2017"},
    {id:25, description: "Casamento Ane e Walda - Curitiba/PR, 2017"},
    {id:26, description: "Formatura Fê (finalmente) - Curitiba/PR, 2017"},
    {id:27, description: "Puzzle Room - Curitiba/PR, 2017"},
    {id:28, description: "Festa de Formatura Fê - Curitiba/PR, 2017"},
    {id:29, description: "Festa de Formatura Fê - Curitiba/PR, 2017"},
    {id:30, description: "Festa de Formatura Lê - Curitiba/PR, 2017"},
    {id:31, description: "Mont Saint-Michel - Normandia/França, 2018"},
    {id:32, description: "Saint-Malo - Normandia/França, 2018"},
    {id:33, description: "Pedido de noivado 💍 -  Étretat, Normandia/França, 2018"},
    {id:34, description: "Pedido aceito 💍 - Étretat, Normandia/França, 2018"},
    {id:35, description: "Étretat, Normandia/França, 2018"},
    {id:36, description: "Arco do Triunfo - Paris/França, 2018"},
    {id:37, description: "Torre Eiffel - Paris/França, 2018"},
    {id:38, description: "Musée d'Orsay - Paris/França, 2018"},
    {id:39, description: "Jardins de Luxemburgo - Paris/França, 2018"},
    {id:40, description: "Mona Lisa, Museu do Louvre - Paris/França, 2018"},
    {id:41, description: "🕊 Notre-Dame 😢 - Paris/França, 2018"},
    {id:42, description: "Jardins do Palácio de Versalhes - Versailles/França, 2018"},
    {id:43, description: "Jardins do Palácio de Versalhes - Versailles/França, 2018"},
    {id:44, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:45, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:46, description: "Parc de Sceaux - Sceaux/França, 2018"},
    {id:47, description: "Praça de São Pedro - Vaticano, 2018"},
    {id:48, description: "Fê se arrependendo dos seus pecados na Basílica de São Pedro - Vaticano, 2018"},
    {id:49, description: "Imitando a estátua na Piazza Navona - Roma/Itália, 2018"},
    {id:50, description: "Coliseu - Roma/Itália, 2018"},
    {id:51, description: "Arco di Constantino - Roma/Itália, 2018"},
    {id:52, description: "Palatino - Roma/Itália, 2018"},
    {id:53, description: "Roseto di Roma - Roma/Itália, 2018"},
    {id:54, description: "Fontana di Trevi - Roma/Itália, 2018"},
    {id:55, description: "(Fingindo tristeza) The Chaaaaaaampiooooons, Stadio Olimpico - Roma/Itália, 2018"},
    {id:56, description: "Vondelpark - Amsterdam/Holanda, 2018"},
    {id:57, description: "Moinho da Brouwerij 't IJ - Amsterdam/Holanda, 2018"},
    {id:58, description: "Keukenhof - Lisse/Holanda, 2018"},
    {id:59, description: "Keukenhof - Lisse/Holanda, 2018"},
    {id:60, description: "Zaanse Schans - Zaandam/Holanda, 2018"},
    {id:61, description: "Um canal qualquer 💖 - Amsterdam/Holanda, 2018"},
    {id:62, description: "Palais de Paix - Haia/Holanda, 2018"},
    {id:63, description: "Anne Frank Haus - Amsterdam/Holanda, 2018"},
    {id:64, description: "Mercearia Fantinatto - Curitiba/PR, 2018"},
    {id:65, description: "2 anos da Manu 🎉 - Curitiba/PR, 2018"},
    {id:66, description: "Aniversário da Gih com as famílias - Curitiba/PR, 2018"},
    {id:67, description: "Churrasqueira HUB - Curitiba/PR, 2018"},
    {id:68, description: "Escape 60 - Curitiba/PR, 2018"},
    {id:69, description: "👊 - Matinhos/PR, 2018"},
    {id:70, description: "Melhor barreado do sul do mundo - Curitiba/PR, 2018"},
    {id:71, description: "Festa da calcinha na cabeça by Manu - Curitiba/PR, 2019"},
    {id:72, description: "Nando nos visitando - Curitiba/PR, 2019"},
    {id:73, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:74, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:75, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:76, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:77, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:78, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:79, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:80, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:81, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:82, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:83, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:84, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:85, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:86, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:87, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:88, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"},
    {id:89, description: "Ensaio pré-casamento - Balsa Nova/PR, 2019"}    
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
    componentWillUnmount() {
        document.body.removeEventListener('keydown', (e) => this.handleKey(e));
    }

    handleLoad (event) {
        console.log("Loadeou: ");
    }
    handleClick (id) {
        let modal = !this.state.modalOpen;
        this.setState({
            modalOpen: modal, 
            photoIndex: id
        });
    }
    handleKey (event) {
        if (this.state.modalOpen) {
            if (event.keyCode === 27)
                this.closeModal(event);
        }        
    }
    closeModal (event) {
        if (event.target.id === 'closeModal' || (event.target.id !== 'subtitle' && event.target.className !== 'image-swipe' && !event.target.classList.contains('swiper-button-prev') && !event.target.classList.contains('swiper-button-next')))
            this.setState({modalOpen: false});
    }

    renderModal () {
        const swipeParams = {
            modules: [Pagination, Navigation],
            keyboard: true,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2,
            },    
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
                    <img className="image-swipe swiper-lazy" data-src={photo} alt={thumbnail.description} />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                    <p id="subtitle" className="subtitle regular-text">{thumbnail.description} </p>
                </div>
            )
        });


        if (this.state.modalOpen) {
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
                <div key={id} className="thumbnail-frame shadowed" onClick={(e) => this.handleClick(id)} >
                    <img className='thumbnail' src={photo} alt={thumbnail.description} />
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