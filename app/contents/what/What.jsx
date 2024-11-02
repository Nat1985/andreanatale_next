import Quote from "@/app/components/Quote";
import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import IndigoSpan from "@/app/components/IndigoSpan";
import Image from "next/image";

const What = ({ isBlack }) => {
    const website = "/icons/colors_icon/website.png";
    const cms = "/icons/colors_icon/cms.png";
    const ecommerce = "/icons/colors_icon/ecommerce.png";
    const marketplace = "/icons/colors_icon/marketplace.png";
    const gamification = "/icons/colors_icon/gamification.png";
    const videogame = "/icons/colors_icon/videogame.png";
    return (
        <Panel isBlack={isBlack}>
            <h2 className="mb-16">Cosa faccio esattamente?</h2>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:md:grid-cols-6 gap-8">
                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={website} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Siti web e blog.</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={cms} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Gestionali aziendali.</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={ecommerce} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">E-commerce.</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={marketplace} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Marketplace.</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={gamification} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Piattaforme gamificate.</div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={videogame} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Videogames B2B.</div>
                </div>
            </div>
        
        </Panel>
    )
}

export default What