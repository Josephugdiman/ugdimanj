// src/components/Hero.js
const Content = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" bg-[url('/motor1.jpg')]  bg-no-repeat w-full h-full text-black text-center py-52 ">
        <div className="max-w-screen-lg mx-auto px-6 ">
          <h1 className="text-5xl font-bold mb-4">Welcome to MotoSep-<span class="hover:text-lime-500 text-black">[Shop]</span></h1>
          <p className="text-lg mb-8  border-s-black">Your one-stop shop for all things motorsport. Shop the latest bikes, parts, and accessories!</p>
          <a
            href="#products"
            className="bg-rose-500 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-rose-400 transition duration-300"
          >
            Browse Products
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-12">Featured Products</h3>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src=".\honda1.jpg" alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-semibold">HONDA SCOOTER</h4>
              <p className="text-gray-600 mb-4">₱1,200.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src=".\honda2.jpg"
                alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />

              <h4 className="text-2xl font-semibold">HONDA CBR1000</h4>
              <p className="text-gray-600 mb-4">₱1,500.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>
            
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src=".\honda3.jpg"
                alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-semibold">HONDA CRF150</h4>
              <p className="text-gray-600 mb-4">₱1,800.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src=".\honda4.jpg"
                alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              
              <h4 className="text-2xl font-semibold">HONDA FOUR WHEEL</h4>
              <p className="text-gray-600 mb-4">₱1,500.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src=".\honda5.jpg"
                alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              
              <h4 className="text-2xl font-semibold">HONDA REBEL250</h4>
              <p className="text-gray-600 mb-4">₱1,500.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src=".\honda6.jpg"
                alt="Motorcycle"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              
              <h4 className="text-2xl font-semibold">HONDA RS125</h4>
              <p className="text-gray-600 mb-4">₱1500.00</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-rose-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
