import React from 'react';
import axios from 'axios';
import TopBar from '../components/topbar.jsx';
import Spinner from "../img/logo_spinner.png";
const apiUrl = "https://invitation-confirmation.herokuapp.com/api/";

class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobile:false,
            loading: true,
            fetch: false,
            guests: [],
            sortProperty: "name",
            sortAsc: true,
            selectedGuests : [],
            guestsNum: 0,
            guestsWedding: 0,
            guestsWeddingNot: 0,
            guestsTransport: 0,
            guestsTransportNot: 0,
            guestsUnanswered: 0
        }
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.apiGet();

        const loader = document.getElementById('loader');
        if(loader){
            loader.classList.add('available');
            loader.outerHTML = '';
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    resize() {
        if(window.innerHeight > window.innerWidth)
            this.setState({mobile: true})
        else
            this.setState({mobile: false})
    }
    countGuests(guests) {
        let guestsNum = guests.length;
        let guestsWedding = 0;
        let guestsWeddingNot = 0;
        let guestsWeddingNull = 0;
        let guestsTransport = 0;
        let guestsTransportNot = 0;
        let guestsTransportNull = 0;

        for (let i = 0; i < guests.length; i++) {
            if (guests[i].wedding === true)
                guestsWedding++;
            else if (guests[i].wedding === false)
                guestsWeddingNot++;
            else guestsWeddingNull++;

            if (guests[i].transportation === true)
                guestsTransport++;
            else if (guests[i].transportation === false)
                guestsTransportNot++;
            else guestsTransportNull++;
        }

        this.setState({
            guestsNum: guestsNum, 
            guestsWedding: guestsWedding, 
            guestsWeddingNot: guestsWeddingNot,
            guestsWeddingNull: guestsWeddingNull, 
            guestsTransport: guestsTransport, 
            guestsTransportNot: guestsTransportNot, 
            guestsTransportNull: guestsTransportNull
        });
    }
    apiGet() {
        let url = apiUrl + "confirmation/";        
        axios.get(url)
        .catch(err => {
            alert("Erro: " + err);
        })
        .then(res => {
            res.data.sort(this.dynamicSort("name"));
            this.countGuests(res.data);
            this.setState({ 
                guests: res.data,
                loading: false,
                fetch: true,
                sortProperty: "name",
                sortAsc: true
            });
        })
    }
    dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            if (property === "wedding" || property === "transportation") 
                var result = (a[property] === b[property]) ? 0 : a[property] ? -1 : 1;
            else
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

            return result * sortOrder;
        }
    }      
    sortGuests(sortProperty) {
        var obj = [...this.state.guests];
        var sortAsc = this.state.sortAsc;
        if (sortProperty === this.state.sortProperty) {
            sortAsc = !sortAsc;
            if (!sortAsc)
            sortProperty = "-" + sortProperty;
        }

        obj.sort(this.dynamicSort(sortProperty));
        this.setState({guests: obj, sortAsc: sortAsc, sortProperty: sortProperty});
    }

    openModal(code) {
        let selectedGuests = [];
        for(let i = 0; i < this.state.guests.length; i++) {
            if (this.state.guests[i].code === code)
                selectedGuests.push(this.state.guests[i]);
        }
        this.setState({selectedGuests: selectedGuests});
    }
    closeModal() {
        this.setState({selectedGuests: []})
    }
    handleClick (event) {
        if (!document.getElementById('modal-container').contains(event.target))
            this.closeModal();
    }

    render () {
        const renderGuests = this.state.guests.map((guest, id) => {
            return (
                <tr key={id}>
                    <td className="regular-text">
                        {guest.name}
                    </td>
                    <td className="regular-text link" onClick={() => this.openModal(guest.code)}>
                        {guest.code}
                    </td>
                    <td>
                        <button className={(guest.wedding ? 'selected-green' : 'display-none')} type="button">Confirmado</button>
                        <button className={(guest.wedding === false ? 'selected-red' : 'display-none')} type="button">Não irá</button>
                        <button className={(guest.wedding === null ? '' : 'display-none')} type="button">-----</button>
                    </td>
                    <td>
                        <button className={(guest.transportation ? 'selected-green' : 'display-none')} type="button">Vou de Van</button>
                        <button className={(guest.transportation === false ? 'selected-red' : 'display-none')} type="button">Vou de Táxi</button>
                        <button className={(guest.transportation === null ? '' : 'display-none')} type="button">-----</button>
                    </td>
                </tr>
            )
        });

        const renderSelectedGuests = this.state.selectedGuests.map((guest, id) => {
            return (
                <tr key={id}>
                    <td className="regular-text">
                        {guest.name}
                    </td>
                    <td className="regular-text" onClick={() => this.openModal(guest.code)}>
                        {guest.code}
                    </td>
                    <td>
                        <button className={(guest.wedding ? 'selected-green' : 'display-none')} type="button">Confirmado</button>
                        <button className={(guest.wedding === false ? 'selected-red' : 'display-none')} type="button">Não irá</button>
                        <button className={(guest.wedding === null ? '' : 'display-none')} type="button">-----</button>
                    </td>
                    <td>
                        <button className={(guest.transportation ? 'selected-green' : 'display-none')} type="button">Vou de Van</button>
                        <button className={(guest.transportation === false ? 'selected-red' : 'display-none')} type="button">Vou de Táxi</button>
                        <button className={(guest.transportation === null ? '' : 'display-none')} type="button">-----</button>
                    </td>
                </tr>
            )
        });

        return (
            <span>
                <TopBar alwaysVisible={true} mobile={this.state.mobile}/>
                <div className={this.state.selectedGuests.length > 0 ? 'full-width flex-center modal-guests-container' : 'display-none'} onClick={(e) => this.handleClick(e)}>
                    <div id="modal-container" className="modal-guests shadowed">
                        <p className="modal-close noPadding noMargin" onClick={() => this.closeModal()}>X</p>
                        <table>
                            <tbody>
                                {renderSelectedGuests}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={(this.state.loading ? 'full-width flex-center main-content row-align full-height' : 'display-none')}>
                    <div className='spinner-bg'>
                        <img className="spinner" src={Spinner} alt="loading"></img>
                    </div>
                    <p className="regular-text bold">Carregando...</p>
                </div>
                <div className={(!this.state.loading ? 'full-width flex-center main-content row-align confirmation-container' : 'display-none')}>
                    <table className="guests-table">
                        <thead>
                            <tr>
                                <th>Convidados: {this.state.guestsNum}</th>
                                <th>&nbsp;</th>
                                <th><span className="color-green">{this.state.guestsWedding}</span> | <span className="color-red">{this.state.guestsWeddingNot}</span> | {this.state.guestsWeddingNull}</th>
                                <th><span className="color-green">{this.state.guestsTransport}</span> | <span className="color-red">{this.state.guestsTransportNot}</span> | {this.state.guestsTransportNull}</th>
                            </tr>
                            <tr>
                                <th className="regular-text link" onClick={(e) => this.sortGuests("name")}>
                                    Convidados
                                </th>
                                <th className="regular-text link" onClick={(e) => this.sortGuests("code")}>
                                    Código
                                </th>
                                <th className="regular-text link" onClick={(e) => this.sortGuests("wedding")}>
                                    Casamento
                                </th>
                                <th className="regular-text link" onClick={(e) => this.sortGuests("transportation")}>
                                    Transporte
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderGuests}
                        </tbody>
                    </table>
                </div>
            </span>
        )
    }
}

export default Confirmation;
