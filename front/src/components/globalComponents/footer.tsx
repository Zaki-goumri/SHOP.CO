import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">ShopNest is your one-stop shop for all your tech needs. We offer a wide range of products at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-gray-900">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-gray-900">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-600 hover:text-gray-900">New Arrivals</Link></li>
              <li><Link href="/best-sellers" className="text-gray-600 hover:text-gray-900">Best Sellers</Link></li>
              <li><Link href="/gift-cards" className="text-gray-600 hover:text-gray-900">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">&copy; 2023 ShopNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

