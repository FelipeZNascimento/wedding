import React from 'react';
import { Parallax } from 'react-parallax';
import NewSection from '../components/new_section.jsx';

import Names from '../img/names.png';
import Info from '../img/info.png';
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

        let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.764792877699!2d-49.3831936!3d-25.4903283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd1d74f8465bcb%3A0x4f988703ee8aa7aa!2sEspa%C3%A7o+Belvedere+Eventos!5e0!3m2!1sen!2sbr!4v1555371860587!5m2!1sen!2sbr" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>';

        return (
            <div>
                <div className="main-content">
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
                    <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../img/parallax07.jpg')}
                    bgImageAlt="the dog"
                    strength={parallaxStr}
                    style={{ height: parallaxHeight, backgroundPosition: 'center'}}
                    >
                    </Parallax>
                    <span id="info"><NewSection></NewSection></span>
                    <h1>Informações</h1>
                    <h2 className="color-blue">Trajes</h2>
                    <p className="regular-text left-align"><span className="bold">Homens</span>: Passeio completo - mas a gente não vai se incomodar se quiser tirar o paletó logo cedo. 😉</p>
                    <p className="regular-text left-align"><span className="bold">Mulheres</span>: Vestido longo, midi ou curto... fique à vontade! Lembre-se que casaremos em uma chácara então escolha um sapato confortável e dance até tarde. 💃</p>
                    <br />
                    <h2 className="color-red">Transporte</h2>
                    <p className="regular-text left-align">O Espaço Belvedere localiza-se às margens do Lago Passaúna, na zona rural de Campo Largo (Região Metropolitana de Curitiba). Os últimos kilômetros são em estrada de chão batido, pouca iluminação e visibilidade difícil.</p>
                    <p className="regular-text left-align">Pensando nisso, recomendamos enfaticamente que <span className="bold">todos</span> dirijam-se aos pontos de encontro para que façam a viagem em vans. 🚐</p>
                    <p className="regular-text left-align">Maiores informações (custo, horário, pontos de encontro) serão repassadas aos interessados que confirmarem a presença.</p>
                    <p className="regular-text"><span className="bold">⚠️ ️️️Recomendamos bastante que sigam a nossa sugestã️o️ ⚠️</span></p>
                    <p className="regular-text">🥂 Assim todos podem beber a vontade sem se preocupar em relembrar o caminho de volta 🥂</p>
                    <br />
                    <h2 className="color-yellow">Hospedagem</h2>
                    <p className="regular-text left-align">Aos convidados que não moram em Curitiba, conseguimos um código com 20% de desconto no Hotel Intercity (Rua Constantino Marochi, 591 - Alto da Glória). 🏨</p>
                    <p className="regular-text left-align">A reserva deverá ser feita pelo <a href="#">site próprio</a> utilizando o código <span className="bold">casamentogife</span> e é válido entre os dias ##/11 até ##/11. </p>
                    <p className="regular-text left-align">Pensando na comodidade de vocês, marcaremos um dos pontos de encontro das vans em frente ao hotel.</p>
                    <br />
                    <h2 className="color-pink">Fornecedores</h2>
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
                    <span id="presentes"><NewSection></NewSection></span>
                    <h1>Presentes</h1>
                    <p className="regular-text bold">Amigos e familiares, caso queiram nos ajudar a iniciar a vida de casados, deixamos logo abaixo o link da nossa lista de presentes.</p>
                    <p className="regular-text bold">Ao clicar no link, você será encaminhado ao site iCasei e poderá efetuar o pagamento como preferir - à vista, a prazo e até fiado.</p>
                    <br />
                    <p className="regular-text bold hide-on-mobile"><a target="_blank" href="https://sites.icasei.com.br/felipegiovanna/pt_br/store/9/1/1">Lista de Presentes</a></p>
                    <p className="regular-text bold hide-on-desktop"><a href="https://sites.icasei.com.br/felipegiovanna/pt_br/store/9/1/1">Lista de Presentes</a></p>
                    <br />
                    <p className="regular-text">Agradecemos a lembrança 💖</p>
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