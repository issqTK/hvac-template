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
        image: '/images/businesses/climatek/heroImage.png'
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
        "/images/businesses/climatek/heroImage.png",
        "/images/businesses/climatek/gallery/1.png",
        "/images/businesses/climatek/gallery/2.png",
        "/images/businesses/climatek/gallery/3.png",
        "/images/businesses/climatek/gallery/4.png",
        "/images/businesses/climatek/gallery/5.png",
        "/images/businesses/climatek/gallery/6.png",

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
            icon: "snowflake",
            image: "/images/businesses/climatek/services/installation.png",
            description:
              "Installation de climatiseurs résidentiels, commerciaux et systèmes multi-split."
          },
          {
            title: "Réparation",
            badge: "Dépannage",
            icon: "wrench",
            image: "/images/businesses/climatek/services/ac-repair.png",
            description:
              "Diagnostic et réparation rapide de toutes les marques de climatiseurs."
          },
          {
            title: "Maintenance",
            badge: "Entretien",
            icon: "shield-check",
            image: "/images/businesses/climatek/services/ac-maintenance.png",
            description:
              "Nettoyage, recharge de gaz et maintenance préventive."
          }
        ]
      },

    },
   
    cfcb: {
      slug: "cfcb",

      name: "C.F.C.B Sarl",
      city: "El Jadida",

      phone: "0523371980",
      whatsapp: "212523371980",

      address: "Av. Bir Anzarane, El Jadida",

      mapEmbedUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.5157439318664!2d-8.4936706!3d33.22678949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda91e0535bc47bd%3A0x5b37e99d300a593f!2sC.F.C.B%20Sarl!5e0!3m2!1sen!2sma!4v1782922362427!5m2!1sen!2sma',

      category: "Air conditioning contractor",

      rating: 4.9,
      reviews: 12,

      hero: {
        title: "Climatisation & Ventilation",
        sous_title:
          "Installation, maintenance et solutions de ventilation pour particuliers, commerces et entreprises.",
        image: '/images/businesses/climatek/heroImage.png'
      },

      featuredReviews: [
        {
          author: "mohamed amine",
          rating: 5,
          date: "Google",
          text: "Très bon service, des gens très sérieux."
        },
        {
          author: "Meryem elkamoun",
          rating: 5,
          date: "Google",
          text: "Trés bonne qualité de service. Le service aprés vente a bien été assuré. Je recommende.."
        },
        {
          author: "Aymane Saddaaq",
          rating: 5,
          date: "Google",
          text: "Des gens sérieux et professionnels"
        }
      ],

      gallery: [
        "/images/businesses/climatek/heroImage.png",
        "/images/businesses/climatek/gallery/1.png",
        "/images/businesses/climatek/gallery/2.png",
        "/images/businesses/climatek/gallery/3.png",
        "/images/businesses/climatek/gallery/4.png",
        "/images/businesses/climatek/gallery/5.png",
        "/images/businesses/climatek/gallery/6.png",

      ],

      quoteServices : [
        "Climatisation",
        "Ventilation",
        "Maintenance",
        "Installation",
        "Entretien",
        "Autre",
      ],

      services: {
        heading: {
          badge: "Nos Services",
          title: "Installation, Ventilation & Maintenance",
          subtitle:
            "Nous proposons des solutions professionnelles de climatisation, ventilation et entretien pour garantir votre confort toute l'année."
        },

        items: [
          {
            title: "Installation de climatisation",
            badge: "Installation",
            icon: "snowflake",
            image: "/images/businesses/climatek/services/installation.png",
            description:
              "Installation de systèmes de climatisation adaptés aux logements, bureaux et locaux professionnels."
          },
          {
            title: "Ventilation",
            badge: "VMC",
            icon: "fan",
            image: "/images/businesses/cfcb/services/ventilation.jpg",
            description:
              "Installation de solutions de ventilation pour améliorer la qualité de l'air intérieur."
          },
          {
            title: "Maintenance",
            badge: "Entretien",
            icon: "shield-check",
            image: "/images/businesses/climatek/services/ac-maintenance.png",
            description:
              "Entretien préventif et maintenance régulière pour préserver les performances de vos équipements."
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
        "/images/businesses/climatek/heroImage.png",
        "/images/businesses/climatek/gallery/1.png",
        "/images/businesses/climatek/gallery/2.png",
        "/images/businesses/climatek/gallery/3.png",
        "/images/businesses/climatek/gallery/4.png",
        "/images/businesses/climatek/gallery/5.png",
        "/images/businesses/climatek/gallery/6.png",

      ],

      hero: {
        title: "Climatisation & Solutions Énergétiques",
        sous_title:
          "Installation de climatisation, pompes à chaleur et maintenance pour améliorer votre confort tout en réduisant votre consommation d'énergie.",
        image: '/images/businesses/climatek/heroImage.png'
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
            icon: "snowflake",
            image: "/images/businesses/climatek/services/installation.png",
            description:
              "Installation de systèmes de climatisation performants pour les habitations et les espaces professionnels."
          },
          {
            title: "Pompes à chaleur",
            badge: "Économie d'énergie",
            icon: "leaf",
            image: "/images/businesses/aeris/services/heat-pump-installation.png",
            description:
              "Installation de pompes à chaleur offrant une solution de chauffage et de climatisation économique."
          },
          {
            title: "Maintenance",
            badge: "Service",
            icon: "shield-check",
            image: "/images/businesses/climatek/services/ac-maintenance.png",
            description:
              "Maintenance préventive et entretien afin d'assurer la longévité et les performances de vos équipements."
          }
        ]
      }
    }
}
