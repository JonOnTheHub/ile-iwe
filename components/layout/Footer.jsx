import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-t-accent py-16">
      <section className="mx-auto max-w-7xl px-4">

        <div className="grid gap-12 md:grid-cols-4">

          <div className="space-y-4">
            <h2 className="font-syne text-xl font-bold">Île-Ìwé</h2>
            <p className="text-sm text-muted-foreground">
              Learn tech skills that matter. Structured courses. Real progress.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Platform</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/courses" className="hover:text-foreground transition-colors">
                Courses
              </Link>
              <Link href="/enrolled" className="hover:text-foreground transition-colors">
                My Learning
              </Link>
              <Link href="/wishlist" className="hover:text-foreground transition-colors">
                Wishlist
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/" className="hover:text-foreground transition-colors">
                Community
              </Link>
              <Link href="/" className="hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-border pt-6 text-sm text-muted-foreground flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Île-Ìwé. All rights reserved.</p>
          <p>Built for focused learners.</p>
        </div>

      </section>
    </footer>
  )
}

export default Footer