

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black aspect-video">
        <h1 className="text-2xl md:text-5xl p-3 font-bold">{title}</h1>
        <p className="hidden md:inline-block md:w-1/3 md:p-3">{overview}</p>
        <div className="p-3">
            <button className="bg-white opacity-80 md:w-1/12 h-10 font-medium rounded-md w-14 text-black">▷Play</button>
            <button className="hidden md:inline-block bg-slate-600 w-1/12 h-10 font-medium rounded-md mx-2">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle