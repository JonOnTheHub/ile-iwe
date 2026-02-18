'use client'

import Link from 'next/link'
import { useState } from 'react'
import Button from '../ui/button'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "My Learning", href: "/enrolled" },
    { name: "Wishlist", href: "/wishlist" },
  ]

  return (
    <section className='border-b border-bg-border bg-bg-void/85 backdrop-blur-sm sticky top-0 z-[200]'>
      <header className="mx-auto flex max-w-7xl items-center justify-between p-4">

        <Link href="/" className="font-syne text-2xl font-black tracking-tight">
          Île-Ìwé
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground/70"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/courses" variant="primary" withIcon={true}>
            Enroll
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          )}
        </button>

      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-bg-border bg-bg-raised px-4 pb-6 pt-2 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-text-secondary border-b border-bg-border hover:text-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button href="/courses" variant="primary" withIcon={true} className="w-full justify-center">
              Enroll
            </Button>
          </div>
        </nav>
      )}
    </section>
  )
}

export default Header