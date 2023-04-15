import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="font-semibold text-xl">
          Morgue Management System
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            activeClassName="font-bold"
            className="hover:text-blue-200"
            end
          >
            Customers
          </NavLink>
          <NavLink
            to="/dead-bodies"
            activeClassName="font-bold"
            className="hover:text-blue-200"
          >
            Dead Bodies
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
