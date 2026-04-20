import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-yellow-500 bg-blue-900 text-white'
      : 'border-transparent text-zinc-800 hover:border-blue-900 hover:bg-blue-900 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-yellow-400/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="BulldogEx" 
            className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-white object-contain" 
          />
          <p className="text-xl font-bold text-zinc-900">BulldogEx Shop</p>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              end={link.to === '/'} 
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          
          <Link 
            to="/auth/signin" 
            className="px-4 py-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            Sign In
          </Link>

          <Link 
            to="/auth/signup" 
            className="px-4 py-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </header>
  );
};

export default NavBar;