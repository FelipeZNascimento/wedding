import React from 'react';
import NewSection from '../components/new_section.jsx';

class Gifts extends React.Component {
    render () {
        return (
            <div>
                <span id="presentes"><NewSection></NewSection></span>
                <h1>Presentes</h1>
                <p className="regular-text bold">Amigos e familiares, caso queiram nos ajudar a iniciar a vida de casados, deixamos logo abaixo o link da nossa lista de presentes.</p>
                <p className="regular-text bold">Ao clicar no link, você será encaminhado ao site iCasei e poderá efetuar o pagamento como preferir - à vista, a prazo e até fiado.</p>
                <br />
                <p className="regular-text bold hide-on-mobile"><a target="_blank" rel="noopener noreferrer" href="https://sites.icasei.com.br/felipegiovanna/pt_br/store/9/1/1">Lista de Presentes</a></p>
                <p className="regular-text bold hide-on-desktop"><a href="https://sites.icasei.com.br/felipegiovanna/pt_br/store/9/1/1">Lista de Presentes</a></p>
                <br />
                <p className="regular-text">Agradecemos a lembrança <span role="img" aria-label="heart">💖</span></p>
            </div>
        )
    }
}

export default Gifts;