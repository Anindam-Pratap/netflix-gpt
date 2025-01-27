import useMovieTrailer from "../hooks/useMovieTrailer"


const VideoBackground = ({movieID}) => {
  const trailerLink = useMovieTrailer(movieID)
  
  // Wait for trailerLink to be available before rendering iframe
  if (!trailerLink) {
    return <div>Loading video...</div>  // Optionally display a loading state
  }

  return (
    <div>
      <iframe 
        className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/" + trailerLink+"?&autoplay=1&mute=1&controls=0&showinfo=0&autoplay=1&loop=1&playlist=" + trailerLink
        } 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  )
}
export default VideoBackground