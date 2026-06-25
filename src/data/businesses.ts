import type { Business } from '../types/business'

export const businesses: Record<string, Business> = {
  climatek: {
    slug: 'climatek',
    name: 'CLIMA TEK',
    city: 'El Jadida',
    phone: '0612345678',
    whatsapp: '212612345678',
    services: [
      'Installation Climatisation',
      'Réparation',
      'Maintenance'
    ]
  },

  aeris: {
    slug: 'aeris',
    name: 'Aeris Energy',
    city: 'El Jadida',
    phone: '0611111111',
    whatsapp: '212611111111',
    services: [
      'Installation',
      'Repair',
      'Maintenance'
    ]
  }
}