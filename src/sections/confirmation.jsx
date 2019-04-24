import React from 'react';
import TopBar from '../components/topbar.jsx';
import Loader from "../img/loader.gif";
class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }
    moveOnMax (event, previousFieldID, nextFieldID) {
        if (event.keyCode === 37 || event.keyCode === 8) {
            document.getElementById(previousFieldID).focus();
        } else if (event.keyCode === 39) {
            document.getElementById(nextFieldID).focus();
        } else if (event.currentTarget.value.length === 1) {
            event.currentTarget.value = event.currentTarget.value.toUpperCase();
            document.getElementById(nextFieldID).focus();
            if (previousFieldID === "third") {
                let code = document.getElementById("first").value + document.getElementById("second").value + document.getElementById("third").value + document.getElementById("fourth").value;
                this.setState({loading:true});
                //chama função pra buscar convidados
            }
        }
    }

    render () {

        return (
            <span>
                <TopBar alwaysVisible={true} mobile={this.state.mobile}/>
                <div className="full-screen flex-center main-content row-align">
                    <p className="regular-text bold">Digite aqui seu código de confirmação</p>
                    <p className="regular-text">A sequência de 4 dígitos encontra-se na etiqueta no verso do convite</p>

                    <form className={(this.state.loading ? 'display-none' : 'confirmation')}>
                        <input className="shadowed color-blue" type="text" maxLength="1" id="first" onKeyUp={(e) => this.moveOnMax(e,'first','second')} />
                        <input className="shadowed color-red" type="text" maxLength="1" id="second" onKeyUp={(e) => this.moveOnMax(e,'first','third')} />
                        <input className="shadowed color-yellow" type="text" maxLength="1" id="third" onKeyUp={(e) => this.moveOnMax(e,'second','fourth')} />
                        <input className="shadowed color-green" type="text" maxLength="1" id="fourth" onKeyUp={(e) => this.moveOnMax(e,'third','fourth')} />
                    </form>
                    <br />
                    <p className="small-text">Caso tenha perdido seu código ou encontre algum problema com a confirmação, entre em contato com um dos noivos.</p>
                    {/* <img src={Loader} alt="alalala"></img> */}
                </div>
                
            </span>
        )
    }
}

export default Confirmation;
