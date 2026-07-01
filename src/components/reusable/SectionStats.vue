<template>
  <div
    v-intersection-observer="[onIntersection, { threshold: 0.2 }]"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'"
    class="transition-all duration-700 bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm"
  >
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div v-for="item in items" :key="item.label" class="text-center">
        <div class="text-2xl font-bold text-sky-600 mb-2">
          {{ item.value }}
        </div>

        <p class="text-sm text-slate-600">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";

interface StatItem {
  value: string | number;
  label: string;
}

defineProps<{
  items: StatItem[];
}>();

const visible = ref(false);

const onIntersection = (entries: IntersectionObserverEntry[]) => {
  if (entries[0]?.isIntersecting) {
    visible.value = true;
  }
};
</script>
