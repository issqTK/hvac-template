import type { Business } from '../types/business'

export const businesses: Record<string, Business> = {
    climatek: {
      slug: "climatek",

      name: "CLIMA TEK",
      city: "El Jadida",

      phone: "0663365673",
      whatsapp: "0663365673",

      address: "Imm B, Etage, 2 Lot Al Mouahidine, El Jadida 24000",

      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.7416152635356!2d-8.528085024317678!3d33.247071973470746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91d004a334a75%3A0xf6a03e6004da3ab2!2sCLIMA%20TEK!5e0!3m2!1sen!2sma!4v1782850484970!5m2!1sen!2sma',

      category: "Air conditioning repair service",

      rating: 5,
      reviews: 120,

      quoteServices: [
        'Climatisation',
        'Froid industriel',
        'Réfrigération',
        'Électroménager',
        'Maintenance',
        'Installation',
        'Autre',
      ],

      hero : {
        title: 'Climatisation & Réfrigération',
        sous_title: 'Installation, réparation et maintenance de systèmes de climatisation pour particuliers et professionnels',
        heroImage: '/images/heroImage.png',
        heroImageMobile: '/images/heroImageMobile.png'
      },

      featuredReviews: [
        {
          author: "Saad algarri",
          rating: 5,
          date: "Google",
          text: "Un grand merci à toute l’équipe CLIMA TEK pour la qualité de votre travail. Nous avons beaucoup apprécié votre professionnalisme.."
        },
        {
          author: "Haytam Ayad",
          rating: 5,
          date: "Google",
          text: "Un service de qualité et une expertise dans la réparation de tous les climatiseurs."
        },
        {
          author: "Youssef Jassab",
          rating: 5,
          date: "Google",
          text: "Fiable et bon service."
        }
      ],

      gallery: [
        "/images/heroImage.png",
        "/images/climatek/gallery/1.png",
        "/images/climatek/gallery/2.png",
        "/images/climatek/gallery/3.png",
        "/images/climatek/gallery/4.png",
        "/images/climatek/gallery/5.png",
        "/images/climatek/gallery/6.png",

      ],

      services: {
        heading: {
          badge: "Nos Services",
          title: "Installation, Réparation & Maintenance de Climatisation",
          subtitle:
            "Des solutions professionnelles pour l'installation, le dépannage et l'entretien de vos systèmes de climatisation et de réfrigération."
        },

        items: [
          {
            title: "Installation de climatisation",
            badge: "Installation",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5"><path fill="currentColor" d="M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"/></svg>',
            image: "/images/climatek/services/installation.png",
            description:
              "Installation de climatiseurs résidentiels, commerciaux et systèmes multi-split."
          },
          {
            title: "Réparation",
            badge: "Dépannage",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5"><path fill="currentColor" d="M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z"/></svg>',
            image: "/images/climatek/services/ac-repair.png",
            description:
              "Diagnostic et réparation rapide de toutes les marques de climatiseurs."
          },
          {
            title: "Maintenance",
            badge: "Entretien",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5"><path fill="currentColor" d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 76.1-136 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-144 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-136 0 0-76.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1L128 96zM0 416l0-96 136 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 144 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 136 0 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"/></svg>',
            image: "/images/climatek/services/ac-maintenance.png",
            description:
              "Nettoyage, recharge de gaz et maintenance préventive."
          }
        ]
      },

    },
   
   wsmn: {
    slug: "wsmn",

    name: "WSMN Multi-services",
    city: "El Jadida",

    phone: "0679730604",
    whatsapp: "0679730604",

    address: "Résidence Al Boustane, Appt 26 imm 29, El Jadida 24400",

    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.353868718027!2d-8.4865048!3d33.2310316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91fb2209f61ff%3A0xbf3e0e1407b7dbe3!2sWSMN%20Multi-services!5e0!3m2!1sen!2sma!4v1783022794648!5m2!1sen!2sma',

    category: "Machine maintenance service",

    rating: 4.5,
    reviews: 80,

    quoteServices: [
      "Climatisation",
      "Chambre froide",
      "Électricité",
      "Caméras de surveillance",
      "Plomberie",
      "Énergie solaire",
      "Maintenance",
      "Autre",
    ],

    hero: {
      title: "Maintenance Technique & Multi-services",
      sous_title:
        "Installation, maintenance et dépannage en climatisation, froid industriel, électricité, plomberie et énergie solaire.",
      heroImage: '/images/heroImage.png',
      heroImageMobile: '/images/heroImageMobile.png'
    },

    featuredReviews: [
      {
        author: "Aicha El",
        rating: 5,
        date: "Google",
        text: "Excellent and highly professional service."
      },
      {
        author: "Khallad Hind",
        rating: 5,
        date: "Google",
        text: "Helpful and timely company for cold room installation and air conditioning."
      },
      {
        author: "Nawfel Mouhoub",
        rating: 5,
        date: "Google",
        text: "Recommended company for electrical installation, security cameras and plumbing."
      }
    ],

    gallery: [
      "/images/wsmn/gallery/1.png",
      "/images/wsmn/gallery/2.png",
      "/images/wsmn/gallery/3.png",
      "/images/wsmn/gallery/4.png",
      "/images/wsmn/gallery/5.png",
      "/images/wsmn/gallery/6.png",
      "/images/wsmn/gallery/8.png",
    ],

    services: {
      heading: {
        badge: "Nos Services",
        title: "Maintenance & Installation Technique",
        subtitle:
          "Des solutions professionnelles pour la climatisation, le froid industriel, l'électricité, la plomberie et les systèmes techniques."
      },

      items: [
        {
          title: "Climatisation",
          badge: "Installation",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5"><path fill="currentColor" d="M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"/></svg>',
          image: "/images/wsmn/services/climatisation.webp",
          description:
            "Installation, entretien et réparation de climatiseurs."
        },
        {
          title: "Chambres froides",
          badge: "Froid industriel",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-5"><path fill="currentColor" d="M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z"/></svg>',
          image: "/images/wsmn/services/cold-room.jpg",
          description:
            "Installation et maintenance de chambres froides et équipements frigorifiques."
        },
        {
          title: "Électricité & Multi-services",
          badge: "Maintenance",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5"><path fill="currentColor" d="M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"/></svg>',
          image: "/images/wsmn/services/electricity.webp",
          description:
            "Travaux électriques, plomberie, caméras de surveillance et solutions techniques."
        }
      ]
    }
    },

    aeris: {
      slug: "aeris",

      name: "Aeris Energy",
      city: "Casablanca",

      phone: "0661497191", // TODO
      whatsapp: "0661497191", // TODO

      address:
        "M2, Residence Les Tulipes, 36 Allée des Orangers, Casablanca 20250",

      mapEmbedUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.9632995945926!2d-7.547834699999999!3d33.606256699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0040bc35bd%3A0x8bf736075fb3f2c5!2sAeris%20Energy!5e0!3m2!1sen!2sma!4v1782922517657!5m2!1sen!2sma',

      category: "Air conditioning contractor",

      rating: 5,
      reviews: 600,

      gallery: [
        "/images/heroImage.png",
        "/images/climatek/gallery/1.png",
        "/images/climatek/gallery/2.png",
        "/images/climatek/gallery/3.png",
        "/images/climatek/gallery/4.png",
        "/images/climatek/gallery/5.png",
        "/images/climatek/gallery/6.png",

      ],

      hero: {
        title: "Climatisation & Solutions Énergétiques",
        sous_title:
          "Installation de climatisation, pompes à chaleur et maintenance pour améliorer votre confort tout en réduisant votre consommation d'énergie.",
        heroImage: '/images/heroImage.png',
        heroImageMobile: '/images/heroImageMobile.png'
      },

      featuredReviews: [
        {
          author: "AQ CONCEPT",
          rating: 5,
          date: "Google",
          text: "Un partenaire commercial qui s’investit pleinement dans chaque projet, M. Tazi incarne un équilibre exemplaire entre bienveillance et expertise. Une recommandation sincère."
        },
        {
          author: "Chehbouni Mohammed",
          rating: 5,
          date: "Google",
          text: "Service professionnel ; équipe sérieuse et serviable ; je recommande vivement."
        },
        {
          author: "A",
          rating: 5,
          date: "Google",
          text: "Produit de qualité et service au top 👌"
        }
      ],

      quoteServices: [
        "Climatisation",
        "Pompes à chaleur",
        "Maintenance",
        "Installation",
        "Entretien",
        "Autre",
      ],

      services: {
        heading: {
          badge: "Nos Services",
          title: "Climatisation & Pompes à Chaleur",
          subtitle:
            "Des solutions modernes et économes en énergie pour le chauffage, la climatisation et l'entretien de vos installations."
        },

        items: [
          {
            title: "Installation de climatisation",
            badge: "Climatisation",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5"><path fill="currentColor" d="M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"/></svg>',
            image: "/images/climatek/services/installation.png",
            description:
              "Installation de systèmes de climatisation performants pour les habitations et les espaces professionnels."
          },
          {
            title: "Pompes à chaleur",
            badge: "Économie d'énergie",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5"><path fill="currentColor" d="M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"/></svg>',
            image: "/images/aeris/services/heat-pump-installation.png",
            description:
              "Installation de pompes à chaleur offrant une solution de chauffage et de climatisation économique."
          },
          {
            title: "Maintenance",
            badge: "Service",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5"><path fill="currentColor" d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 76.1-136 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-144 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-136 0 0-76.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1L128 96zM0 416l0-96 136 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 144 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 136 0 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"/></svg>',
            image: "/images/climatek/services/ac-maintenance.png",
            description:
              "Maintenance préventive et entretien afin d'assurer la longévité et les performances de vos équipements."
          }
        ]
      }
    }
}
