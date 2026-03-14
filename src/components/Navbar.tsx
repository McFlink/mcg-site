import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/MCG-black-bg.png'
import './Navbar.css'

const navItems = [
  { path: '/', label: 'Hem', end: true },
  { path: '/services', label: 'Tjänster' },
  { path: '/projects', label: 'Projekt' },
  { path: '/about', label: 'Om oss' },
  { path: '/contact', label: 'Kontakt' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="MCG logotyp" className="brand-logo" />
          <span className="brand-text">Mark & Fiber</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Öppna meny"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="menu-lines" aria-hidden="true"></span>
          Meny
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav-cta" onClick={closeMenu}>
          Boka möte
        </Link>
      </div>
    </header>
  )
}

export default Navbar
