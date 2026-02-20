import React from 'react'
import Button from '../ui/button'

const CourseCard = ({ course }) => {
  const { id, title, instructor, category, duration, rating, price } = course;

  return (
    <div className="rounded-[14px] border border-bg-border bg-bg-raised overflow-hidden">

      {/* top */}
      <div className="relative bg-bg-surface p-6 border-b border-bg-border overflow-hidden">

        {/* purple glow — top-right per spec */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, var(--color-purple-vivid) 0%, transparent 70%)',
            opacity: 0.12,
          }}
        />

        {/* category tag */}
        <div
          className="inline-flex items-center font-dm-mono text-[10px] tracking-[0.05em] px-2 py-0.5 rounded mb-3.5"
          style={{
            backgroundColor: 'var(--color-purple-soft)',
            border: '1px solid var(--color-purple-border)',
            color: '#c4748e',
          }}
        >
          {category}
        </div>

        <h3 className="font-syne font-bold text-lg text-text-primary leading-snug mb-1.5">
          {title}
        </h3>

        <p className="text-[13px] text-text-secondary font-light">
          {instructor} · {duration}
        </p>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between px-6 py-[18px]">
        <div className="flex-1 mr-4">
          <div className="flex justify-between font-dm-mono text-[10px] text-text-muted mb-1.5">
            <span>Rating</span>
            <span>{rating} / 5</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-overlay)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${(rating / 5) * 100}%`,
                backgroundColor: 'var(--color-purple-vivid)',
              }}
            />
          </div>
          <div className="mt-2 font-dm-mono text-[10px] text-text-muted">
            {price === 0 ? <span className="text-success">Free</span> : <span>${price}</span>}
          </div>
        </div>

        <Button href={`/courses/${id}`} variant="primary" withIcon={false}>
          View Course
        </Button>
      </div>
    </div>
  );
}

export default CourseCard