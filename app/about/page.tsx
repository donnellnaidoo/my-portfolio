import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Donnell</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Early-career developer, lifelong learner, and tech educator.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am an early-career software developer and AI practitioner with a
          Cum-Laude diploma in Business Information Technology from the
          University of Johannesburg. My passion lies in building full-stack
          applications, AI-powered solutions, and data-driven tools that solve
          real problems for communities and organizations.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I have experience designing responsive user interfaces, scalable
          backends, RESTful APIs, and database systems. I also mentor university
          students in software development, helping them navigate programming
          and software engineering with clarity and confidence.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I thrive at the intersection of technology and impact — whether I am
          building an AI-powered civic transparency platform, an insurance
          coverage assistant, or a crime detection system, I focus on creating
          solutions that are practical, responsible, and human-centered.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into backend development with Node.js and Express to expand my skill set and deliver powerful, server-side solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I aim to
          contribute to impactful projects that make a difference in users'
          lives.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
