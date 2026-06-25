<script setup lang="ts">
import type { Business } from "@/types/business";

defineProps<{
  company: Business;
}>();
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-slate-900 text-white"
  >
    <div class="max-w-4xl mx-auto px-6 text-center">
      <span class="inline-block bg-sky-600 px-4 py-2 rounded-full text-sm mb-6">
        {{ company.city }}
      </span>

      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        {{ company.name }}
      </h1>

      <p class="text-lg md:text-xl text-slate-300 mb-8">
        Installation, réparation et maintenance de climatisation.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a
          :href="`tel:${company.phone}`"
          class="bg-sky-600 px-6 py-3 rounded-lg font-semibold"
        >
          Appeler
        </a>

        <a
          :href="`https://wa.me/${company.whatsapp}`"
          target="_blank"
          class="border border-white px-6 py-3 rounded-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
