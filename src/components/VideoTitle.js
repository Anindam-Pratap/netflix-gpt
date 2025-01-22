

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black aspect-video">
        <h1 className="text-5xl p-3 font-bold">{title}</h1>
        <p className="w-1/3 p-3">{overview}</p>
        <div className="p-3">
            <button className="bg-slate-600 w-1/12 h-10 font-medium rounded-md">▷ Play</button>
            <button className="bg-slate-600 w-1/12 h-10 font-medium rounded-md mx-2">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle