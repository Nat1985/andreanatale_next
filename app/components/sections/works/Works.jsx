import React from 'react'
import WorkCard from './WorkCard'

function Works() {
    const cardData = [
        {
            image: "/images/works/vincanta.png",
            title: "Vincanta",
            summary: "Lista vini interattiva per gestire i prodotti in stock.",
            text: "Una lista vini interattiva creata per un cliente ristoratore che necessitava di un’applicazione per gestire i prodotti nella propria cantina e presentarli ai clienti al tavolo tramite tablet.",
            type: "Applicativo web"
        },
        {
            image: "/images/works/tattooswap.png",
            title: "Tattooswap",
            summary: "Marketplace per lo scambio di prodotti usati.",
            text: "Tattooswap è un marketplace per la compravendita di attrezzatura usata per tatuatori, che che contribuisce a favorire il riciclo e a ridurre gli sprechi all’interno dell’industria dell'estetica e tatuaggio.",
            type: "Marketplace"
        },
        {
            image: "/images/works/borgadesign.png",
            title: "Borga Design",
            summary: "Sito vetrina elegante e minimalista.",
            text: "Il cliente ha richiesto un sito vetrina con animazioni semplici e fluide che, insieme a un design minimalista, mettessero in risalto l’eleganza dei prodotti dell’azienda di produzione di marmo.",
            type: "Sito web"
        },
        {
            image: "/images/works/ticinowild.jpg",
            title: "Ticino Wild",
            summary: "Ecommerce multiazienda per l’acquisto di esperienze.",
            text: "Piattaforma per l’acquisto di pacchetti esperienza outdoor da parte degli utenti. Il cliente (admin) ha richiesto un processo di onboarding per le aziende che offrono servizi esperienziali e la possibilità di rivendere i pacchetti su questa piattaforma geolocalizzata nell’area del Ticino.",
            type: "E-commerce"
        },
    ]
    return (
        <div className='w-full p-8 pt-16 bg-cyan-100'>
            <h3 className='mb-32 text-center'>Ultimi lavori...</h3>
            <div className='flex flex-col gap-16 md:gap-32 lg:gap-64'>
                {
                    cardData && cardData.map((element, index) => (
                        <WorkCard key={index} data={element} />
                    ))
                }
            </div>
        </div>
    )
}

export default Works
