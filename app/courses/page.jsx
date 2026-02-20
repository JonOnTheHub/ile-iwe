import CourseCard from '@/components/courses/CourseCard';
import React from 'react'
import courses from '@/data/courses';

export const metadata = {
    title: "Courses — Île-Ìwé",
    description: "Browse all courses across categories.",
};

const CoursePage = () => {
    const categories = [
        "All",
        "Web Development",
        "Data Science",
        "Design",
        "Backend Development",
        "Cybersecurity",
        "DevOps",
        "Mobile Development",
        "AI & Machine Learning",
    ];
    return (

        <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">


            {/* page header */}
            <div>
                <h1 className="font-syne font-extrabold text-4xl text-text-primary mb-2">
                    All Courses
                </h1>
                <p className="text-text-secondary text-sm">
                    {courses.length} courses across 8 categories. Something for every level.
                </p>
            </div>

            {/* category filter — static, filter later abeg */}
            <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                    <span
                        key={category}
                        className="font-dm-mono text-[11px] tracking-[0.05em] px-3 py-1.5 rounded-lg border border-bg-border bg-bg-raised text-text-muted cursor-pointer hover:border-purple-border hover:text-text-primary transition-colors"
                    >
                        {category}
                    </span>
                ))}
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

        </div>
    );
}
export default CoursePage