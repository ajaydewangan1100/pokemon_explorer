import React from "react";

function SkeletonCard() {
  return (
    <div className="group min-w-[340px] max-w-[400px] bg-[#f5f5f5] mx-auto rounded-t-lg mt-2 animate-pulse">
      <div>
        <div className="relative h-56 p-6">
          <div className="relative w-full h-full bg-gray-200 rounded-lg" />
        </div>

        <div className="p-6 relative bg-gradient-to-b from-white to-gray-50">
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4" />

          <div className="flex gap-3 justify-center">
            <div className="h-8 w-20 bg-gray-200 rounded-full" />
            <div className="h-8 w-20 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
