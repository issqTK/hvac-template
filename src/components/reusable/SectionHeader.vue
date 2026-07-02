<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";
import { ref } from "vue";

defineProps<{
  mode?: "normal" | "dark";
  companyName?: string;
  badge?: string;
  title: string;
  description: string;
}>();

const headingVisible = ref(false);

const onHeadingIntersection = (entries: IntersectionObserverEntry[]) => {
  if (entries[0]?.isIntersecting) {
    headingVisible.value = true;
  }
};
</script>

<template>
  <div
    v-intersection-observer="[onHeadingIntersection, { threshold: 0.2 }]"
    class="mx-auto mb-16 max-w-3xl text-center"
  >
    <span
      v-if="badge"
      :class="[
        'fade-in mb-6 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700',
        mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-sky-100 text-sky-700',
        { visible: headingVisible },
      ]"
      style="--i: 0"
    >
      {{ badge }}
    </span>
    <h2
      :class="[
        'fade-in text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
        mode === 'dark' ? 'text-white' : 'text-slate-900',
        { visible: headingVisible },
      ]"
      style="--i: 1"
    >
      {{ title }}
    </h2>

    <p
      :class="[
        'fade-in mt-6 text-lg leading-8',
        mode === 'dark' ? 'text-white' : 'text-slate-600',
        { visible: headingVisible },
      ]"
      style="--i: 2"
      class="mt-6 text-lg leading-8 text-slate-600"
    >
      <strong v-if="companyName">{{ companyName }}</strong>
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
  transition-delay: calc(var(--i) * 120ms);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
