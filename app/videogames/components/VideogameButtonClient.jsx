"use client"

const VideogameButtonClient = ({ gameLink, isReverse}) => {
    const handleButtonLink = (link) => {
        window.open(link, '_blank');
    }
    return (
        <button className={`${isReverse ? 'self-end bg-indigo-800' : 'self-start bg-pink-500'} mt-4 text-white rounded py-2 px-4 w-full md:w-fit`} onClick={() => handleButtonLink(gameLink)}>Prova il gioco</button>
    )
}

export default VideogameButtonClient