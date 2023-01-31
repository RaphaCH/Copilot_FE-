// Create a React component called CardsTwo. This component should do some things:
// It needs to initiate an empty state as an array of objects. This will be used to store the data for the cards.
// It needs to have a useEffect method that will fetch data from "localhost:5000/employess", and then set the state to store that data.
// It needs to have one div that will display either one of two things conditionally:
// If the state is empty, display a loading message.
// If the state is not empty, render a map of Card components using the data from the state. 



import React, { useState, useEffect } from 'react';
import './Cards.css';
import Card from './Card';


const CardsTwo = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    return (
        <div>
            {employees.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="cards">
                    {employees.map(employee => (
                        <Card
                            key={employee.id}
                            name={employee.name}
                            email={employee.lastName}
                            position={employee.email}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CardsTwo;
    