<template>
  <footer class="border-t border-slate-200 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 py-24">
      <div class="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
        <!-- Business -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-700 text-white font-bold text-xl"
            >
              {{ business.name.charAt(0) }}
            </div>

            <div class="block min-w-[200px]" style="width: min-content">
              <h3 class="font-bold text-lg text-slate-900">
                {{ business.name }}
              </h3>

              <p class="text-sm text-slate-500">
                {{ business.city }}
              </p>
            </div>
          </div>

          <p class="text-slate-600 leading-7">
            {{ template.hero.sous_title }}
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-semibold text-slate-900 mb-5">Navigation</h4>

          <nav class="flex flex-col gap-3">
            <a href="#services" class="footer-link">Services</a>
            <a href="#atouts" class="footer-link">Nos Atouts</a>
            <a href="#realisations" class="footer-link">Réalisations</a>
            <a href="#avis" class="footer-link">Avis Clients</a>
            <a href="#devis" class="footer-link">Devis Gratuit</a>
            <a href="#localisation" class="footer-link">Localisation</a>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-slate-900 mb-5">Contact</h4>

          <div class="space-y-4 text-slate-600">
            <p>{{ business.address }}</p>

            <a
              :href="`tel:${business.phone}`"
              class="block hover:text-sky-700 transition"
            >
              {{ business.phone }}
            </a>

            <a
              :href="`https://wa.me/${business.whatsapp}`"
              target="_blank"
              class="block hover:text-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <!-- CTA -->
        <div>
          <h4 class="font-semibold text-slate-900 mb-5">Besoin d'un devis ?</h4>

          <p class="text-slate-600 mb-6">
            Contactez-nous dès aujourd'hui pour une intervention rapide ou un
            devis gratuit.
          </p>

          <div class="flex flex-col gap-3">
            <a
              :href="`tel:${business.phone}`"
              class="cta-btn border border-slate-300 text-slate-800 hover:bg-slate-100"
            >
              Appeler
            </a>

            <a
              :href="`https://wa.me/${business.whatsapp}`"
              target="_blank"
              class="cta-btn bg-green-600 text-white hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-14 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ business.name }}. Tous droits
          réservés.
        </p>

        <div class="flex items-center gap-6">
          <a :href="business.slug" class="footer-link">Accueil</a>
          <a href="#devis" class="footer-link">Devis</a>
          <a href="#localisation" class="footer-link">Localisation</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { templates } from "@/templates";
import type { Business } from "@/types/business";

const props = defineProps<{
  business: Business;
}>();

let type = props.business.businessType;

const template = templates[type];
</script>

<style scoped>
@reference "../assets/main.css";

.footer-link {
  @apply text-slate-600 transition hover:text-sky-700;
}

.cta-btn {
  @apply flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition hover:scale-[1.02];
}
</style>
