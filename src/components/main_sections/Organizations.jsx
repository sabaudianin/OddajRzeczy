import React from 'react';
import Pagination from "./Pagination.jsx";
import RenderList from "./RenderList.jsx";

const Organizations = () => {
    const organizations = [{
        name: "Organizacja Dbam o Zdrowie",
        target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    }, {
        name: "Organizacja Dla dzieci",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        need: "ubrania, meble, zabawki"
    }, {
        name: "Organizacja dla Ludzi Bez Domu",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        need: "ubrania, jedzenie, ciepłe koce"
    }, {
        name: "Organizacja Prospołeczna ",
        target: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    }, {
        name: "Pozarządowa Organizacja Dla dzieci",
        target: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        need: "ubrania, meble, zabawki"
    }, {
        name: "Organizacja Chartytwtywna ",
        target: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        need: "ubrania, jedzenie, ciepłe koce"
    },];


    return (
        <Pagination
            data={organizations}
            itemsOnPage={3}
            showData={(item, index) => <RenderList item={item} index={index}/>}
        />
    )
};

export default Organizations;