import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold">BulldogEx Shop</h2>
          <p className="mt-2 text-sm text-blue-200">
            Your official campus marketplace for student essentials, merch, and more.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-blue-200">Email: support@bulldogex.com</p>
          <p className="text-sm text-blue-200">Location: NU Campus</p>
        </div>
      </div>

      <div className="text-center text-sm bg-blue-950 py-3">
        © 2026 BulldogEx Shop — Protect Your Tech, Knot Your Style
      </div>
    </footer>
  );
};

export default Footer;