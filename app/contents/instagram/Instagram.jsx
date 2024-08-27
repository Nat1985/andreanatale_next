import Panel from "@/app/components/Panel"
import Image from "next/image"
import Link from "next/link"

const Instagram = () => {
    return (
        <Panel>
            <Link href="https://www.instagram.com/natcreativedev" target="_blank">
                <div className="w-full h-full flex justify-center items-center">
                    <Image src="/icons/instagram.png" width={256} height={256} />
                </div>
            </Link>
        </Panel>
    )
}

export default Instagram