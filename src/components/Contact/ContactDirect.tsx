import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MessageSquare, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { AvailabilityBadge } from '../shared/AvailabilityBadge';
import {
  DirectWrapper,
  DirectCard,
  ChannelRow,
  ChannelInfo,
  ChannelIconBox,
  ChannelTextGroup,
  ChannelLabel,
  ChannelValue,
  ActionBtnGroup,
  CopyButton,
  DirectLinkBtn,
  CopiedTooltip,
  SocialsBlock,
  SocialsLabel,
  SocialsRow,
  SocialLinkItem,
} from './Contact.styles';

export function ContactDirect() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API blocked
      const textArea = document.createElement('textarea');
      textArea.value = profileData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <DirectWrapper>
      <div>
        <AvailabilityBadge text={profileData.availability} />
      </div>

      <DirectCard>
        {/* Email Channel */}
        <ChannelRow>
          <ChannelInfo>
            <ChannelIconBox>
              <Mail size={20} />
            </ChannelIconBox>
            <ChannelTextGroup>
              <ChannelLabel>Email Utama</ChannelLabel>
              <ChannelValue>{profileData.email}</ChannelValue>
            </ChannelTextGroup>
          </ChannelInfo>

          <ActionBtnGroup>
            <CopyButton
              type="button"
              onClick={handleCopyEmail}
              aria-label="Salin alamat email"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Tersalin' : 'Salin'}</span>
              {copied && <CopiedTooltip>Tersalin ke Clipboard!</CopiedTooltip>}
            </CopyButton>

            <DirectLinkBtn
              href={`mailto:${profileData.email}`}
              aria-label="Kirim email via mail client"
            >
              <ExternalLink size={14} />
              <span>Buka</span>
            </DirectLinkBtn>
          </ActionBtnGroup>
        </ChannelRow>

        {/* WhatsApp Channel */}
        <ChannelRow>
          <ChannelInfo>
            <ChannelIconBox>
              <MessageSquare size={20} />
            </ChannelIconBox>
            <ChannelTextGroup>
              <ChannelLabel>WhatsApp Langsung</ChannelLabel>
              <ChannelValue>+62 895 3256 03726</ChannelValue>
            </ChannelTextGroup>
          </ChannelInfo>

          <ActionBtnGroup>
            <DirectLinkBtn
              href="https://wa.me/62895325603726"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kirim pesan WhatsApp"
            >
              <ExternalLink size={14} />
              <span>Chat</span>
            </DirectLinkBtn>
          </ActionBtnGroup>
        </ChannelRow>

        {/* Location Info */}
        <ChannelRow>
          <ChannelInfo>
            <ChannelIconBox>
              <MapPin size={20} />
            </ChannelIconBox>
            <ChannelTextGroup>
              <ChannelLabel>Domisili &amp; Zona Waktu</ChannelLabel>
              <ChannelValue>{profileData.location}</ChannelValue>
            </ChannelTextGroup>
          </ChannelInfo>
        </ChannelRow>

        {/* Socials Connection */}
        <SocialsBlock>
          <SocialsLabel>Terhubung di Saluran Lain</SocialsLabel>
          <SocialsRow>
            {profileData.socials.map((social) => (
              <SocialLinkItem
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={social.label}
              >
                <img src={social.icon} alt={social.label} />
              </SocialLinkItem>
            ))}
          </SocialsRow>
        </SocialsBlock>
      </DirectCard>
    </DirectWrapper>
  );
}
