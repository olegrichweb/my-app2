import React, { Component } from 'react';
import ContactList from './contactList';
import './ContactsStyle.css';



class Contacts extends Component {
    state = {
        contacts: [
     {
        firstName: "Барней",
        lastName: "Стинсовский",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робин",
        lastName: "Щербатская",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Аномный",
        lastName: "Анонимус",
        phone: "+380666666666"
    }, {
        firstName: "Лилия",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршэн",
        lastName: "Эриксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбэс",
        phone: "+380956319521",
        gender: "male"
    }
],
        search: '',
        male: true,
        female: true,
        filterByName: true,
        anonim: true,
};

searchContacts = (e) => {
    this.setState({
        search: e.target.value,
    });
};
changeMale = (e) => {
    this.setState({
        male: e.target.checked
    })
};
changeFemale = (e) => {
    this.setState({
        female: e.target.checked
    })
};
changeAnon = (e) => {
    this.setState({
        anonim: e.target.checked
    })
};
filterByName = () => {
    const serchVal = this.state.search.toLowerCase();
    return this.state.contacts.filter(item => (
        item.lastName.toLowerCase().includes(serchVal)||
        item.firstName.toLowerCase().includes(serchVal) ||
        item.phone.includes(serchVal)
    ));
};
filterGender = () => {
    return this.filterByName().filter(item => {
        return item.gender ? (this.state.female && item.gender === "female") ||
        (this.state.male && item.gender === "male") : (this.state.anonim)
    });
}


    render() {
        
        return (
            <div className="phone">
        <div className="ContactsBook">
            <div className="gender_box">
                <div className="gender_items">
                    <label>Male
                    <input type="checkbox" className = "apple-switch" checked = {this.state.male} onChange={this.changeMale}/>
                    </label>
                    <label>Female
                    <input type="checkbox" className = "apple-switch" checked = {this.state.female} onChange={this.changeFemale}/>
                    </label>
                    <label>Anonim
                    <input type="checkbox" className = "apple-switch" checked = {this.state.anonim} onChange={this.changeAnon}/>
                    </label>
                </div>
            </div>
                <div className="search">
                    <input className="serchInput" placeholder = "Search"
                    value={this.state.search} onChange={this.searchContacts}></input>
                </div>
                    <div className="contact_list">
                        <h3 className="contactsHead">Contacts</h3>
                        {this.filterGender().map((name, index) => {
                            return (
                                <ContactList
                                gender={name.gender}
                                firstName={name.firstName}
                                lastName={name.lastName}
                                phone={name.phone}
                                
                                key={index} />
                            )
                        })}
                    </div>
        </div>
        </div>
        )
    };
};

export default Contacts;