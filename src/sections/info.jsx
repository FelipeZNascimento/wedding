import React from 'react';
import NewSection from '../components/new_section.jsx';
import belvedere from '../img/fornecedores/belvedere.jpg';
import eudemar from '../img/fornecedores/eudemar.jpg';
import viviane from '../img/fornecedores/viviane.jpg';
import colecao from '../img/fornecedores/colecao.jpg';
import vero from '../img/fornecedores/vero.jpg';
import diego from '../img/fornecedores/diego.jpg';
import fernanda from '../img/fornecedores/fernanda.jpg';
import mfg from '../img/fornecedores/mfg.jpg';
import edson from '../img/fornecedores/edson.jpg';
import meirelles from '../img/fornecedores/meirelles.png';
import filme from '../img/fornecedores/filme.jpg';

class Info extends React.Component {
    render () {
        return (
            <div>
                <span id="info"><NewSection></NewSection></span>
                <h1>Informações</h1>
                <h2 className="color-blue">Trajes</h2>
                <p className="regular-text left-align">
                    <span className="bold">Homens</span>: Passeio completo - mas a gente não vai se incomodar se quiser tirar o paletó logo cedo.<span role="img" aria-label="wink">😉</span>
                </p>
                <p className="regular-text left-align">
                    <span className="bold">Mulheres</span>: Vestido longo, midi ou curto... fique à vontade! Lembre-se que casaremos em uma chácara então escolha um sapato confortável e dance até tarde. <span role="img" aria-label="dance">💃</span>
                </p>
                <br />
                <h2 className="color-red">Transporte</h2>
                <p className="regular-text left-align">O Espaço Belvedere localiza-se às margens do Lago Passaúna, na zona rural de Campo Largo (Região Metropolitana de Curitiba). Os últimos kilômetros são em estrada de chão batido, pouca iluminação e visibilidade difícil.</p>
                <p className="regular-text left-align">Pensando nisso, recomendamos enfaticamente que <span className="bold">todos</span> dirijam-se aos pontos de encontro para que façam a viagem em vans. <span role="img" aria-label="van">🚐</span></p>
                <p className="regular-text left-align">Maiores informações (custo, horário, pontos de encontro) serão repassadas aos interessados que confirmarem a presença.</p>
                <p className="regular-text"><span role="img" aria-label="alert">⚠️</span> ️️️<span className="bold">Recomendamos bastante que sigam a nossa sugestã️o️</span> <span role="img" aria-label="alert">⚠️</span></p>
                <p className="regular-text"><span role="img" aria-label="drink">🥂</span> <span className="bold">Assim todos podem beber a vontade sem se preocupar em relembrar o caminho de volta</span> <span role="img" aria-label="drink">🥂</span></p>
                <br />
                <h2 className="color-yellow">Hospedagem</h2>
                <p className="regular-text left-align">Aos convidados que não moram em Curitiba, conseguimos um código com 20% de desconto em qualquer quarto do <a href="https://www.intercityhoteis.com.br/">Hotel Intercity</a> (Rua Constantino Marochi, 591 - Alto da Glória). <span role="img" aria-label="hotel">🏨</span></p>
                <p className="regular-text left-align">A reserva deverá ser feita pelo <a href="https://www.intercityhoteis.com.br/">site próprio</a> utilizando o código "<span className="bold">GIFE</span>" - válido entre os dias 06/11 e 14/11. </p>
                <p className="regular-text left-align">Pensando na comodidade de vocês, marcaremos um dos pontos de encontro das vans em frente ao hotel.</p>
                <br />
                <h2 className="color-pink">Fornecedores</h2>
                <div className="full-width providers-cointainer">
                    <div className="provider-box">
                        <a href="https://www.espacobelvedere.com.br/">
                            <img className="provider" src={belvedere} alt="Espaço Belvedere" />
                            <p className="small-text">Espaço Belvedere</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/chefeudemarcavalcanti/">
                            <img className="provider" src={eudemar} alt="Eudemar Cavalcanti" />
                            <p className="small-text">Chef Eudemar Cavalcanti</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.vfcerimonial.com.br/">
                            <img className="provider" src={viviane} alt="Viviane Faria" />
                            <p className="small-text">Cerimonial Viviane Faria</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/colecaodepapel/">
                            <img className="provider" src={colecao} alt="Coleção de Papel" />
                            <p className="small-text">Papelaria Coleção de Papel</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://veroebruno.com.br">
                            <img className="provider" src={vero} alt="Vero e Bruno" />
                            <p className="small-text">Fotografia Vero e Bruno</p>
                            </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/facelebrante/">
                            <img className="provider" src={fernanda} alt="Fernanda Althoff" />
                            <p className="small-text">Celebrante Fernanda Althoff</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/dj_diego.cg/">
                            <img className="provider" src={diego} alt="DJ Diego Gabriel" />
                            <p className="small-text">DJ Diego Gabriel</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/mfg.decor/">
                            <img className="provider" src={mfg} alt="Maria Fernanda e Guilherme" />
                            <p className="small-text">MFG Decor</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/edsoncakes/">
                            <img className="provider" src={edson} alt="Edson Cakes" />
                            <p className="small-text">Edson Cakes</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="http://www.meirellesjoias.com.br/">
                            <img className="provider" src={meirelles} alt="Meirelles Joias" />
                            <p className="small-text">Meirelles Joias</p>
                        </a>
                    </div>
                    <div className="provider-box">
                        <a href="https://www.instagram.com/portaretratofilmes/">
                            <img className="provider" src={filme} alt="Porta Retrato Filmes" />
                            <p className="small-text">Porta Retrato Filmes</p>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Info;