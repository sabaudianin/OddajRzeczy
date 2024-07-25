import React from 'react';
import Pagination from "./Pagination.jsx";
import RenderList from "./RenderList.jsx";

const Fundations = () => {
    const fundations = [{
        name: "Fundacja Dbam o Zdrowie",
        target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    }, {
        name: "Fundacja Dla dzieci",
        target: "Pomoc dzieciom z ubogich rodzin.",
        need: "ubrania, meble, zabawki"
    }, {
        name: "Fundacja Bez Domu",
        target: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
        need: "ubrania, jedzenie, ciepłe koce"
    }, {
        name: "Fundacja Żyj Zdrowo",
        target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    }, {
        name: "Fundacja Nieś Dobro Dzieciom ",
        target: "Pomoc dzieciom z ubogich rodzin.",
        need: "ubrania, meble, zabawki"
    }, {
        name: "Fundacja DOM dla Wszystkich",
        target: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
        need: "ubrania, jedzenie, ciepłe koce"
    }, {
        name: "Fundacja ABC Zdrowie",
        target: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        need: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    }, {
        name: "Fundacja Pomoc Dzieciom",
        target: "Pomoc dzieciom z ubogich rodzin.",
        need: "ubrania, meble, zabawki"
    }, {
        name: "Fundacja Dom bez Granic",
        target: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
        need: "ubrania, jedzenie, ciepłe koce"
    }];


    return (
        <Pagination
            data={fundations}
            itemsOnPage={3}
            showData={(item, index) => <RenderList item={item} index={index}/>}
        />
    )
};

export default Fundations;