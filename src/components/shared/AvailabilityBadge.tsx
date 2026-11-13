import styled, { keyframes } from 'styled-components';

interface AvailabilityBadgeProps {
  text?: string;
  size?: 'sm' | 'base';
  className?: string;
}

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.6;
  }
`;

const BadgeContainer = styled.div<{ $size?: 'sm' | 'base' }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme, $size }) =>
    $size === 'sm'
      ? `${theme.spacing.xs} ${theme.spacing.sm}`
      : `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.accentMuted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.accentLime};
  font-size: ${({ theme, $size }) =>
    $size === 'sm' ? theme.fontSizes.xs : theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background-color: ${({ theme }) => theme.colors.accentGlow};
  }
`;

const StatusDot = styled.span`
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.accentLime};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentLime};
  animation: ${pulse} 2s infinite ease-in-out;
`;

export function AvailabilityBadge({
  text = 'Available for Remote • Freelance • Hybrid',
  size = 'base',
  className,
}: AvailabilityBadgeProps) {
  return (
    <BadgeContainer $size={size} className={className}>
      <StatusDot />
      <span>{text}</span>
    </BadgeContainer>
  );
}
