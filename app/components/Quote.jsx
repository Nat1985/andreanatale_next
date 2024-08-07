const Quote = ({ children, author }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-lg font-light text-slate-500 italic leading-none">
                "{children}"
            </div>
            <p className="self-end">{author}</p>
        </div>

    )
}

export default Quote;