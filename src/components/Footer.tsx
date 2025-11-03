import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/e8d22ceeec83b389ebc3800da13f1ccae6e8b21a.png';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="21 Trucking LLC" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="mb-3">21 TRUCKING LLC</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional trucking services across the United States. 
              Your cargo, our priority. Delivering excellence with every mile.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-[#D4AF37]">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>info@21trucking.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-[#D4AF37]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy#sms-terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  SMS Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} 21 Trucking LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
