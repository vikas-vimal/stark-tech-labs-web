import React from "react";

function ErrorText({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-400 text-xs mt-1 mb-2">{message}</p>;
}

export default ErrorText;
