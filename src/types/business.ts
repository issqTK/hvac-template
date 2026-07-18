export type BusinessType =
  | "HVAC"
  | "GARAGE"
  | "DENTIST"
  | "RESTAURANT";

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

  googleCategory: string | null

  businessType: BusinessType

  rating: number
  reviews: number

  featuredReviews?: Review[]

}