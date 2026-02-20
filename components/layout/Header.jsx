'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '../ui/button'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "My Learning", href: "/enrolled" },
    { name: "Wishlist", href: "/wishlist" },
  ]

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <section className='border-b border-bg-border bg-bg-void/85 backdrop-blur-md sticky top-0 z-200'>
      <header className="mx-auto flex max-w-7xl items-center justify-between p-4">

        <Link
          href="/"
          className="font-syne text-2xl font-black tracking-tight transition-opacity duration-100 hover:opacity-80"
        >
          Île-Ìwé
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-1 font-dm-sans text-sm transition-colors duration-100"
                style={{ color: active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              >
                {link.name}

                {/* sliding underline — active state */}
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-200 ease-out"
                  style={{
                    backgroundColor: 'var(--color-purple-vivid)',
                    width: active ? '100%' : '0%',
                  }}
                />

                {/* hover underline for inactive links */}
                {!active && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 hover:w-full transition-all duration-200 ease-out"
                    style={{ backgroundColor: 'var(--color-purple-border)' }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* desktop CTA */}
        <div className="hidden md:block">
          <Button href="/courses" variant="primary" withIcon={true}>
            Enroll
          </Button>
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:text-text-primary transition-colors duration-100"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span
            className="transition-transform duration-200 ease-in-out block"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 4.5H16M2 9H16M2 13.5H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </button>

      </header>

      {/* mobile menu — slide down */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? '400px' : '0px' }}
      // if maxheight is if menu open then 400px, else 0px.
      >
        <nav
          id="mobile-menu"
          className="border-t border-bg-border bg-bg-raised px-4 pb-6 pt-2 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm border-b border-bg-border transition-colors duration-100"
                style={{ color: active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-4">
            <Button href="/courses" variant="primary" withIcon={true} className="w-full justify-center">
              Enroll
            </Button>
          </div>
        </nav>
      </div>

    </section>
  )
}

export default Header