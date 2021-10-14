import './Header.css';
import headerImage from '../images/banner.png';
import nathan from '../images/nathan.png';

export default function Header() {
  return (
    <div className="header">
      <img className="nathan-side" src={nathan} alt="" />
      <img className="banner" src={headerImage} alt="" />
      {/*<nav className="main-nav">
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
  </nav>*/}
    </div>
  )
}