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
                <p className="regular-text bold">Atendendo a pedidos, podes também fazer o depósito direto em nossas contas bancárias!</p>
                <div className="full-width accounts-cointainer">
                    <div className="account regular-text">
                        <b>Banco do Brasil (001)</b><br />
                        Felipe Zanon do Nascimento<br />
                        CPF 050 143 229 99<br />
                        Agência 0982-2<br />
                        C/C 47930-6
                    </div>
                    <div className="account regular-text">
                        <b>Nu Bank (260)</b><br />
                        Felipe Zanon do Nascimento<br />
                        CPF 050 143 229 99<br />
                        Agência 0001<br />
                        C/C 426087-4
                    </div>
                    <div className="account regular-text">
                        <b>Itaú (341)</b><br />
                        Giovanna De Marchi Capeletto<br />
                        CPF 081 691 819 84<br />
                        Agência 9145<br />
                        C/C 00591-5                       
                    </div>
                </div>
                <br />
                <p className="regular-text">Agradecemos a lembrança <span role="img" aria-label="heart">💖</span></p>
            </div>
        )
    }
}

export default Gifts;