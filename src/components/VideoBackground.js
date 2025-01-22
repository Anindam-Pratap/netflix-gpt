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
        src={"https://www.youtube.com/embed/" + trailerLink+"?&autoplay=1&mute=1"
        } 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
    </div>
  )
}
export default VideoBackground