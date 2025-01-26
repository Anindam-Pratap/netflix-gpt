import { BACKGROUND_IMG } from "../utils/constants"
import Gptmoviesuggestions from "./Gptmoviesuggestions"
import GptSearchBar from "./GptSearchBar"


const GptPage = () => {
  return (
    <div>
        <img className="fixed -z-10" src={BACKGROUND_IMG}
        alt="background-image" />
        <GptSearchBar />
        <Gptmoviesuggestions />
    </div>
  )
}

export default GptPage