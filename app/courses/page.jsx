import CourseGrid from '@/components/courses/CourseGrid'
import courses from '@/data/courses'

export const metadata = {
    title: "Courses — Île-Ìwé",
    description: "Browse all courses across categories.",
}

const categories = [
    "All", "Web Development", "Data Science", "Design",
    "Backend Development", "Cybersecurity", "DevOps",
    "Mobile Development", "AI & Machine Learning",
]

const CoursePage = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">

            {/* header */}
            <div
                style={{
                    opacity: 0,
                    animation: 'fadeUp 300ms ease-out forwards',
                    animationDelay: '0ms',
                }}
            >
                <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
                    All Courses
                </h1>
                <p className="text-text-secondary text-sm">
                    {courses.length} courses across 8 categories. Something for every level.
                </p>
            </div>

            {/* filters */}
            <div
                className="flex flex-wrap gap-2"
                style={{
                    opacity: 0,
                    animation: 'fadeUp 300ms ease-out forwards',
                    animationDelay: '60ms',
                }}
            >
                {categories.map((category) => (
                    <span
                        key={category}
                        className="font-dm-mono text-[11px] tracking-[0.05em] px-3 py-1.5 rounded-lg border border-bg-border bg-bg-raised text-text-muted cursor-pointer hover:border-purple-border hover:text-text-primary transition-colors duration-100"
                    >
                        {category}
                    </span>
                ))}
            </div>

            {/* grid */}
            <CourseGrid courses={courses} />

        </div>
    )
}

export default CoursePage