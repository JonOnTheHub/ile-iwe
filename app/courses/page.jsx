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
    // tracks which category is selected (default is 'All')
    const [query, setQuery] = useState('')
    // tracks what's typed in search bar (default is '' (empty string))


    const handleSearch = (e) => {
        setQuery(e.target.value)
        setActive('All')
    }
    // for everytime the search bar is typed into, resets the category selected to default and updates query to what is in the search bar

    const filteredCourses = courses.filter((course) => {
        const matchesCategory = active === 'All' || course.category === active
        const q = query.toLowerCase().trim()
        const matchesQuery = !q ||
            c.title.toLowerCase().includes(q) ||
            c.instructor.toLowerCase().includes(q) ||
            c.keywords.some((keyword) => keyword.toLowerCase().includes(q))
        return matchesCategory && matchesQuery
    })
    // filters through courses and keeps the ones that passes matchesCategory && matchesQuery 
    // matchesCategory has an OR and returns true if active is all OR if course category is matching the selected one. 
    // matchesQuery cleans up search input via trim and lowercasing. lots of OR cases, if q is empty, !q is true., so all courses pass. if q has something, it checks the thing against the title, instructor or keywords and if it's found it is also true, passes result. 

    function subtitle() {
        if (query.trim()) return `${filteredCourses.length} result${filteredCourses.length !== 1 ? 's' : ''} for "${query.trim()}"`
        if (active !== 'All') return `${filteredCourses.length} course${filteredCourses.length !== 1 ? 's' : ''} in ${active}`
        return `${filteredCourses.length} courses across 8 categories. Something for every level.`
    }
    // // traditional function, returns the right description string depending on what's happened. checks query, if there's shit there, show the result count, checks category, if it's not All, show the result count. if All show the default. has the dumb if length is not equal to 1, then "s" or else empty string. fucking chore

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">

            {/* Header */}
            <div className="opacity-0 animate-[fadeUp_300ms_ease-out_forwards] delay-0">
                <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
                    All Courses
                </h1>
                <p className="text-text-secondary text-sm">
                    {subtitle()}
                </p>
            </div>

            {/* search */}
            <div className="opacity-0 animate-[fadeUp_300ms_ease-out_forwards] delay-0">
                <input
                    type="search"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search by title, instructor, or keyword…"
                    className="w-full h-10 rounded-lg border px-4 text-sm font-dm-sans bg-bg-raised text-text-primary outline-none transition-colors duration-100"
                    style={{
                        borderColor: query ? 'var(--color-purple-border)' : 'var(--color-bg-border)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-purple-border)'}
                    onBlur={e => e.target.style.borderColor = query ? 'var(--color-purple-border)' : 'var(--color-bg-border)'}
                />
            </div>

            {/* filters */}
            <div className="flex flex-wrap gap-2 opacity-0 animate-[fadeUp_300ms_ease-out_forwards] delay-0">
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

            {/* empty state, incase */}
            {filteredCourses.length === 0 && (
                <div className="text-center py-20">
                    <p className="font-syne font-bold text-xl text-text-primary mb-2">No courses found</p>
                    <p className="text-text-muted text-sm font-dm-sans">Try a different search term or browse all categories.</p>
                </div>
            )}

            {/* grid */}
            <CourseGrid courses={filteredCourses} />

        </div>
    )
}

export default CoursePage