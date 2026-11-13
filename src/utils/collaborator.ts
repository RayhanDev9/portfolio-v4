import type { Collaborator, CollaboratorPlatform } from '../types/portfolio';

export interface CollaboratorInfo {
  platform: CollaboratorPlatform;
  label: string;
  badgeLabel: string;
  url: string;
}

export function detectCollaboratorPlatform(
  url: string,
  explicitPlatform?: CollaboratorPlatform,
): CollaboratorPlatform {
  if (explicitPlatform) return explicitPlatform;
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes('github.com')) return 'github';
  if (lowerUrl.includes('instagram.com')) return 'instagram';
  if (lowerUrl.includes('tiktok.com')) return 'tiktok';
  if (lowerUrl.includes('shopee.co.id') || lowerUrl.includes('shopee.')) return 'shopee';
  return 'website';
}

export function getCollaboratorInfo(collaborator: Collaborator): CollaboratorInfo {
  const platform = detectCollaboratorPlatform(collaborator.url, collaborator.platform);
  let label = `Partner: ${collaborator.name}`;
  let badgeLabel = `@${collaborator.name}`;

  if (platform === 'github') {
    label = `Collab: @${collaborator.name}`;
    badgeLabel = `@${collaborator.name}`;
  } else if (platform === 'instagram') {
    label = `Client: ${collaborator.name}`;
    badgeLabel = `@${collaborator.name}`;
  } else if (platform === 'tiktok') {
    label = `TikTok: ${collaborator.name}`;
    badgeLabel = `TikTok: ${collaborator.name}`;
  } else if (platform === 'shopee') {
    label = `Toko Shopee: ${collaborator.name}`;
    badgeLabel = `Shopee: ${collaborator.name}`;
  } else {
    label = `Klien: ${collaborator.name}`;
    badgeLabel = `${collaborator.name}`;
  }

  return {
    platform,
    label,
    badgeLabel,
    url: collaborator.url,
  };
}
