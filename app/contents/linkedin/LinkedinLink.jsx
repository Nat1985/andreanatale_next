import Panel from "@/app/components/Panel"
import Image from "next/image"
import Link from "next/link"

const LinkedinLink = ({ isBlack }) => {
    return (
        <Panel isBlack>
            <Link href="https://www.linkedin.com/in/andreanatale85" target="_blank">
                <div className="w-full h-full flex justify-center items-center">
                    <Image src="/icons/linkedin.png" width={256} height={256} />
                </div>
            </Link>
        </Panel>
    )
}

export default LinkedinLink