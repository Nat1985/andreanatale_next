import Image from "next/image";
import Link from "next/link";

const CaseCard = ({ index, title, summary, description, link, linkLabel, technologies, images }) => {
    console.log('images: ', images)
    return (
        <div className={`w-full flex flex-col items-start gap-2 border-2 ${index % 2 === 0 ? 'border-indigo-800' : 'border-pink-500'} rounded p-4`}>
            <h3 className={`${index % 2 === 0 ? 'text-indigo-800' : 'text-pink-500'} text-start`}>{title}</h3>
            <div className="flex gap-2 mt-4">
                {images.map((img, i) => (
                    <div key={`image-${i}`} className="w-1/3">
                        <Image
                            src={img}
                            alt="custom"
                            width={96}
                            height={96}
                            layout="responsive"
                            className="object-cover w-full h-auto"
                        />
                    </div>
                ))}
            </div>
            <div className="w-full truncate italic text-wrap text-start text-slate-400 mt-8">{summary}</div>
            <p className="text-start flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="flex gap-2 mt-8 flex-wrap">
                {
                    technologies && technologies.map((element, index) => (
                        <div key={`tech-${index}`} className="py-1 px-3 bg-slate-200 rounded-lg font-thin text-slate-400">{element}</div>
                    ))
                }
            </div>
            <Link href={link} target="_blank"><div className={`${index % 2 === 0 ? 'text-indigo-800' : 'text-pink-500'}`}>{linkLabel}</div></Link>
        </div>
    )
}

export default CaseCard;