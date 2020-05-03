import React, {Component} from 'react';
import FemaleIcon from './icons/iconfinder_1_759442.svg';
import MaleIcon from './icons/iconfinder_glyph-18_3403715.svg';
import AnonimIcon from './icons/iconfinder_m-17_4230547.svg';
import './ContactsStyle.css';


export default class ContactList extends Component {
    getIcon = () => {
        if (this.props.gender === "female") {
          return FemaleIcon;
        } else if (this.props.gender === "male") {
          return MaleIcon;
        } else {
          return AnonimIcon;
        }};
    render() {
        return(
        <div className="contactList">
        <p className="contactGender"><img src={this.getIcon()} alt="gender icon" className="gender__img"></img></p>
        <p className="contactName">{this.props.firstName} {this.props.lastName}</p>
        <p className="contactPhone">{this.props.phone}</p>
    
        </div>
    )
        };

};
 

        



    