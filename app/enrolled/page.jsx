'use client'

import CourseGrid from '@/components/courses/CourseGrid'
import { useApp } from '@/context/AppContext'
import Link from 'next/link'

const EnrolledPage = () => {
  const { enrolled } = useApp()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">

      <div>
        <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
          My Learning
        </h1>
        <p className="text-text-secondary text-sm">
          {enrolled.length === 0
            ? "You haven't enrolled in any courses yet."
            : `${enrolled.length} course${enrolled.length > 1 ? 's' : ''} in progress.`}
        </p>
      </div>

      {enrolled.length === 0 ? (
        <div className="rounded-2xl border border-bg-border bg-bg-raised p-16 flex flex-col items-center justify-center text-center gap-4">
          <p className="font-syne font-bold text-2xl text-text-primary">No courses yet</p>
          <p className="text-text-secondary text-sm max-w-sm">
            Find a course that challenges you and hit Enroll Now to get started.
          </p>
          <Link
            href="/courses"
            className="mt-2 font-dm-mono text-[11px] text-purple-vivid tracking-[0.05em] hover:text-purple-bright transition-colors"
          >
            Browse courses →
          </Link>
        </div>
      ) : (
        <CourseGrid courses={enrolled} />
      )}

    </div>
  )
}

export default EnrolledPage