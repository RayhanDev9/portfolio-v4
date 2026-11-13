import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
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
} from './Contact.styles';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Frontend Web Application (React / Vue / TypeScript)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailSubject = `[Portfolio Inquiry] ${subject} - ${name}`;
    const mailBody = `Nama: ${name}\nEmail: ${email}\nKebutuhan Layanan: ${subject}\n\nPesan:\n${message}`;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;

    // Open user's email client
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitleGroup>
        <FormTitle>Kirim Pesan Langsung</FormTitle>
        <FormSubtitle>
          Isi formulir di bawah ini untuk memulai obrolan proyek atau pertanyaan teknis.
        </FormSubtitle>
      </FormTitleGroup>

      {submitted && (
        <SuccessAlert role="status">
          <CheckCircle2 size={18} />
          <span>
            Pesan Anda siap dikirimkan melalui aplikasi email. Terima kasih telah menghubungi!
          </span>
        </SuccessAlert>
      )}

      <FormGroup>
        <FormLabel htmlFor="contact-name">Nama Lengkap</FormLabel>
        <FormInput
          id="contact-name"
          type="text"
          required
          placeholder="Misal: Alex Wicaksono"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-email">Alamat Email</FormLabel>
        <FormInput
          id="contact-email"
          type="email"
          required
          placeholder="email@perusahaan.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-subject">Layanan / Topik Proyek</FormLabel>
        <FormSelect
          id="contact-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="Frontend Web Application (React / Vue / TypeScript)">
            Frontend Web Application (React / Vue / TypeScript)
          </option>
          <option value="Landing Page & Web Profile">
            Landing Page &amp; Web Profile
          </option>
          <option value="UI/UX Implementation & Slicing">
            UI/UX Implementation &amp; Slicing
          </option>
          <option value="Diskusi & Konsultasi Teknis">
            Diskusi &amp; Konsultasi Teknis
          </option>
        </FormSelect>
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="contact-message">Pesan Anda</FormLabel>
        <FormTextarea
          id="contact-message"
          required
          placeholder="Ceritakan gambaran singkat kebutuhan proyek, estimasi waktu, atau pertanyaan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>

      <SubmitButton type="submit">
        <span>Kirim Pesan Sekarang</span>
        <Send size={15} />
      </SubmitButton>
    </FormContainer>
  );
}
