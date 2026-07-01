<script setup lang="ts">
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";

defineProps<{
  company: Business;
}>();
</script>

<template>
  <section id="localisation" class="bg-slate-50 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Heading -->
      <SectionHeader
        badge="Notre localisation"
        title="Retrouvez-nous facilement"
        :description="company.address"
      />

      <div class="overflow-hidden rounded-3xl shadow-xl">
        <iframe
          :src="company.mapEmbedUrl"
          width="100%"
          height="500"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>
