import React from 'react'


export default function FAQ() {
  return (
    <>


      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7B3F00] mb-8">
          سوالات متداول
        </h1>

        <div className="space-y-6">
       
          <div className="bg-white shadow-md rounded-lg p-6 border">
            <h2 className="text-xl font-semibold text-[#7B3F00] mb-2">چطور می‌تونم سفارش ثبت کنم؟</h2>
            <p className="text-gray-700 leading-relaxed">
              برای ثبت سفارش، محصول مورد نظر را به سبد خرید اضافه کرده و پس از ورود به حساب کاربری، اطلاعات ارسال را وارد کرده و پرداخت را انجام دهید.
            </p>
          </div>

       
          <div className="bg-white shadow-md rounded-lg p-6 border">
            <h2 className="text-xl font-semibold text-[#7B3F00] mb-2">مدت زمان ارسال سفارش چقدر است؟</h2>
            <p className="text-gray-700 leading-relaxed">
              ارسال سفارش‌ها بین ۲ تا ۵ روز کاری زمان می‌برد. سفارش‌ها با پیک یا پست ارسال می‌شوند.
            </p>
          </div>

        
          <div className="bg-white shadow-md rounded-lg p-6 border">
            <h2 className="text-xl font-semibold text-[#7B3F00] mb-2">آیا امکان بازگشت کالا وجود دارد؟</h2>
            <p className="text-gray-700 leading-relaxed">
              بله، در صورت وجود مشکل یا نارضایتی از محصول، تا ۷ روز پس از دریافت کالا می‌توانید برای بازگشت آن اقدام کنید.
            </p>
          </div>

      
          <div className="bg-white shadow-md rounded-lg p-6 border">
            <h2 className="text-xl font-semibold text-[#7B3F00] mb-2">آیا محصولات شما دست‌ساز هستند؟</h2>
            <p className="text-gray-700 leading-relaxed">
              بله! تمامی شکلات‌های ما با دست و با بهترین مواد اولیه تهیه می‌شن تا طعمی خاص و متفاوت رو تجربه کنید.
            </p>
          </div>
        </div>
      </main>

   
    </>
  )
}
