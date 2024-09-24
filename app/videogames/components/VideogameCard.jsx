import VideogameButtonClient from "./VideogameButtonClient";

const VideogameCard = ({ title, text, image, gameLink, isReverse }) => {
    const handleButtonLink = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className={`w-full flex flex-col md:flex-row items-center gap-4 min-h-[300px] ${isReverse && 'md:flex-row-reverse'}`}>
            {/* Image */}
            <div className={`w-[240px] md:min-w-[300px] h-[300px] rounded-xl overflow-hidden`}><img src={image} alt={title} className="h-full w-full object-cover" /></div>
            {/* Info */}
            <div className="flex-grow flex flex-col">
                <h3 className={`w-full ${isReverse ? 'md:text-end' : 'md:text-start'}`}>{title}</h3>
                <p className={isReverse ? 'md:text-end' : 'md:text-start'}>{text}</p>
                <VideogameButtonClient gameLink={gameLink} isReverse={isReverse} />
                <hr className={`h-[2px] w-full mt-4 ${isReverse ? 'bg-indigo-800' : 'bg-pink-500'}`} />
            </div>
        </div>
    )
}

export default VideogameCard