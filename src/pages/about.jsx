import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function about() {
  return (
    <div>
        <Header />
        <div  className="bg-gray-100 py-10 px-5">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6"> Welcome to our online 
            store! We are dedicated to bringing you the best products at the most affordable prices.
            Our mission is to create a seamless shopping experience by offering a wide range of high-quality items that cater 
            to all your needs. Whatever you are looking for the latest trends or everyday essentials, we've got you covered.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6">
            Customer satisfaction is our top priority. We work tirelessly to ensure a safe, secure, and enjoyable shopping journey.
            Our  team is here to assist you every steps of the way, so feel free to reach out  to us with any questions or concerns.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6"> Thank you for choosing
            us as your trusted online shopping destination. We look forward to serving you!
            </p>
        </div>
         <Footer />
         </div>
  )
}

export default about