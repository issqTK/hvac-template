// src/templates/hvac.ts
import type { Template } from "@/types/template";

export const hvacTemplate: Template = {
    quoteServices: [
        "Climatisation",
        "Froid industriel",
        "Réfrigération",
        "Maintenance",
        "Installation",
        "Autre"
    ],
    hero: {
        title: 'Climatisation & Réfrigération',
        sous_title: 'Installation, réparation et maintenance de systèmes de climatisation pour particuliers et professionnels',
        heroImage: '/images/heroImage.png',
        heroImageMobile: '/images/heroImageMobile.png'
    },
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

    gallery: [
        "/images/heroImage.png",
        "/images/climatek/gallery/1.png",
        "/images/climatek/gallery/2.png",
        "/images/climatek/gallery/3.png",
        "/images/climatek/gallery/4.png",
        "/images/climatek/gallery/5.png",
        "/images/climatek/gallery/6.png",

    ],

}