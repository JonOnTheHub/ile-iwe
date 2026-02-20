import React from 'react'

const ModuleCard = ({ title, description, index, completed = false }) => {
    return (
        <div
            className="rounded-[14px] p-6 transition-colors"
            style={{
                backgroundColor: 'var(--color-bg-raised)',
                border: `1px solid ${completed ? 'rgba(34,201,122,0.5)' : 'var(--color-bg-border)'}`,
            }}
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                    {/* module number */}
                    <span
                        className="font-dm-mono text-[11px] shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: completed ? 'rgba(34,201,122,0.12)' : 'var(--color-bg-surface)',
                            color: completed ? 'var(--color-success)' : 'var(--color-text-muted)',
                            border: `1px solid ${completed ? 'rgba(34,201,122,0.4)' : 'var(--color-bg-border)'}`,
                        }}
                    >
                        {index}
                    </span>

                    <h3 className="font-syne font-semibold text-base text-text-primary leading-snug">
                        {title}
                    </h3>
                </div>

                {/* completion */}
                {completed && (
                    <span
                        className="shrink-0 font-dm-mono text-[10px] px-2 py-0.5 rounded"
                        style={{
                            backgroundColor: 'rgba(34,201,122,0.12)',
                            border: '1px solid rgba(34,201,122,0.4)',
                            color: 'var(--color-success)',
                        }}
                    >
                        Done
                    </span>
                )}
            </div>

            {description && (
                <p className="text-sm text-text-secondary font-light leading-relaxed ml-10">
                    {description}
                </p>
            )}

            {/* progress bar */}
            <div className="mt-4 ml-10 h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-overlay)' }}>
                <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                        width: completed ? '100%' : '0%',
                        backgroundColor: 'var(--color-purple-vivid)',
                    }}
                />
            </div>
        </div>
    );
}

export default ModuleCard