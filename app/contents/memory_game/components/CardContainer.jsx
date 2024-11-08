"use client"

import React, { useEffect, useState } from 'react'
import GameCard from './GameCard';
import GameCopy from '@/app/components/GameCopy';
import useMainStore from '@/app/zustand/mainStore';
import Image from 'next/image';

function CardContainer() {
    // Lo stato di questo componente conterrà un'array di numeri da 0 a 5, ognuno ripetuto 2 volte
    // Quindi 2 coppie di numeri in una sequenza random
    // Ogni singolo numero di questa sequenza verrà passato ad ogni componente Card
    const [shuffledCards, setShuffledCards] = useState(null);

    // Creo il mazzo e lo mescolo
    const handleShuffleCards = () => {
        let cards = [];
        for (let i = 0; i < 2; i++) {
            cards.push(i);
            cards.push(i);
        }
        let shuffled = [];
        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(Math.random() * cards.length);
            let removedElement = cards.splice(randomNumber, 1);
            shuffled.push(removedElement[0]);
        }
        setShuffledCards(shuffled);
    }

    // Chiamo la funzione di generazione del mazzo quando il componente viene montato
    useEffect(() => {
        handleShuffleCards();
    }, [])

    // Creo lo stato che immagazzina i valori delle carte su cui l'utente clicca (click su carta 1 e click su carta 2)
    const initialState = {
        first: {
            index: null,
            front: null
        },
        second: {
            index: null,
            front: null
        }
    };
    const [cardsCheck, setCardsCheck] = useState(initialState);
    const handleCheckCards = ({ index, front }) => {
        if (cardsCheck.first.index === null) { // Se l'utente clicca la prima volta su una carta
            setCardsCheck(prevState => ({
                ...prevState,
                first: {
                    index,
                    front
                }
            }))
        } else {
            if (index !== cardsCheck.first.index) { // Se il secondo click dell'utente è su una carta diversa dalla prima
                setIsChecking(true);
                setCardsCheck(prevState => ({
                    ...prevState,
                    second: {
                        index,
                        front
                    }
                }))
            } else { // Se il secondo click dell'utente è sulla stessa carta del primo click
                setCardsCheck(initialState)
            }
        }
    }

    // Creo uno stato che controlla se le due carte scoperte sono uguali e, in caso positivo, le immagazina in uno stato
    const [destroyedCards, setDestroyedCards] = useState([]);
    useEffect(() => {
        if (cardsCheck.first.index !== null && cardsCheck.second.index !== null) {
            if (cardsCheck.first.front === cardsCheck.second.front) { // Se le due carte girate sono uguali
                setTimeout(() => {
                    setCardsCheck(initialState);
                    setDestroyedCards(prevState => ([
                        ...prevState, cardsCheck.first.front
                    ]));
                    setIsChecking(false);
                }, 1000)
            } else { // Se le due carte sono diverse
                setTimeout(() => {
                    setCardsCheck(initialState);
                    setIsChecking(false);
                }, 1000)
            }
        }
    }, [cardsCheck])

    // Impedisco all'utente un ulteriore click nell'istante in cui viene effettuato il controllo su due carte appena scoperte
    const [isChecking, setIsChecking] = useState(false);

    // Imposto il rigioca
    const playAgain = () => {
        setDestroyedCards([]);
        handleShuffleCards();
    }

    // Setto l'assegnazione del punto aggiuntivo a Zustand alla vittoria
    const { addPoints, isMemory, setIsMemory } = useMainStore();
    useEffect(() => {
        if (destroyedCards.length === 2 && !isMemory) {
            addPoints(1);
            setIsMemory();
        }
    }, [destroyedCards]);

    return (
        <div className={`flex flex-col items-center ${destroyedCards.length > 0 && 'h-[310px]'}`}>

            {/* Inizio gioco */}
            {
                !isMemory && shuffledCards && shuffledCards.length === 4 && destroyedCards.length < 2 &&
                <div>
                    <div className='max-w-[260px]'>
                        <GameCopy>Risolvi il memory!</GameCopy>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            shuffledCards.map((element, index) => {
                                return <GameCard key={index} index={index} front={element} handleCheckCards={handleCheckCards} isShow={index === cardsCheck.first.index || index === cardsCheck.second.index ? true : false} destroyedCards={destroyedCards} isChecking={isChecking} />
                            })
                        }
                    </div>
                </div>

            }

            {/* Fine gioco */}
            {
                isMemory &&
                <div className='h-full flex flex-col items-center justify-center gap-4'>
                    <Image src='/icons/full_badge.png' width={48} height={48} />
                </div>
            }
        </div >
    )
}

export default CardContainer
