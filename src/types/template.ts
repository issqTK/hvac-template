export interface Hero {
    title: string
    sous_title: string
    heroImage: string
    heroImageMobile: string
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

export interface Template {
    quoteServices: string[]

    hero: Hero

    services: ServicesSection

    trust?: TrustItem[]

    gallery: string[]

}