import React from 'react'

const StatCard = ({ value, label }) => {
    return (
        <div
            className="rounded-lg p-6"
            style={{
                backgroundColor: 'var(--color-bg-raised)',
            }}
        >
            <p className="font-syne font-extrabold text-4xl text-text-primary mb-1 leading-none">
                {value}
            </p>
            <p className="font-dm-sans text-[11px] text-text-muted uppercase tracking-[0.15em]">
                {label}
            </p>
        </div>
    );
}

export default StatCard