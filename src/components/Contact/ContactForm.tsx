import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import {
  FormContainer,
  FormTitleGroup,
  FormTitle,
  FormSubtitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  SubmitButton,
  SuccessAlert,
  SpinnerIcon,
} from './Contact.styles';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Frontend Web Application (React / Vue / TypeScript)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'direct' | 'fallback'>('idle');

  const triggerMailtoFallback = () => {
    const mailSubject = `[Portfolio Inquiry] ${subject} - ${name}`;
    const mailBody = `Nama: ${name}\nEmail: ${email}\nKebutuhan Layanan: ${subject}\n\nPesan:\n${message}`;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus('fallback');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmittedStatus('idle'), 7000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmittedStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '9211c42f-d89f-43fc-b02f-b258671752b0',
          name,
          email,
          subject: `[Portfolio Inquiry] ${subject} - ${name}`,
          message,
          from_name: 'Muhamad Rayhan Portfolio',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmittedStatus('direct');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmittedStatus('idle'), 7000);
      } else {
        // Fallback to mailto if API key limit/issue
        triggerMailtoFallback();
      }
    } catch {
      // Offline / network failure: fallback to mailto
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitleGroup>
        <FormTitle>Kirim Pesan Langsung</FormTitle>
        <FormSubtitle>
          Isi formulir di bawah ini untuk memulai obrolan proyek atau pertanyaan teknis.
        </FormSubtitle>
      </FormTitleGroup>

      {submittedStatus === 'direct' && (
        <SuccessAlert role="status">
          <CheckCircle2 size={18} />
          <span>
            Pesan Anda telah berhasil terkirim langsung! Saya akan membalas segera ke email Anda ({email || 'kontak'}).
          </span>
        </SuccessAlert>
      )}

      {submittedStatus === 'fallback' && (
        <SuccessAlert role="status">
          <CheckCircle2 size={18} />
          <span>
            Pesan Anda telah disiapkan melalui aplikasi email. Terima kasih telah menghubungi!
          </span>
        </SuccessAlert>
      )}

      <FormGroup>
        <FormLabel htmlFor="contact-name">Nama Lengkap</FormLabel>
        <FormInput
          id="contact-name"
          type="text"
          placeholder="Nama Anda atau Perusahaan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-email">Alamat Email</FormLabel>
        <FormInput
          id="contact-email"
          type="email"
          placeholder="nama@perusahaan.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-subject">Kebutuhan / Layanan</FormLabel>
        <FormSelect
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={isSubmitting}
        >
          <option value="Frontend Web Application (React / Vue / TypeScript)">
            Frontend Web Application (React / Vue / TypeScript)
          </option>
          <option value="Landing Page & Design Implementation">
            Landing Page &amp; Design Implementation
          </option>
          <option value="Full-time / Contract / Freelance Opportunity">
            Peluang Kerja (Full-time / Contract / Freelance)
          </option>
          <option value="General Technical Inquiry">
            Pertanyaan Teknis &amp; Konsultasi Lainnya
          </option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-message">Pesan / Detail Kebutuhan</FormLabel>
        <FormTextarea
          id="contact-message"
          rows={5}
          placeholder="Ceritakan gambaran singkat proyek, ruang lingkup teknis, atau penawaran kerja sama..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSubmitting}
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <SpinnerIcon>
              <Loader2 size={16} />
            </SpinnerIcon>
            <span>Mengirim Pesan...</span>
          </>
        ) : (
          <>
            <span>Kirim Pesan</span>
            <Send size={15} />
          </>
        )}
      </SubmitButton>
    </FormContainer>
  );
}
