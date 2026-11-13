import { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { JourneyTimeline } from './JourneyTimeline';
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TabsWrapper,
  TabButton,
  SkillGrid,
  SectionDivider,
} from './Skills.styles';

const SKILL_TABS: { value: 'all' | number; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 0, label: 'Languages & Core' },
  { value: 1, label: 'Frameworks & Libraries' },
  { value: 2, label: 'Styling & UI' },
];

const easeOut = [0.4, 0, 0.2, 1] as const;

export function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | number>('all');

  const displayedSkills =
    activeTab === 'all'
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories[activeTab]?.skills || [];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <SectionHeader>
            <SectionTitle>Skills &amp; Journey</SectionTitle>
            <SectionSubtitle>
              Teknologi yang digunakan sehari-hari dan rekam jejak eksplorasi arsitektur frontend.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
        >
          <TabsWrapper role="tablist" aria-label="Filter kategori skills">
            {SKILL_TABS.map((tab) => (
              <TabButton
                key={String(tab.value)}
                $active={activeTab === tab.value}
                onClick={() => setActiveTab(tab.value)}
                role="tab"
                aria-selected={activeTab === tab.value}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabsWrapper>
        </motion.div>

        <SkillGrid>
          {displayedSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </SkillGrid>

        <SectionDivider />

        <JourneyTimeline />
      </SkillsContainer>
    </SkillsSection>
  );
}
