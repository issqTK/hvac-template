<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";
import SectionStats from "@/components/reusable/SectionStats.vue";
import { ref } from "vue";

const trustCards = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-6"> <path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>',
    title: "Intervention rapide",
    description:
      "Nous répondons rapidement à vos demandes afin de limiter les interruptions et rétablir votre confort le plus vite possible.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6"><path fill="currentColor" d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z" /></svg>',
    title: "Techniciens qualifiés",
    description:
      "Des professionnels expérimentés prennent en charge vos équipements avec rigueur et savoir-faire.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6"> <path fill="currentColor" d="M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z" /></svg>',
    title: "Travail de qualité",
    description:
      "Nous privilégions des solutions durables, réalisées avec soin et des équipements adaptés.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6"><path fill="currentColor" d="M448 75.2l0 361.7c0 24.3-19 43.2-43.2 43.2l-361.6 0C19.3 480 0 461.4 0 436.8L0 75.2C0 51.1 18.8 32 43.2 32l361.7 0c24 0 43.1 18.8 43.1 43.2zM410.7 436.8l0-361.6c0-3-2.6-5.8-5.8-5.8l-9.3 0-110.3 74.6-61.3-49.9-61.2 49.9-110.3-74.7-9.3 0c-3.2 0-5.8 2.8-5.8 5.8l0 361.7c0 3 2.6 5.8 5.8 5.8l361.7 0c3.2 .1 5.8-2.7 5.8-5.8zM150.2 186l0 37-73.5 0 0-37 73.5 0zm0 74.4l0 37.3-73.5 0 0-37.3 73.5 0zm11.1-147.3l54-43.7-118.5 0 64.5 43.7zm210 72.9l0 37-196 0 0-37 196 0zm0 74.4l0 37.3-196 0 0-37.3 196 0zM286.7 113.1l64.5-43.7-118.4 0 53.9 43.7zM371.3 335l0 37.3-99.4 0 0-37.3 99.4 0z"/></svg>',
    title: "Conseils personnalisés",
    description:
      "Chaque projet est étudié selon vos besoins afin de vous proposer la solution la plus adaptée.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6"><path fill="currentColor" d="M288-16c17.7 0 32 14.3 32 32l0 18.3c98.1 14 175.7 91.6 189.7 189.7l18.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.3 0c-14 98.1-91.6 175.7-189.7 189.7l0 18.3c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.3C157.9 463.7 80.3 386.1 66.3 288L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.3 0C80.3 125.9 157.9 48.3 256 34.3L256 16c0-17.7 14.3-32 32-32zM128 256a160 160 0 1 0 320 0 160 160 0 1 0 -320 0zm160-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>',
    title: "Service local",
    description:
      "Une entreprise proche de chez vous, disponible pour intervenir rapidement dans votre région.",
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6"><path fill="currentColor" d="M268.9 85.2L152.3 214.8c-4.6 5.1-4.4 13 .5 17.9 30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9 6.8-.6 13.8 1.7 19 6.9L505.6 376 576 320 576 32 464 96 440.2 80.1C424.4 69.6 405.9 64 386.9 64l-70.4 0c-1.1 0-2.3 0-3.4 .1-16.9 .9-32.8 8.5-44.2 21.1zM116.6 182.7L223.4 64 183.8 64c-25.5 0-49.9 10.1-67.9 28.1L112 96 0 32 0 320 156.4 450.3c23 19.2 52 29.7 81.9 29.7l15.7 0-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41 9 0c19.1 0 37.8-4.3 54.8-12.3L359 441c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32 17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1l-137.9-136.8-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0-23-23-23.9-59.9-2.2-84z"/></svg>',
    title: "Relation de confiance",
    description:
      "Notre priorité est votre satisfaction grâce à un accompagnement transparent avant, pendant et après l’intervention.",
  },
];

const visibleCards = ref<boolean[]>([]);

defineProps<{
  company: Business;
}>();

const onIntersection = (
  index: number,
  entries: IntersectionObserverEntry[],
) => {
  const entry = entries[0];

  if (entry && entry.isIntersecting) visibleCards.value[index] = true;
};
</script>

<template>
  <section id="atouts" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->

      <SectionHeader
        :title="`Pourquoi choisir ${company.name} ?`"
        description="Nous proposons des interventions rapides, un service professionnel et des solutions adaptées à vos besoins."
      />

      <!-- Trust Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(item, i) in trustCards"
          :key="item.title"
          v-intersection-observer="[
            (entries) => onIntersection(i, entries),
            { threshold: 0.2 },
          ]"
          :class="['card', { visible: visibleCards[i] }]"
          :style="{ '--i': i }"
          class="group rounded-3xl border border-slate-200 bg-white shadow-sm p-8"
        >
          <div
            v-html="item.icon"
            class="w-14 h-14 rounded-2xl bg-sky-500 flex items-center justify-center text-2xl mb-5 text-white"
          ></div>

          <h3 class="text-xl font-semibold text-slate-900 mb-3">
            {{ item.title }}
          </h3>

          <p class="text-slate-600 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>

      <!-- Stats -->
      <SectionStats
        :items="[
          {
            value: company.rating,
            label: 'Note Google',
          },
          {
            value: `${company.reviews}+`,
            label: 'Avis clients',
          },
          {
            value: company.city,
            label: 'Zone d’intervention',
          },
          {
            value: '✓',
            label: 'Devis gratuit',
          },
        ]"
      />
    </div>
  </section>
</template>

<style scoped>
.card {
  opacity: 0;
  transform: translateX(32px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  transition-delay: calc(var(--i) * 120ms);
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
