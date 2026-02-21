'use client'

import { useState } from 'react'
import CourseGrid from '@/components/courses/CourseGrid'
import courses from '@/data/courses'

const categories = [
    "All", "Web Development", "Data Science", "Design",
    "Backend Development", "Cybersecurity", "DevOps",
    "Mobile Development", "AI & Machine Learning",
]

const CoursePage = () => {
    const [active, setActive] = useState('All')

    const filteredCourses = active === 'All'
        ? courses
        : courses.filter((c) => c.category === active)
    // when active is all, all courses, else courses filtered by category

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">

            {/* Header */}
            <div className="opacity-0 animate-[fadeUp_300ms_ease-out_forwards] delay-0">
                <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
                    All Courses
                </h1>
                <p className="text-text-secondary text-sm">
                    {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}{active !== 'All' ? ` in ${active}` : ' across 8 categories. Something for every level.'}
                </p>
            </div>

            {/* Filters */}
            <div
                className="flex flex-wrap gap-2 opacity-0 animate-[fadeUp_300ms_ease-out_forwards] delay-0"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActive(category)}
                        className="font-dm-mono text-[11px] tracking-[0.05em] px-3 py-1.5 rounded-lg border transition-colors duration-100"
                        style={{
                            backgroundColor: active === category ? 'var(--color-purple-soft)' : 'var(--color-bg-raised)',
                            borderColor: active === category ? 'var(--color-purple-border)' : 'var(--color-bg-border)',
                            color: active === category ? '#c4748e' : 'var(--color-text-muted)',
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <CourseGrid courses={filteredCourses} />

        </div>
    )
}

export default CoursePage