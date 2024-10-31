import Image from "next/image"

const DragCard = ({ text }) => {
    return (
        <div className="w-full flex gap-3 justify-start items-center cursor-pointer py-3 pl-4 border-2 border-slate-400 bg-black rounded-xl shadow-xl">
            <Image src="/icons/up_down.png" width={20} height={20} />
            {text}
        </div>
    )
}

export default DragCard