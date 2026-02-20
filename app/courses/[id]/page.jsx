import CourseDetail from "@/components/courses/CourseDetail";
import courses from "@/data/courses";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));
  if (!course) return { title: "Course Not Found — Île-Ìwé" };
  return {
    title: `${course.title} — Île-Ìwé`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) notFound();

  return <CourseDetail course={course} />;
}