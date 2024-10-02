"use client"

const VideogameButtonClient = ({ gameLink, isReverse}) => {
    const handleButtonLink = (link) => {
        window.open(link, '_blank');
    }
    return (
        <button className={`${isReverse ? 'bg-indigo-800' : 'bg-pink-500'} mx-2 my-4 text-white rounded py-2 px-4 w-full md:w-fit`} onClick={() => handleButtonLink(gameLink)}>Prova il gioco</button>
    )
}

export default VideogameButtonClient