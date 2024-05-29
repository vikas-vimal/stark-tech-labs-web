import React from "react";

function LoadingSpinner({ ...allProps }) {
  return (
    <span {...allProps}>
      <span className="inline-block w-5 h-5 rounded-full border-2 border-gray-400 border-t-black transition-transform duration-500 animate-spin"></span>
    </span>
  );
}

export default LoadingSpinner;
