// Create a Card component that accepts firstName, lastName, email and phone as props. It should render a div with a class of card. Inside the div, render an h2 with the first and last name. Then render a p with the email and a p with the phone number. The CSS should make the card resemble a business card. The card should be centered on the page.

import React from 'react';
import './Card.css';

const Card = ({name, email, position}) => {
    return (
        <div className="card">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{position}</p>
        </div>
    );
    };

export default Card;





