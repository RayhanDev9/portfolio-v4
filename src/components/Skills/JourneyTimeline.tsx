import { motion } from 'motion/react';
import { journeyMilestones } from '../../data/journey';
import {
  JourneyHeader,
  JourneyTitle,
  JourneySubtitle,
  TimelineWrapper,
  TimelineLine,
  MilestoneItem,
  MilestoneNodeWrapper,
  MilestoneNode,
  MilestoneCard,
  MilestoneTitle,
  MilestoneHeadline,
  MilestoneDescription,
  TechTagRow,
  TechTag,
} from './Skills.styles';

const easeOut = [0.4, 0, 0.2, 1] as const;

export function JourneyTimeline() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <JourneyHeader>
          <JourneyTitle>Career Journey</JourneyTitle>
          <JourneySubtitle>
            Perjalanan rekam jejak teknis dari fundamental web standards hingga arsitektur SPA skala produksi.
          </JourneySubtitle>
        </JourneyHeader>
      </motion.div>

      <TimelineWrapper>
        <TimelineLine />
        {journeyMilestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: index * 0.15, ease: easeOut }}
          >
            <MilestoneItem>
              <MilestoneNodeWrapper>
                <MilestoneNode>{milestone.year}</MilestoneNode>
              </MilestoneNodeWrapper>

              <MilestoneCard>
                <MilestoneTitle>{milestone.title}</MilestoneTitle>
                <MilestoneHeadline>{milestone.headline}</MilestoneHeadline>
                <MilestoneDescription>{milestone.description}</MilestoneDescription>

                <TechTagRow>
                  {milestone.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechTagRow>
              </MilestoneCard>
            </MilestoneItem>
          </motion.div>
        ))}
      </TimelineWrapper>
    </div>
  );
}
