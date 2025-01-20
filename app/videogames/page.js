import React from 'react'
import GameCard from './components/GameCard'

function Videogames() {

    const videogames = [
        {
            title: 'Trap Concaverde',
            image: '/images/videogames/concaverde.png',
            text: 'Un advergame per il centro di tiro a volo Trap Concaverde di Lonato del Garda. Obiettivo: avvicinare i giovani a questo sport',
            gameLink: "https://www.claytonvideogame.com"
        },
        {
            title: 'Il Regno del Cinema',
            image: '/images/videogames/ilregnodelcinema.png',
            text: 'Un platform 2d in pixel-art, un advergame sviluppato per la catena di multisala lombarda.',
            gameLink: "https://www.makinarioadvergamestudio.com/games/il-regno-del-cinema"
        },
        {
            title: 'Funside Quiz Game',
            image: '/images/videogames/funside.png',
            text: 'Un quiz game realizzato per la nota catena di fumetterie, per festeggiare il ventesimo anniversario.',
            gameLink: "https://www.makinarioadvergamestudio.com/games/funside-quizgame/"
        },
        {
            title: 'Mirko Bazzoli videogame',
            image: '/images/videogames/mirkobazzoli.png',
            text: 'Un videogame di intrattenimento per il sito ufficiale del marketer Mirko Bazzoli di Creardo.',
            gameLink: "https://www.mirkobazzoli.com/game"
        },
        {
            title: 'Ninja Slice',
            image: '/images/videogames/ninja.png',
            text: "Il secondo advergame sviluppato per 'Il regno del cinema'. Stavolta un endless-run in verticale!",
            gameLink: "https://www.makinarioadvergamestudio.com/games/ninja-slice"
        },
        {
            title: 'Blanchito MEME game',
            image: '/images/videogames/blanco.png',
            text: 'Un MEME videogame sviluppato in due sere dopo la splendida performance "floreale" di Blanco a Sanremo 2023.',
            gameLink: "http://www.makinarioadvergamestudio.com/games/loving-roses"
        },
        {
            title: 'Storm Tattoo Shop',
            image: '/images/videogames/storm.png',
            text: 'Un advergame sviluppato per la festa di halloween per un tattoo shop.',
            gameLink: "https://www.makinarioadvergamestudio.com/games/storm-tattoo-nightmare"
        },
        {
            title: 'Hale Poke videogame',
            image: '/images/videogames/hale_poke.png',
            text: 'Un videogioco acchiappa-ingredienti per una catena di pokerie italiana.',
            gameLink: "https://www.makinarioadvergamestudio.com/games/hale-poke"
        },
        {
            title: 'Prototipo Benacus memory game',
            image: '/images/videogames/memory_garden.png',
            text: 'Un prototipo rilassante del gioco del memory ambientato fra le piante di un vivaio.',
            gameLink: "http://www.makinarioadvergamestudio.com/games/benacus-garden"
        },
    ]

    return (
        <main className="flex flex-col items-center bg-cyan-200 pt-32 lg:pt-64 min-h-[100vh]">
            <h3 className='mb-32 text-center'>Videogames</h3>
            {
                videogames.map((element, index) => (
                    <div key={index} className={`${index % 2 ? 'bg-cyan-200' : 'bg-cyan-100'} w-full p-8 md:p-32 lg:p-64`}>
                        <GameCard title={element.title} image={element.image} text={element.text} gameLink={element.gameLink} />
                    </div>
                ))
            }
        </main>
    )
}

export default Videogames

// Array imagini
const imagesArray = [
    "/images/videogames/"
]