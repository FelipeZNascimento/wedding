import React from 'react';
import axios from 'axios';

import TopBar from '../components/topbar.jsx';
import Loader from "../img/loader.gif";
class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobile:false,
            loading: false,
            fetch: false,
            guests: []
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));

        // this.setState({loading:true, fetch:true});
        // this.apiGet('AB12');
        this.resize();
    }

    resize() {
        if(window.innerHeight > window.innerWidth)
            this.setState({mobile: true})
        else
            this.setState({mobile: false})
    }


    apiGet (code) {
        let url = "https://invitation-confirmation.herokuapp.com/api/confirmation/";
        
        axios.get(url + code)
        .catch(err => {
            alert("Erro: " + err);
        })
        .then(res => {
            this.setState({ 
                guests: res.data,
                loading: false
            });
        })
    }

    apiPost (guest) {
        let url = "https://invitation-confirmation.herokuapp.com/api/confirm/";
        axios.get(url + JSON.stringify(guest))
        .catch(err => {
            alert("Erro: " + err);
        })
        .then(res => {
            alert("foi");
        })
    }

    moveOnMax (event, previousFieldID, nextFieldID) {
        event.preventDefault();

        if (event.keyCode === 37) //left arrow key
            document.getElementById(previousFieldID).focus();
        else if (event.keyCode === 39) //right arrow key
            document.getElementById(nextFieldID).focus();
        else if (event.keyCode === 8) { //backspace
            event.currentTarget.value = "";
            document.getElementById(previousFieldID).focus();
        }

        if (event.keyCode >= 48 && event.keyCode <= 105) {//valid character, fill the form
                if (event.currentTarget.value.length === 0) {
                    event.currentTarget.value = event.key.toUpperCase();
                    document.getElementById(nextFieldID).focus();
                } else {
                    document.getElementById(nextFieldID).value = event.key.toUpperCase();
                    document.getElementById(nextFieldID).focus();
                }
        }
        let code = document.getElementById("first").value + document.getElementById("second").value + document.getElementById("third").value + document.getElementById("fourth").value;
        if (code.length === 4) { //code complete
            this.setState({loading:true, fetch:true});
            this.apiGet(code);
        }
    }

    selectOption (event, id, selection) {
        let guests = this.state.guests;
        for(let i = 0; i < guests.length; i++) {
            if (guests[i].id === id) {
                if (event === 'wedding')
                    guests[i].wedding = selection;
                else guests[i].transportation = selection;
                this.apiPost(guests[i]);
                break;
            }
        }
        this.setState({guests:guests});
    }

    render () {
        const renderGuests = this.state.guests.map((guest, id) => {
            return (
                <tr key={id}>
                    <td className="regular-text">
                        {guest.name}
                    </td>
                    <td>
                        <button onClick={() => this.selectOption('wedding', guest.id, true)} className={(guest.wedding ? 'selected-green' : '')} type="button">Confirmado</button>
                        <button onClick={() => this.selectOption('wedding', guest.id, false)} className={(!guest.wedding ? 'selected-red' : '')} type="button">Não irá</button>
                    </td>
                    <td>
                        <button onClick={() => this.selectOption('transport', guest.id, true)} className={(guest.transportation ? 'selected-green' : '')} type="button">Vou de Van</button>
                        <button onClick={() => this.selectOption('transport', guest.id, false)} className={(!guest.transportation ? 'selected-red' : '')} type="button">Vou de Táxi</button>
                    </td>
                </tr>
            )

            // return (
            //     <MenuButton onClick={() => this.toggleMenu()} key={button.id} link={button.link} description={button.description}/>
            // )
        });

        return (
            <span>
                <TopBar alwaysVisible={true} mobile={this.state.mobile}/>
                <div className={(this.state.fetch ? 'display-none' : 'full-screen flex-center main-content row-align')}>
                    <p className="regular-text bold">Digite aqui seu código de confirmação</p>
                    <p className="regular-text">A sequência de 4 dígitos encontra-se na etiqueta no verso do convite</p>

                    <form className="confirmation">
                        <input autoFocus className="shadowed color-blue" type="text" maxLength="1" id="first" onKeyDown={(e) => this.moveOnMax(e,'first','second')} />
                        <input className="shadowed color-red" type="text" maxLength="1" id="second" onKeyDown={(e) => this.moveOnMax(e,'first','third')} />
                        <input className="shadowed color-yellow" type="text" maxLength="1" id="third" onKeyDown={(e) => this.moveOnMax(e,'second','fourth')} />
                        <input className="shadowed color-green" type="text" maxLength="1" id="fourth" onKeyDown={(e) => this.moveOnMax(e,'third','fourth')} />
                    </form>
                    <br />
                    <p className="small-text">Caso tenha perdido seu código ou encontre algum problema com a confirmação, entre em contato com os noivos.</p>
                </div>
                <div className={(this.state.loading ? 'full-screen flex-center main-content row-align' : 'display-none')}>
                    <img src={Loader} alt="loading"></img>
                </div>
                {/* <div className={(this.state.fetch && this.state.guests.length > 0 ? 'full-screen flex-center main-content row-align' : 'display-none')}> */}
                <div className="full-screen flex-center main-content row-align">
                    <table className="guests-table">
                        <thead>
                            <tr>
                                <th className="regular-text">
                                    Convidado
                                </th>
                                <th className="regular-text">
                                    Casamento
                                </th>
                                <th className="regular-text">
                                    Transporte
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderGuests}
                        </tbody>
                    </table>
                    <br />
                    <p className="small-text">Se os nomes aqui dispostos não forem relacionados a você, por favor entre em contato com os noivos.</p>
                </div>
                
            </span>
        )
    }
}

export default Confirmation;
