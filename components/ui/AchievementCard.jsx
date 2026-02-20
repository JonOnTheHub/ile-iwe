import React from 'react'

const AchievementCard = ({ label, title, description, badge }) => {
    return (
        <div
            className="relative rounded-[14px] overflow-hidden p-6 flex flex-col gap-4"
            style={{
                backgroundColor: 'var(--color-gold-surface)',
                border: '1px solid var(--color-gold-dim)',
            }}
        >
            {/*star in background */}
            <span
                className="absolute -bottom-4 -right-2 text-[120px] leading-none select-none pointer-events-none"
                style={{ color: 'var(--color-gold-dim)', opacity: 0.25 }}
                aria-hidden="true"
            >
                ★
            </span>

            {/* label */}
            <p className="font-dm-mono text-[10px] uppercase tracking-[0.15em] text-gold-dim">
                {label}
            </p>

            {/* title */}
            <h3
                className="font-syne font-extrabold text-2xl leading-tight"
                style={{ color: 'var(--color-gold)' }}
            >
                {title}
            </h3>

            {/* description */}
            <p className="text-sm text-text-secondary font-light leading-relaxed">
                {description}
            </p>

            {/* badge */}
            {badge && (
                <div className="inline-flex self-start items-center gap-1.5 font-dm-mono text-[10px] px-2.5 py-1 rounded-md"
                    style={{
                        backgroundColor: 'var(--color-gold-surface)',
                        border: '1px solid var(--color-gold-dim)',
                        color: 'var(--color-gold)',
                    }}
                >
                    ★ {badge}
                </div>
            )}
        </div>
    );
}

export default AchievementCard