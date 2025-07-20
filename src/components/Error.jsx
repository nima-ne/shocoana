import React from 'react'

export default function ErrorMessage() {
  return (
    <div className="flex items-center justify-center space-x-2 text-red-600 text-lg font-semibold py-4">
      <span className="text-2xl">❌</span>
      <p>خطا در دریافت اطلاعات</p>
    </div>
  );
}
