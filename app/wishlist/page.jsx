'use client'

import CourseGrid from '@/components/courses/CourseGrid'
import { useApp } from '@/context/AppContext'
import Link from 'next/link'

const WishlistPage = () => {
  const { wishlist } = useApp()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">

      <div>
        <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
          Wishlist
        </h1>
        <p className="text-text-secondary text-sm">
          {wishlist.length === 0
            ? 'No courses saved yet.'
            : `${wishlist.length} course${wishlist.length > 1 ? 's' : ''} saved.`}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="rounded-2xl border border-bg-border bg-bg-raised p-16 flex flex-col items-center justify-center text-center gap-4">
          <p className="font-syne font-bold text-2xl text-text-primary">Nothing here yet</p>
          <p className="text-text-secondary text-sm max-w-sm">
            Browse courses and hit Add to Wishlist to save them for later.
          </p>
          <Link
            href="/courses"
            className="mt-2 font-dm-mono text-[11px] text-purple-vivid tracking-[0.05em] hover:text-purple-bright transition-colors"
          >
            Browse courses →
          </Link>
        </div>
      ) : (
        <CourseGrid courses={wishlist} />
      )}

    </div>
  )
}

export default WishlistPage

