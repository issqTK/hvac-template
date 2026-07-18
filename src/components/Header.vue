<template>
  <header
    class="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur shadow border-b border-slate-200"
  >
    <div class="max-w-7xl !mx-auto px-2 sm:px-4">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo + Business -->
        <a :href="business.slug" class="flex items-center gap-3">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-700 text-white font-bold text-xl"
          >
            {{ business.name.charAt(0) }}
          </div>

          <div
            class="block min-w-[200px]"
            style="box-sizing: content-box; width: min-content"
          >
            <h2 class="font-bold text-lg text-slate-900">
              {{ business.name }}
            </h2>

            <p class="text-sm text-slate-500">
              {{ business.city }}
            </p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center">
          <a href="#services" class="nav-link"> Services </a>

          <a href="#atouts" class="nav-link"> Nos Atouts </a>

          <a href="#realisations" class="nav-link"> Réalisations </a>

          <a href="#avis" class="nav-link"> Avis Clients </a>

          <a href="#devis" class="nav-link"> Devis Gratuit </a>

          <a href="#localisation" class="nav-link"> Localisation </a>
        </nav>

        <!-- CTA -->

        <div class="hidden md:flex items-center gap-3">
          <a
            :href="`tel:${business.phone}`"
            class="cta-btn border border-slate-300 text-slate-800 hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
              />
            </svg>
            Appeler
          </a>

          <a
            :href="`https://wa.me/${business.whatsapp}`"
            target="_blank"
            class="cta-btn gap-1.5 bg-green-600 text-white hover:bg-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-5 h-5"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
            WhatsApp
          </a>
        </div>

        <!-- Mobile Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="xl:hidden rounded-lg p-2 hover:bg-slate-100"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="xl:hidden border-t border-slate-200 py-5 px-4"
        >
          <nav class="flex flex-col gap-2">
            <a href="#hero" class="nav-link" @click="mobileMenuOpen = false">
              Accueil
            </a>

            <a
              href="#services"
              class="nav-link"
              @click="mobileMenuOpen = false"
            >
              Services
            </a>

            <a href="#gallery" class="nav-link" @click="mobileMenuOpen = false">
              Réalisations
            </a>

            <a href="#reviews" class="nav-link" @click="mobileMenuOpen = false">
              Avis Clients
            </a>

            <a href="#devis" class="nav-link" @click="mobileMenuOpen = false">
              Devis Gratuit
            </a>

            <a
              href="#localisation"
              class="nav-link"
              @click="mobileMenuOpen = false"
            >
              Localisation
            </a>
          </nav>

          <div class="md:hidden mt-6 grid grid-cols-2 gap-3">
            <a
              :href="`tel:${business.phone}`"
              class="cta-btn justify-center border border-slate-300 text-sky-950 hover:bg-slate-100"
            >
              Appeler
            </a>

            <a
              :href="`https://wa.me/${business.whatsapp}`"
              target="_blank"
              class="cta-btn justify-center bg-green-600 text-white hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { Business } from "@/types/business";
import { ref } from "vue";

const mobileMenuOpen = ref(false);

defineProps<{
  business: Business;
}>();
</script>

<style scoped>
@reference "../assets/main.css";

.nav-link {
  @apply hover:bg-slate-100 text-slate-950 font-semibold text-[0.95rem] opacity-95 px-4 py-3 transition-all duration-300 rounded-xl;
}

.nav-link:hover {
  @apply -translate-y-[1px];
}

.cta-btn {
  @apply flex !items-center justify-center gap-1 px-4 py-3 text-[0.95rem] font-semibold transition hover:scale-[1.01] rounded-xl;
}
</style>
