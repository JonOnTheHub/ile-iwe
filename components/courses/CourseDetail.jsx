"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

const CourseDetail = ({ course }) => {
    const {
        title,
        instructor,
        category,
        duration,
        description,
        image,
        price,
        rating,
        keywords,
    } = course;

    const { addToWishlist, removeFromWishlist, isWishlisted, enrollInCourse, isEnrolled } = useApp()

    const wishlisted = isWishlisted(course.id)
    const enrolled = isEnrolled(course.id)

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 space-y-10">
            {/* hero */}
            <div className="relative w-full h-120 rounded-3xl overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover" priority />

                {/* gradient for accessibility */}
                <div
                    className="absolute inset-0 bg-linear-to-t from-[rgba(8,8,7,0.95)] via-[rgba(8,8,7,0.4)] to-transparent"
                />

                {/* purple accent */}
                <div
                    className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_90%_10%,rgba(157,23,77,0.2)_0%,transparent_50%)]"
                />

                {/* overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div
                        className="inline-flex items-center font-dm-mono text-[10px] tracking-[0.05em] px-2 py-0.5 rounded mb-4 bg-purple-soft border border-purple-border text-[#c4748e]"

                    >
                        {category}
                    </div>
                    <h1 className="font-syne font-extrabold text-4xl sm:text-5xl text-text-primary leading-tight mb-4 max-w-2xl">
                        {title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 font-dm-mono text-[11px] text-text-muted">
                        <span>{instructor}</span>
                        <span
                            className="w-1 h-1 rounded-full bg-bg-border"
                            aria-hidden="true"
                        />
                        <span>{duration}</span>
                        <span
                            className="w-1 h-1 rounded-full bg-bg-border"
                            aria-hidden="true"
                        />
                        <span>{rating} / 5</span>
                        <span
                            className="w-1 h-1 rounded-full bg-bg-border"
                            aria-hidden="true"
                        />
                        {price === 0 ? (
                            <span className="text-success">Free</span>
                        ) : (
                            <span>${price}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* desc, keywords */}
                <div className="lg:col-span-2 space-y-6">
                    <p className="text-text-secondary font-light leading-relaxed text-base">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map((keyword) => (
                            <span
                                key={keyword}
                                className="font-dm-mono text-[10px] tracking-[0.05em] px-2 py-0.5 rounded bg-purple-soft border border-purple-border text-[#c4748e]"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Sticky action panel */}
                <div
                    className="rounded-2xl border p-6 space-y-4 h-fit sticky top-24 bg-bg-raised border-bg-border"
                >
                    <p className="font-syne font-extrabold text-3xl text-text-primary">
                        {price === 0 ? "Free" : `$${price}`}
                    </p>
                    <div className="space-y-2">
                        <Button
                            onClick={() => enrollInCourse(course)}
                            variant={enrolled ? "secondary" : "primary"}
                            withIcon={false}
                            className="w-full justify-center"
                        >
                            {enrolled ? 'Enrolled ✓' : 'Enroll Now'}
                        </Button>

                        <Button
                            onClick={wishlisted ? () => removeFromWishlist(course.id) : () => addToWishlist(course)}
                            variant="secondary"
                            withIcon={false}
                            className="w-full justify-center"
                        >
                            {wishlisted ? 'Wishlisted ✓' : 'Add to Wishlist'}
                        </Button>
                    </div>
                    <div
                        className="pt-4 border-t space-y-2 border-bg-border"
                    >
                        {[
                            ["Instructor", instructor],
                            ["Duration", duration],
                            ["Rating", `${rating} / 5`],
                            ["Category", category],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="flex justify-between font-dm-mono text-[11px]"
                            >
                                <span className="text-text-muted">{label}</span>
                                <span className="text-text-secondary">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;

// cinematic shit lmfao.
