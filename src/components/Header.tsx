import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { useApp, useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/sobre' },
  { key: 'experience', path: '/experiencia' },
  { key: 'skills', path: '/competencias' },
  { key: 'projects', path: '/projetos' },
  { key: 'certifications', path: '/certificacoes' },
  { key: 'resume', path: '/curriculo' },
] as const

export default function Header() {
  const { dark, toggleDark, lang, setLang } = useApp()
  const t = useT()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-card/90 backdrop-blur-xl shadow-sm border-b' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-primary-foreground select-none"
              style={{ background: 'var(--primary)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              CPM
            </div>
            <span
              className="hidden sm:block text-sm font-semibold text-foreground/80"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Charles Marcelino
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ key, path }) => (
              <NavLink
                key={key}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
                  ${isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                {t(tr.nav[key as keyof typeof tr.nav])}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              aria-label="Toggle language"
            >
              <Globe size={15} />
              <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              aria-label="Open menu"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ borderTop: menuOpen ? '1px solid var(--border)' : 'none', background: 'var(--card)' }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navItems.map(({ key, path }) => (
            <NavLink
              key={key}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `
                px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                ${isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
            >
              {t(tr.nav[key as keyof typeof tr.nav])}
            </NavLink>
          ))}
          <div className="mt-3 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <Globe size={15} />
              <span>{lang === 'pt' ? 'Mudar para EN' : 'Switch to PT'}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
