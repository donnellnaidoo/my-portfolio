import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has been the foundation of my journey into the tech world.
          Graduating Cum-Laude with a Diploma in Business Information Technology
          from the University of Johannesburg gave me a strong foundation in
          software development, information systems, and business analysis.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I am now pursuing an Advanced Diploma in Business Information Technology,
          deepening my expertise in advanced programming, database systems,
          software engineering, and business analysis. My academic journey is
          complemented by hands-on projects and AI-focused work that bridges
          theory with real-world impact.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;
