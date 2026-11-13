import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';
import { AvailabilityBadge } from '../shared/AvailabilityBadge';
import {
  HeroSection,
  HeroContainer,
  TextColumn,
  NameHeading,
  RoleSubtitle,
  HeadlineParagraph,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  SocialRow,
  SocialIconLink,
  PhotoColumn,
  PolaroidCard,
  ProfileImage,
  PolaroidCaption,
} from './Hero.styles';

const easeOut = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  return (
    <HeroSection id="hero">
      <HeroContainer>
        <TextColumn>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <AvailabilityBadge text={profileData.availability} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
          >
            <NameHeading>
              {profileData.name}
              <span>.</span>
            </NameHeading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
          >
            <RoleSubtitle>{profileData.role}</RoleSubtitle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: easeOut }}
          >
            <HeadlineParagraph>{profileData.headline}</HeadlineParagraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: easeOut }}
          >
            <ButtonGroup>
              <PrimaryButton href="#projects">
                <span>Lihat Proyek</span>
                <ArrowDown size={16} />
              </PrimaryButton>

              <SecondaryButton href="#contact">
                <span>Hubungi</span>
                <Mail size={16} />
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: easeOut }}
          >
            <SocialRow>
              {profileData.socials.map((social) => (
                <SocialIconLink
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <img src={social.icon} alt={social.label} />
                </SocialIconLink>
              ))}
            </SocialRow>
          </motion.div>
        </TextColumn>

        <PhotoColumn>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <PolaroidCard>
              <ProfileImage
                src={profileData.avatar}
                alt={profileData.name}
                loading="eager"
              />
              <PolaroidCaption>
                <img src="/icons/ui/location.svg" alt="Lokasi" />
                <span>{profileData.location}</span>
              </PolaroidCaption>
            </PolaroidCard>
          </motion.div>
        </PhotoColumn>
      </HeroContainer>
    </HeroSection>
  );
}
