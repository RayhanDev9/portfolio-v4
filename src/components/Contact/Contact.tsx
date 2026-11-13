import { motion } from 'motion/react';
import { ContactDirect } from './ContactDirect';
import { ContactForm } from './ContactForm';
import {
  ContactSection,
  ContactContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ContactGrid,
} from './Contact.styles';

const easeOut = [0.4, 0, 0.2, 1] as const;

export function Contact() {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <SectionHeader>
            <SectionTitle>Let&apos;s Connect</SectionTitle>
            <SectionSubtitle>
              Terbuka untuk kolaborasi proyek frontend, peluang remote/freelance, atau diskusi teknis seputar arsitektur web modern.
            </SectionSubtitle>
          </SectionHeader>
        </motion.div>

        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: easeOut }}
          >
            <ContactDirect />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.15, ease: easeOut }}
          >
            <ContactForm />
          </motion.div>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
}
