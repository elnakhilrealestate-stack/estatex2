import { asc, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { courses, projects, testimonials } from "@/db/schema";
import Header from "@/components/Header";
import { Courses, Footer, Hero, Partners, Projects, Sell } from "@/components/sections";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Render the landing page even while the database is being configured. Each
  // section can safely show its empty state instead of turning the whole page
  // into a 500 response.
  const [projectRows, testimonialRows, courseRows] = await Promise.all([
    db
      .select()
      .from(projects)
      .where(eq(projects.featured, true))
      .orderBy(asc(projects.sort), desc(projects.id))
      .catch(() => []),
    db
      .select()
      .from(testimonials)
      .orderBy(asc(testimonials.sort), asc(testimonials.id))
      .catch(() => []),
    db
      .select()
      .from(courses)
      .orderBy(asc(courses.sort), asc(courses.id))
      .catch(() => []),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projectRows} />
        <Sell />
        <Partners />
        <Testimonials items={testimonialRows} />
        <Courses courses={courseRows} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
