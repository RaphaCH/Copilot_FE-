// Create a react component called Cards. This component should render a div with a class of cards. Render 4 Card components inside with random data. The CSS should make the cards appear in a grid with 2 cards per row.

import React from 'react';
import './Cards.css';
import Card from './Card';

const Cards = () => {
    return (
        <div>
            <div className="cards">
                <Card name="John" email="johndoe@test.com" position="dev" />
                <Card name="Jane" email="janedoe@test.com" position="dev" />
                <Card name="John" email="johnsmith@test.com" position="dev" />
                <Card name="Jane" email="janesmith@test.com" position="dev" />
            </div>
        </div>
    );
};


export default Cards;

// Generate the css for the class cards using the instructions given before




