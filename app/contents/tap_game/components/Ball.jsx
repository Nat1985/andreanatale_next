const Ball = ({ isLight, setIsWin }) => {
    const handleClick = () => {
        if (isLight) {
            setIsWin(true)
        }
    }
    return (
        <div className={`w-12 h-12 ${isLight ? 'bg-pink-500' : 'bg-indigo-800'} rounded-full cursor-pointer`} onClick={handleClick}>
        </div>
    )
}

export default Ball;