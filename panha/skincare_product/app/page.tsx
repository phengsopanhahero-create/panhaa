import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">✨ GlowUp Skincare</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-pink-500 transition-colors">Home</a>
            <a href="#products" className="hover:text-pink-500 transition-colors">Products</a>
            <a href="#benefits" className="hover:text-pink-500 transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
          </div>
          <button type="button" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium cute-button">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                ✨ Natural & Organic Ingredients
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Glow Like Never Before
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the magic of our specially formulated skincare products.
                Made with love and natural ingredients for your beautiful skin! 💕
              </p>
              <div className="flex gap-4 pt-4">
                <button type="button" className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium cute-button shadow-lg">
                  Discover Products
                </button>
                <button type="button" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-medium cute-button shadow-lg border-2 border-pink-200">
                  Learn More
                </button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">10k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">4.9★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <div className="relative">
              <div className="relative z-10 float-animation">
                <div className="w-full aspect-square bg-gradient-to-br from-pink-200 via-pink-300 to-purple-200 rounded-[3rem] shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl">🌸</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-300 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GlowUp?</h2>
            <p className="text-gray-600 text-lg">Because your skin deserves the best! ✨</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">100% Natural</h3>
              <p className="text-gray-600">Made with organic ingredients sourced from nature's finest gardens.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold mb-3">Dermatologist Tested</h3>
              <p className="text-gray-600">Clinically proven and tested by top skincare experts worldwide.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🐰</div>
              <h3 className="text-xl font-bold mb-3">Cruelty Free</h3>
              <p className="text-gray-600">Never tested on animals. Beauty with compassion and love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Best Sellers 💖</h2>
            <p className="text-gray-600 text-lg">Discover what makes our customers glow!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/moisturizer.jpg"
                  alt="Hydrating Glow Cream Moisturizer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-pink-500 text-sm font-medium mb-2">MOISTURIZER</div>
                <h3 className="text-xl font-bold mb-2">Hydrating Glow Cream</h3>
                <p className="text-gray-600 text-sm mb-4">24-hour moisture lock with rose extract and hyaluronic acid</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold gradient-text">$29.99</div>
                  <button type="button" className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium cute-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/serum.jpg"
                  alt="Vitamin C Brightening Serum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-purple-500 text-sm font-medium mb-2">SERUM</div>
                <h3 className="text-xl font-bold mb-2">Vitamin C Brightening</h3>
                <p className="text-gray-600 text-sm mb-4">Radiant skin with powerful antioxidants and natural extracts</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold gradient-text">$39.99</div>
                  <button type="button" className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium cute-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/cleanser.jpg"
                  alt="Green Tea Foam Wash Cleanser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-green-500 text-sm font-medium mb-2">CLEANSER</div>
                <h3 className="text-xl font-bold mb-2">Green Tea Foam Wash</h3>
                <p className="text-gray-600 text-sm mb-4">Gentle cleansing with matcha and aloe vera for fresh skin</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold gradient-text">$24.99</div>
                  <button type="button" className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium cute-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-pink-300 rounded-[3rem] shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">💕</div>
                  <div className="text-2xl font-bold">Before & After</div>
                  <div className="text-sm opacity-80 mt-2">See the transformation</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Amazing Benefits for Your Skin</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">✨</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Instant Glow</h3>
                    <p className="text-gray-600">See visible radiance from the first application</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">💧</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Deep Hydration</h3>
                    <p className="text-gray-600">Long-lasting moisture that keeps skin supple all day</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">🌟</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Anti-Aging Power</h3>
                    <p className="text-gray-600">Reduce fine lines and maintain youthful appearance</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-3xl">🌸</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Even Skin Tone</h3>
                    <p className="text-gray-600">Brighten dark spots and achieve flawless complexion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say 💬</h2>
            <p className="text-gray-600 text-lg">Join thousands of happy glowing faces!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"This is absolutely amazing! My skin has never looked better. The glow is real!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-2xl">👧</div>
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-sm text-gray-500">Beauty Enthusiast</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"Finally found products that don't irritate my sensitive skin. Pure magic!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl">👩</div>
                <div>
                  <div className="font-bold">Emily R.</div>
                  <div className="text-sm text-gray-500">Skincare Lover</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"Best investment in my skincare routine. The results speak for themselves!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-2xl">👱</div>
                <div>
                  <div className="font-bold">Jessica L.</div>
                  <div className="text-sm text-gray-500">Happy Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Glow Up? ✨</h2>
          <p className="text-white text-xl mb-8 opacity-90">
            Join our community and get 20% off your first order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button type="submit" className="bg-white text-pink-500 px-8 py-4 rounded-full font-medium cute-button shadow-lg">
              Get Started
            </button>
          </div>
          <div className="mt-12 text-white text-sm opacity-80">
            💌 Subscribe to our newsletter for exclusive tips and offers
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">✨ GlowUp</div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for natural, beautiful, and healthy skin.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="hover:scale-110 transition-transform">💕</a>
                <a href="#" className="hover:scale-110 transition-transform">✨</a>
                <a href="#" className="hover:scale-110 transition-transform">🌸</a>
                <a href="#" className="hover:scale-110 transition-transform">🦋</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 GlowUp Skincare. Made with 💖 for beautiful skin.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
