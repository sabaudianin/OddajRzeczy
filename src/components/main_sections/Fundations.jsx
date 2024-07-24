import React, {useState} from 'react';

const Fundations = () => {
    const [fundations, setFundations] = useState([
        {
            name: "Fundacja Dbam o Zdrowie",
            target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Fundacja Dla dzieci",
            target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            name: "Fundacja Bez Domu",
            target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            need: "ubrania, jedzenie, ciepłe koce"
        },
        {
            name: "Fundacja Dbam o Zdrowie2",
            target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Fundacja Dla dzieci2",
            target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            name: "Fundacja Bez Domu2",
            target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            need: "ubrania, jedzenie, ciepłe koce"
        },
        {
            name: "Fundacja Dbam o Zdrowie3",
            target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Fundacja Dla dzieci3",
            target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            need: "ubrania, meble, zabawki"
        },
        {
            name: "Fundacja Bez Domu3",
            target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            need: "ubrania, jedzenie, ciepłe koce"
        }
    ])
    return (
        <div>
            {fundations.map((fundation, index) => (
                <div key={index}>
                    <h3>{fundation.name}</h3>
                    <span>{fundation.target}</span>
                    <span>{fundation.need}</span>
                    <hr></hr>
                </div>
            ))}
        </div>
    );
};

export default Fundations;