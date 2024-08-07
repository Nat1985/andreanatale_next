const Ball = ({ isLight, setWin }) => {
    const handleClick = () => {
        if (isLight) setWin(true)
    }
    return (
        <div className={`w-12 h-12 ${isLight ? 'bg-pink-500' : 'bg-indigo-800'} rounded-full`} onClick={handleClick}>
        </div>
    )
}

export default Ball;