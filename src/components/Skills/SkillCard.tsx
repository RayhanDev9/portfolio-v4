import { motion } from 'motion/react';
import type { SkillItem } from '../../types/portfolio';
import {
  SkillCardContainer,
  SkillIcon,
  SkillName,
} from './Skills.styles';

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

const easeOut = [0.4, 0, 0.2, 1] as const;

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: easeOut }}
      style={{ height: '100%' }}
    >
      <SkillCardContainer title={skill.name}>
        <SkillIcon src={skill.icon} alt={skill.name} loading="lazy" />
        <SkillName>{skill.name}</SkillName>
      </SkillCardContainer>
    </motion.div>
  );
}
