import React from "react";

export default function CallUs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-[#7B3F00] mb-8">
        تماس با ما
      </h1>

      <form className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            نام شما
          </label>
          <input
            type="text"
            placeholder="مثلاً نیما نشاط"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            پیام شما
          </label>
          <textarea
            rows="5"
            placeholder="پیامتان را اینجا بنویسید..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-md"
          onClick={(e)=>e.preventDefault()}
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
}
