import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'motion/react';
import {
  Search,
  ArrowRight,
  FileDown,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Home,
  FolderGit2,
  Award,
  Code2,
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';
import {
  PaletteBackdrop,
  PaletteDialog,
  SearchHeader,
  SearchInputField,
  EscKeyBadge,
  ResultsList,
  GroupHeader,
  PaletteItem,
  ItemLeft,
  ItemTextGroup,
  ItemTitle,
  ItemSubtitle,
  ItemShortcut,
  EmptyNotice,
  PaletteFooter,
  FooterKeyHints,
} from './CommandPalette.styles';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  group: 'Navigasi Cepat' | 'Studi Kasus Proyek' | 'Aksi Cepat';
  title: string;
  subtitle?: string;
  icon: typeof Home;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = profileData.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const navItems: CommandItem[] = [
    {
      id: 'nav-home',
      group: 'Navigasi Cepat',
      title: 'Halaman Beranda',
      subtitle: 'Kembali ke intro, proyek unggulan, dan keahlian',
      icon: Home,
      action: () => {
        navigate('/');
        onClose();
      },
      shortcut: 'G H',
    },
    {
      id: 'nav-projects',
      group: 'Navigasi Cepat',
      title: 'Katalog Semua Proyek',
      subtitle: 'Lihat seluruh 10 proyek aplikasi dan landing page',
      icon: FolderGit2,
      action: () => {
        navigate('/projects');
        onClose();
      },
      shortcut: 'G P',
    },
    {
      id: 'nav-certificates',
      group: 'Navigasi Cepat',
      title: 'Katalog Semua Sertifikat',
      subtitle: 'Lihat 12 kredensial sertifikasi resmi & penghargaan',
      icon: Award,
      action: () => {
        navigate('/certificates');
        onClose();
      },
      shortcut: 'G C',
    },
    {
      id: 'nav-contact',
      group: 'Navigasi Cepat',
      title: 'Hubungi Saya (Kontak)',
      subtitle: 'Buka formulir pesan dan channel komunikasi langsung',
      icon: MessageSquare,
      action: () => {
        navigate('/#contact');
        onClose();
      },
      shortcut: 'G K',
    },
  ];

  const projectItems: CommandItem[] = projectsData.map((project) => ({
    id: `project-${project.id}`,
    group: 'Studi Kasus Proyek',
    title: project.title,
    subtitle: `${project.category.toUpperCase()} • ${project.skills.slice(0, 3).join(', ')}`,
    icon: Code2,
    action: () => {
      navigate(`/projects/${project.id}`);
      onClose();
    },
  }));

  const actionItems: CommandItem[] = [
    ...(profileData.resumeUrl
      ? [
          {
            id: 'action-resume',
            group: 'Aksi Cepat' as const,
            title: 'Unduh CV / Resume ATS (PDF)',
            subtitle: 'Buka salinan resume terbaru dalam format PDF',
            icon: FileDown,
            action: () => {
              window.open(profileData.resumeUrl, '_blank');
              onClose();
            },
          },
        ]
      : []),
    {
      id: 'action-email',
      group: 'Aksi Cepat',
      title: copiedEmail ? 'Email Berhasil Disalin!' : 'Salin Alamat Email',
      subtitle: profileData.email,
      icon: copiedEmail ? Check : Copy,
      action: () => {
        handleCopyEmail();
      },
    },
    {
      id: 'action-whatsapp',
      group: 'Aksi Cepat',
      title: 'Hubungi via WhatsApp',
      subtitle: 'Kirim pesan instan langsung ke WhatsApp',
      icon: ExternalLink,
      action: () => {
        window.open('https://wa.me/62895325603726', '_blank');
        onClose();
      },
    },
    {
      id: 'action-github',
      group: 'Aksi Cepat',
      title: 'Buka Repositori GitHub',
      subtitle: 'github.com/RayhanDev9',
      icon: ExternalLink,
      action: () => {
        window.open('https://github.com/RayhanDev9', '_blank');
        onClose();
      },
    },
  ];

  const allItems: CommandItem[] = [...navItems, ...projectItems, ...actionItems];

  const q = query.trim().toLowerCase();
  const filteredItems = allItems.filter((item) => {
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.group.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  // Group items
  const groups = ['Navigasi Cepat', 'Studi Kasus Proyek', 'Aksi Cepat'] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <PaletteBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <PaletteDialog
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <SearchHeader>
              <Search size={18} />
              <SearchInputField
                ref={inputRef}
                type="text"
                placeholder="Ketik navigasi, nama proyek, atau aksi..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                aria-label="Cari di Command Palette"
              />
              <EscKeyBadge>ESC</EscKeyBadge>
            </SearchHeader>

            <ResultsList role="listbox">
              {filteredItems.length > 0 ? (
                groups.map((group) => {
                  const itemsInGroup = filteredItems.filter((i) => i.group === group);
                  if (itemsInGroup.length === 0) return null;

                  return (
                    <div key={group}>
                      <GroupHeader>{group}</GroupHeader>
                      {itemsInGroup.map((item) => {
                        const index = filteredItems.indexOf(item);
                        const isSelected = index === selectedIndex;
                        const Icon = item.icon;

                        return (
                          <PaletteItem
                            key={item.id}
                            $selected={isSelected}
                            onClick={() => item.action()}
                            onMouseEnter={() => setSelectedIndex(index)}
                            role="option"
                            aria-selected={isSelected}
                          >
                            <ItemLeft>
                              <Icon size={16} />
                              <ItemTextGroup>
                                <ItemTitle>{item.title}</ItemTitle>
                                {item.subtitle && <ItemSubtitle>{item.subtitle}</ItemSubtitle>}
                              </ItemTextGroup>
                            </ItemLeft>

                            {item.shortcut ? (
                              <ItemShortcut>{item.shortcut}</ItemShortcut>
                            ) : (
                              <ArrowRight size={13} style={{ opacity: isSelected ? 1 : 0.4 }} />
                            )}
                          </PaletteItem>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <EmptyNotice>Tidak ada hasil yang cocok dengan &ldquo;{query}&rdquo;</EmptyNotice>
              )}
            </ResultsList>

            <PaletteFooter>
              <FooterKeyHints>
                <span>
                  <EscKeyBadge>↑</EscKeyBadge> <EscKeyBadge>↓</EscKeyBadge> Navigasi
                </span>
                <span>
                  <EscKeyBadge>↵</EscKeyBadge> Pilih
                </span>
                <span>
                  <EscKeyBadge>esc</EscKeyBadge> Tutup
                </span>
              </FooterKeyHints>
              <span>Command Palette v4</span>
            </PaletteFooter>
          </PaletteDialog>
        </PaletteBackdrop>
      )}
    </AnimatePresence>
  );
}
