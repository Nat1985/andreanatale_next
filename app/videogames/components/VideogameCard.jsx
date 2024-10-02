import Link from "next/link";
import VideogameButtonClient from "./VideogameButtonClient";

const VideogameCard = ({ title, text, image, gameLink, isReverse }) => {
    const handleButtonLink = (link) => {
        window.open(link, '_blank');
    }
    return (
        <div className={`w-full md:w-[300px] h-fit flex flex-col border-2 ${isReverse ? 'border-indigo-800' : 'border-pink-500'} rounded overflow-hidden`}>
            <div className={`w-full h-[300px] md:h-[240px] overflow-hidden`}>
                <img src={image} alt={title} className="h-full w-full object-cover" />
            </div >
            <div className={`flex flex-col gap-2 p-2 border-t ${isReverse ? 'border-t-indigo-800' : 'border-pink-500'}`}>
                <h3 className={`${isReverse ? 'text-indigo-800' : 'text-pink-500'} text-start`}>{title}</h3>
                <div className="w-full truncate italic text-wrap text-start">{text}</div>
            </div>
            <VideogameButtonClient gameLink={gameLink} isReverse={isReverse} />
        </div>
    )
}

export default VideogameCard