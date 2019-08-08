import React from 'react';
import axios from 'axios';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import TopBar from '../components/topbar.jsx';
import Spinner from "../img/logo_spinner.png";
const apiUrl = "https://invitation-confirmation.herokuapp.com/api/";

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
        document.body.addEventListener('input', (e) => this.moveOnMax(e));
        document.body.addEventListener('keyup', (e) => this.selector(e));
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        const loader = document.getElementById('loader');
        if(loader){
            loader.classList.add('available');
            loader.outerHTML = '';
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener('input', (e) => this.moveOnMax(e));
        document.body.removeEventListener('keyup', (e) => this.selector(e));
        window.removeEventListener("resize", this.resize.bind(this));
    }

    resize() {
        if(window.innerHeight > window.innerWidth)
            this.setState({mobile: true})
        else
            this.setState({mobile: false})
    }

    clearForm() {
        document.getElementById("first").value = '';
        document.getElementById("second").value = '';
        document.getElementById("third").value = '';
        document.getElementById("fourth").value = '';
        document.getElementById("fifth").value = '';
        document.getElementById("sixth").value = '';
        document.getElementById("seventh").value = '';
        document.getElementById("eighth").value = '';

        if (this.state.mobile)
            document.getElementById("fifth").focus();
        else
            document.getElementById("first").focus();
    }
    apiGet (code) {
        let url = apiUrl + "confirmation/";        
        axios.get(url + code)
        .catch(err => {
            alert("Erro: " + err);
        })
        .then(res => {
            this.clearForm();
            this.setState({ 
                guests: res.data,
                loading: false,
                fetch: true
            });
        })
    }

    apiPost (guest) {
        let url = apiUrl + "confirm/" + JSON.stringify(guest);        
        axios.get(url)
        .catch(err => {
            alert("Erro: " + err);
            ToastsStore.error('Ops, algo errado. Por favor, atualize a página e tente novamente.');
        })
        .then(res => {
            ToastsStore.success('Alteração salva com sucesso!', '', 'regular-text');
        })
    }
    selector (event) {
        let previousField = !event.target.previousSibling ? event.target : event.target.previousSibling;
        let nextField = !event.target.nextSibling ? event.target : event.target.nextSibling;

        if (event.which === 37) { //left arrow key
            previousField.focus();
            event.preventDefault();
            return;
        } else if (event.which === 39) { //right arrow key
            nextField.focus();
            event.preventDefault();
            return;
        } else if (event.which === 8) { //backspace
            event.currentTarget.value = "";
            previousField.focus();
            event.preventDefault();
            return;
        }

        
    }

    moveOnMax (event) {
        event.preventDefault();

        let previousField = !event.target.previousSibling ? event.target : event.target.previousSibling;
        let nextField = !event.target.nextSibling ? event.target : event.target.nextSibling;

        if (event.altKey || event.ctrlKey || event.shiftKey || (event.which !== 0 && (event.which < 48 || event.which > 105)))
            return;

        let key = event.key ? event.key : event.data;

        if (event.type !== "input") {
            if (event.currentTarget.value.length === 0)
                event.currentTarget.value = key;
            else
                nextField.value = key;
        }
        if (event.inputType === "insertText" || event.inputType === "insertCompositionText" || !event.inputType)
            nextField.focus();

        let code = document.getElementById("first").value + document.getElementById("second").value + document.getElementById("third").value + document.getElementById("fourth").value + document.getElementById("fifth").value + document.getElementById("sixth").value + document.getElementById("seventh").value + document.getElementById("eighth").value;
        if (code.length === 4) { //code complete
            code = code.toUpperCase();
            this.setState({loading:true, fetch:true});
            this.apiGet(code);
        }
    }

    selectOption (event, id, selection) {
        let guests = this.state.guests;
        for(let i = 0; i < guests.length; i++) {
            if (guests[i]._id === id) {
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
                        <button onClick={() => this.selectOption('wedding', guest._id, true)} className={(guest.wedding ? 'selected-green' : '')} type="button">Confirmado</button>
                        <button onClick={() => this.selectOption('wedding', guest._id, false)} className={(guest.wedding === false ? 'selected-red' : '')} type="button">Não irá</button>
                    </td>
                    <td>
                        <button onClick={() => this.selectOption('transport', guest._id, true)} className={(guest.transportation ? 'selected-green' : '')} type="button">Vou de Van</button>
                        <button onClick={() => this.selectOption('transport', guest._id, false)} className={(guest.transportation === false ? 'selected-red' : '')} type="button">Vou de Táxi</button>
                    </td>
                </tr>
            )
        });

        return (
            <span>
                <TopBar alwaysVisible={true} mobile={this.state.mobile}/>
                <div className={(this.state.loading || (this.state.fetch && this.state.guests.length > 0) ? 'display-none' : 'full-width flex-center main-content row-align confirmation-container')}>
                    <p className="regular-text bold">Digite aqui seu código de confirmação</p>
                    <p className="regular-text">A sequência de 4 dígitos encontra-se na etiqueta no verso do convite</p>

                    <form className="confirmation">
                    <span className="hide-on-mobile">
                            <input autoFocus className="shadowed color-blue" type="text" maxLength="1" id="first" />
                            <input className="shadowed color-red" type="text" maxLength="1" id="second" />
                            <input className="shadowed color-yellow" type="text" maxLength="1" id="third" />
                            <input className="shadowed color-green" type="text" maxLength="1" id="fourth" />
                        </span>
                        <span className="hide-on-desktop">
                            <input autoFocus className="shadowed color-blue" type="text" maxLength="1" id="fifth" />
                            <input className="shadowed color-red" type="text" maxLength="1" id="sixth" />
                            <input className="shadowed color-yellow" type="text" maxLength="1" id="seventh" />
                            <input className="shadowed color-green" type="text" maxLength="1" id="eighth" />
                        </span>
                    </form>
                    <br />
                    <p className={(this.state.fetch && this.state.guests.length === 0 ? 'small-text color-red bold' : 'display-none')}>Código não encontrado.</p>
                    <p className="small-text">Caso tenha perdido seu código ou encontre algum problema com a confirmação, entre em contato com os noivos.</p>
                </div>
                <div className={(this.state.loading ? 'full-width flex-center main-content row-align full-height' : 'display-none')}>
                    <div className='spinner-bg'>
                        <img className="spinner" src={Spinner} alt="loading"></img>
                    </div>
                    <p className="regular-text bold">Carregando...</p>
                </div>
                <div className={(!this.state.loading && this.state.fetch === true && this.state.guests.length > 0 ? 'full-width flex-center main-content row-align confirmation-container' : 'display-none')}>
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
                    <p className="small-text">Se os nomes aqui listados não forem relacionados a você, por favor entre em contato com os noivos.</p>
                    <a href="/#home"><button type="button">Salvar e voltar</button></a>
                </div>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} lightBackground/>
            </span>
        )
    }
}

export default Confirmation;
