'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '../ui/button'

const CourseCard = ({ course }) => {
  const { id, title, instructor, category, duration, rating, price } = course
  const [barWidth, setBarWidth] = useState(0)
  const cardRef = useRef(null)

  // animated rating bar when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setBarWidth((rating / 5) * 100), 100)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [rating])

  return (
    <div
      ref={cardRef}
      className="rounded-[14px] border border-bg-border bg-bg-raised overflow-hidden group"
      style={{
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.015)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
        e.currentTarget.style.borderColor = 'var(--color-purple-border)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'var(--color-bg-border)'
      }}
    >
      {/* top */}
      <div className="relative bg-bg-surface p-6 border-b border-bg-border overflow-hidden">
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
      <div className="flex items-center justify-between px-6 py-4.5">
        <div className="flex-1 mr-4">
          <div className="flex justify-between font-dm-mono text-[10px] text-text-muted mb-1.5">
            <span>Rating</span>
            <span>{rating} / 5</span>
          </div>
          <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-overlay)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${barWidth}%`,
                backgroundColor: 'var(--color-purple-vivid)',
                transition: 'width 800ms ease-out',
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
  )
}

export default CourseCard