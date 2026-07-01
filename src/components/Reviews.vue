<script setup lang="ts">
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";
import SectionStats from "@/components/reusable/SectionStats.vue";
import { vIntersectionObserver } from "@vueuse/components";
import { ref } from "vue";

defineProps<{
  company: Business;
}>();

const visibleCards = ref<boolean[]>([]);

const onIntersection = (
  index: number,
  entries: IntersectionObserverEntry[],
) => {
  const entry = entries[0];

  if (entry && entry.isIntersecting) visibleCards.value[index] = true;
};
</script>

<template>
  <section id="avis" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <SectionHeader
        :badge="`⭐ ${company.rating}/5 • ${company.reviews} avis Google`"
        title="Ce que disent nos clients"
        description="Découvrez les avis laissés par nos clients après nos interventions."
      />

      <!-- Reviews -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <article
          v-for="(review, index) in company.featuredReviews"
          :key="review.author + review.text"
          v-intersection-observer="[
            (entries) => onIntersection(index, entries),
            { threshold: 0.2 },
          ]"
          :class="['card', { visible: visibleCards[index] }]"
          :style="{ '--i': index }"
          class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <!-- Stars -->

          <div class="flex items-center justify-start gap-3 mb-5">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700"
            >
              {{ review.author.charAt(0) }}
            </div>

            <div>
              <h4 class="font-semibold text-slate-900">
                {{ review.author }}
              </h4>

              <p class="text-sm text-slate-500">
                {{ review.date }}
              </p>
            </div>
          </div>

          <div class="mb-5 flex text-yellow-400 text-lg">
            <span v-for="star in 5" :key="star">
              {{ star <= review.rating ? "★" : "☆" }}
            </span>
          </div>

          <p class="text-slate-600 leading-relaxed">"{{ review.text }}"</p>
        </article>
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
            value: '★★★★★',
            label: 'Satisfaction client',
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
  transform: translateY(32px);
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
