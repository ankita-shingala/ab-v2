import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aura-navy text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Aura<span className="text-aura-blue">Bliss</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner for premium electrical products in Ahmedabad,
              Gujarat.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/products">Switches & Sockets</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/products">Wires & Cables</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/products">MCBs & Distribution Boards</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/products">LED Lighting</Link>
              </li>
              <li className="text-gray-300 hover:text-white transition-colors">
                <Link to="/products">Fans & Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="mt-1 flex-shrink-0 text-aura-blue"
                  size={18}
                />
                <span className="text-gray-300">
                  123 Electrical Market, C.G. Road, Ahmedabad, Gujarat 380009
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-aura-blue" size={18} />
                <a
                  href="tel:+919898123456"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 98981 23456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-aura-blue" size={18} />
                <a
                  href="mailto:info@aurabliss.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@aurabliss.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  className="mt-1 flex-shrink-0 text-aura-blue"
                  size={18}
                />
                <span className="text-gray-300">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Aura Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
