import React from 'react';
import NewSection from '../components/new_section.jsx';

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
                <p className="regular-text left-align">Aos convidados que não moram em Curitiba, conseguimos um código com 20% de desconto no Hotel Intercity (Rua Constantino Marochi, 591 - Alto da Glória). <span role="img" aria-label="hotel">🏨</span></p>
                <p className="regular-text left-align">A reserva deverá ser feita pelo <a href="https://www.intercityhoteis.com.br/">site próprio</a> utilizando o código <span className="bold">casamentogife</span> e é válido entre os dias ##/11 até ##/11. </p>
                <p className="regular-text left-align">Pensando na comodidade de vocês, marcaremos um dos pontos de encontro das vans em frente ao hotel.</p>
                <br />
                <h2 className="color-pink">Fornecedores</h2>            
            </div>
        )
    }
}

export default Info;