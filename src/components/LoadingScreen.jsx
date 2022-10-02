const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen">
      {/* progress animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
