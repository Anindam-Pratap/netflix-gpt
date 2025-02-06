

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center text-white bg-black bg-opacity-80 shadow-lg rounded-2xl p-4 max-w-sm m-2 animate-pulse">
    <div className="flex flex-row w-full">
      {/* Placeholder for the image */}
      <div className="w-32 h-48 bg-gray-700 rounded-lg"></div>

      <div className="ml-4 flex flex-col justify-between w-full">
        {/* Placeholder for the title */}
        <div className="h-6 bg-gray-700 rounded-md w-3/4 mb-2"></div>

        {/* Placeholder for rating */}
        <div className="h-4 bg-gray-700 rounded-md w-1/2 mb-2"></div>

        {/* Placeholder for language */}
        <div className="h-4 bg-gray-700 rounded-md w-1/3 mb-2"></div>

        {/* Placeholder for the overview */}
        <div className="mt-4 space-y-2">
          <div className="h-3 bg-gray-700 rounded-md w-full"></div>
          <div className="h-3 bg-gray-700 rounded-md w-5/6"></div>
          <div className="h-3 bg-gray-700 rounded-md w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Shimmer