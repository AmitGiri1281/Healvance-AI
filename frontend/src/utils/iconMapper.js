// src/utils/iconMapper.js
import * as LucideIcons from 'lucide-react'

export const iconMap = {
  // Define your icon mappings here
  'web': LucideIcons.Globe,
  'mobile': LucideIcons.Smartphone,
  'cloud': LucideIcons.Cloud,
  'ai': LucideIcons.Brain,
  'analytics': LucideIcons.BarChart3,
  'security': LucideIcons.Shield,
  'default': LucideIcons.ArrowUpRight
}

export function getIconComponent(iconName) {
  return iconMap[iconName] || iconMap.default
}