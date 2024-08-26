import Panel from "@/app/components/Panel"
import useWindowWidth from "@/app/hooks/useWindowWidth"
import Image from "next/image"
import Link from "next/link"

const YoutubeLink = () => {
    return (
        <Panel>
            <Link href="https://www.youtube.com/@Andynat1985/videos" target="_blank">
                <div className="w-full h-full flex justify-center items-center">
                    <Image src="/icons/youtube.png" width={256} height={256} />
                </div>
            </Link>
        </Panel>
    )
}

export default YoutubeLink