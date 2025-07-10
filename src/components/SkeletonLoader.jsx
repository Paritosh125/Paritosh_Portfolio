import React from "react";

function SkeletonLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white animate-pulse">
      <div className="text-center space-y-4">
        <div className="h-6 w-64 bg-gray-700 rounded mx-auto"></div>
        <div className="h-6 w-48 bg-gray-700 rounded mx-auto"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;