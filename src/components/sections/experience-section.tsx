import { experiences } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { AnimatedSection } from '../animated-section';

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">
          Strategic Leadership & Professional Engagement
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From orchestrating national hackathons to collaborating on design strategies, I thrive in dynamic, impactful roles.
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((exp, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg">
                <div className="text-left">
                  <span className="font-bold">{exp.role}</span>
                  <span className="text-muted-foreground"> | {exp.organization}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
