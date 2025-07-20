import React from 'react'

export default function LoadingMessage() {
  return (
    <div className="flex items-center justify-center space-x-2 text-amber-600 text-lg font-semibold py-4">
      <span className="animate-spin text-2xl">⏳</span>
      <p>در حال بارگذاری...</p>
    </div>
  );
}
