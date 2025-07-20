import React from 'react'

export default function NotFoundMessage() {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-500 text-lg font-semibold py-4">
      <span className="text-2xl">🚫</span>
      <p>محصولی یافت نشد</p>
    </div>
  );
}
