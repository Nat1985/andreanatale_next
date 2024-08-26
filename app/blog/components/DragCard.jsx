import Image from "next/image"

const DragCard = ({ text }) => {
    return (
        <div className="w-full flex gap-3 justify-start items-center cursor-pointer py-1 border-2 bg-white">
            <Image src="/icons/up_down.png" width={16} height={16} />
            {text}
        </div>
    )
}

export default DragCard