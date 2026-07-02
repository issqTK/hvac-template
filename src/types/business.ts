export interface Hero {
  title: string
  sous_title: string
}

export interface Service {
  title: string
  description: string
  badge: string
  icon: string
  image: string
}

export interface SectionHeader {
  badge?: string
  title: string
  subtitle: string
}

export interface ServicesSection {
  heading: SectionHeader
  items: Service[]
}

export interface TrustItem {
  icon: string
  title: string
  description: string
}

export interface Review {
  author: string
  rating: number
  date: string
  text: string
}

export interface Business {
  slug: string

  name: string
  city: string

  phone: string
  whatsapp: string

  address: string

  mapEmbedUrl: string

  category: string

  rating: number
  reviews: number 

  
  hero: Hero

  featuredReviews?: Review[]

  gallery: string[]

  services: ServicesSection

  quoteServices: string[]

  trust?: TrustItem[]

}