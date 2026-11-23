import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { SkillGroup } from "@/lib/types";

interface SkillsProps {
  skills: readonly SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title={SECTION_TITLES.skills} titleId="skills-section">
      <dl className="space-y-2 print:space-y-0.5">
        {skills.map((group) => (
          <div
            key={group.label}
            className="sm:flex sm:gap-x-3 print:flex print:gap-x-2"
          >
            <dt className="shrink-0 text-sm font-medium text-foreground sm:w-36 print:w-28 print:text-[10px]">
              {group.label}
            </dt>
            <dd>
              <TagList
                tags={group.items}
                label={group.label}
                variant="skills"
              />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
