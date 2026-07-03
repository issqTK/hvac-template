<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";
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
  <section id="services" class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Heading -->
      <SectionHeader
        :badge="company.services.heading.badge"
        :title="company.services.heading.title"
        :companyName="company.name"
        :description="company.services.heading.subtitle"
      />

      <!-- Cards -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(service, i) in company.services.items"
          :key="service.title"
          v-intersection-observer="[
            (entries) => onIntersection(i, entries),
            { threshold: 0.2 },
          ]"
          :class="['card', { visible: visibleCards[i] }]"
          :style="{ '--i': i }"
        >
          <div
            class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl"
          >
            <!-- Image -->
            <div class="relative h-52 overflow-hidden">
              <img
                :src="service.image"
                :alt="service.title"
                class="h-full w-full object-cover transition duration-500"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent group-hover:via-transparent"
              ></div>

              <span
                class="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur"
              >
                {{ service.badge }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-7">
              <!-- Icon -->
              <div
                v-html="service.icon"
                class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white"
              ></div>

              <h3
                class="mb-4 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-sky-600"
              >
                {{ service.title }}
              </h3>

              <p class="mb-8 leading-7 text-slate-600">
                {{ service.description }}
              </p>

              <div
                class="flex items-center justify-between border-t border-slate-100 pt-5"
              >
                <span class="text-sm font-medium text-sky-600">
                  Intervention rapide
                </span>

                <svg
                  class="h-5 w-5 text-sky-600 transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14m-6-6l6 6-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
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
