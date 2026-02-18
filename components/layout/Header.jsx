import Link from 'next/link'
import React from 'react'
import Button from '../ui/button';

const Header = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "My Learning", href: "/enrolled" },
        { name: "Wishlist", href: "/wishlist" },
    ];

    return (
        <section className='border-b border-b-accent bg-background/50 backdrop-blur-sm'>
            <header className="mx-auto flex max-w-7xl items-center justify-between p-4">

                <Link href="/" className="font-syne text-2xl font-black tracking-tight">
                    Île-Ìwé
                </Link>

                <nav className="flex items-center gap-8 text-sm font-medium text-foreground">
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


                <Button href="/enroll" variant="default" withIcon={true}>
                    Enroll
                </Button>

            </header>

        </section>
    )
}

export default Header