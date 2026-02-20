'use client'

import CourseCard from './CourseCard'

const CourseGrid = ({ courses }) => {
    return (
        <>
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 300ms ease-out forwards;
        }
      `}</style>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, i) => (
                    <div
                        key={course.id}
                        className="fade-up"
                        style={{ animationDelay: `${i * 60}ms` }}
                    >
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default CourseGrid