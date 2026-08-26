export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: string
}

export interface TrackItem {
  code: string
  title: string
  description: string
  tags: string[]
}

export interface RegistrationStep {
  step: number
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  achievement?: string
}

export interface MissionPoint {
  title: string
  description: string
}

export interface GalleryItem {
  id: string
  caption: string
  category: string
  accent: 'red' | 'yellow' | 'green' | 'ink'
  /** Path to the real photo, e.g. '/gallery/hackathon.jpg'. Leave undefined to show the placeholder card. */
  src?: string
}

export interface ActivityItem {
  tag: string
  title: string
  description: string
  date?: string
}