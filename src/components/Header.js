import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <nav className="main-nav">
        <NavLink push to='/'>
          <div>
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink push to='/about'>
          <div>
            <span>About</span>
          </div>
        </NavLink>
        <NavLink push to='/portfolio'>
          <div>
            <span>Portfolio</span>
          </div>
        </NavLink>
        <NavLink push to='/contact'>
          <div>
            <span>Contact</span>
          </div>
        </NavLink>
      </nav>
    </div>
  )
}