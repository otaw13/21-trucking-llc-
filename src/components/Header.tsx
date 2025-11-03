import { Link } from 'react-router-dom';
import logo from 'figma:asset/e8d22ceeec83b389ebc3800da13f1ccae6e8b21a.png';

export function Header() {
  return (
    <header className="bg-[#0A0A0A] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logo} 
              alt="21 Trucking LLC" 
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className="tracking-wide">21 TRUCKING LLC</h1>
              <p className="text-[#D4AF37] text-sm">Reliable Transportation Solutions</p>
            </div>
          </Link>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors duration-300 relative group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
