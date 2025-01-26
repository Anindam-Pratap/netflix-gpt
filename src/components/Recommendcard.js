import { MOVIE_POSTER_URL } from "../utils/constants"



const Recommendcard = ({ image, title, rating, language, overview }) => {
    return (
      <div className="flex flex-col items-center text-white bg-black bg-opacity-80 shadow-lg rounded-2xl p-4 max-w-sm m-2">
        <div className="flex flex-row w-full">
          <img
            src={MOVIE_POSTER_URL+image}
            alt={title}
            className="w-32 h-48 object-cover rounded-lg shadow-md"
          />
          <div className="ml-4 flex flex-col justify-between ">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p>
              <span className="font-medium">Rating:</span> {rating}
            </p>
            <p>
              <span className="font-medium">Language:</span> {language}
            </p>
            <p className="mt-4 text-sm">{overview}</p>
          </div>
        </div>
        
      </div>
    );
  };

export default Recommendcard