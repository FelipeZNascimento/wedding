import React from 'react';
import NewSection from '../components/new_section.jsx';
import Names from '../img/names.png';
import Info from '../img/info.png';

class Event extends React.Component {
    render () {
        let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.764792877699!2d-49.3831936!3d-25.4903283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd1d74f8465bcb%3A0x4f988703ee8aa7aa!2sEspa%C3%A7o+Belvedere+Eventos!5e0!3m2!1sen!2sbr!4v1555371860587!5m2!1sen!2sbr" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>';
        return (
            <div>
                <span id="evento"><NewSection></NewSection></span>
                <div>
                    <img className="names" src={Names} alt="names"></img>
                    <p className="regular-text">juntamente com suas famílias<br /> convidam para a cerimônia de casamento</p>
                </div>
                <img className="names" src={Info} alt="Info"></img>
                <p className="regular-text bold">Espaço Belvedere Eventos</p>
                <p className="regular-text bold noMargin">
                    <a href="https://goo.gl/maps/qMXA5iJ3jss">Rua Silvio Dallagrana, 5400 Ferraria - Zona Rural, Campo Largo</a>
                </p>                    
                <div className="hide-on-mobile" dangerouslySetInnerHTML={{__html: iframe }} />
            </div>
        )
    }
}

export default Event;