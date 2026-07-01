<script setup lang="ts">
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";
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
  <section id="realisations" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <SectionHeader
        title="Nos réalisations"
        description="Découvrez quelques exemples de nos installations, réparations et interventions réalisées pour nos clients."
      />

      <!-- Gallery -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[220px]">
        <div
          v-for="(image, index) in company.gallery"
          :key="image"
          v-intersection-observer="[
            (entries) => onIntersection(index, entries),
            { threshold: 0.2 },
          ]"
          :class="[
            'card',
            { visible: visibleCards[index] },
            index % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
          ]"
          :style="{ '--i': index }"
          class="group relative overflow-hidden rounded-3xl shadow-sm"
        >
          <img
            :src="image"
            :alt="`${company.name} réalisation ${index + 1}`"
            class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          />

          <!-- Icon -->
          <div
            class="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur opacity-0 translate-y-4 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            📷
          </div>
        </div>
      </div>
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
