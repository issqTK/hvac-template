<script setup lang="ts">
import { reactive } from "vue";
import type { Business } from "@/types/business";
import SectionHeader from "@/components/reusable/SectionHeader.vue";
import { vIntersectionObserver } from "@vueuse/components";
import { ref } from "vue";
import { templates } from "@/templates/index";

const leftVisible = ref(false);

const onIntersection = (entries: IntersectionObserverEntry[]) => {
  if (entries[0]?.isIntersecting) {
    leftVisible.value = true;
  }
};

const props = defineProps<{
  company: Business;
}>();

const template = templates[props.company.businessType];

const form = reactive({
  name: "",
  phone: "",
  service: "",
  message: "",
});

const errors = reactive({
  name: "",
  phone: "",
  service: "",
  message: "",
});

function validateForm() {
  errors.name = "";
  errors.phone = "";
  errors.service = "";
  errors.message = "";

  let valid = true;

  // Name
  if (!form.name.trim()) {
    errors.name = "Veuillez saisir votre nom.";
    valid = false;
  }

  // Phone
  if (!form.phone.trim()) {
    errors.phone = "Veuillez saisir votre numéro.";
    valid = false;
  } else if (!/^(\+212|0)[5-7]\d{8}$/.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Numéro de téléphone invalide.";
    valid = false;
  }

  // Service
  if (!form.service) {
    errors.service = "Veuillez choisir un service.";
    valid = false;
  }

  // Message (optional)
  if (form.message.length > 500) {
    errors.message = "Le message est trop long.";
    valid = false;
  }

  return valid;
}

function submitForm() {
  if (!validateForm()) return;

  console.log(form);
}
</script>

<template>
  <section id="devis" class="relative overflow-hidden py-24 min-h-screen">
    <!-- Background -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950/90"
    />

    <div
      class="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
    />

    <div
      class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <!-- Header -->
      <SectionHeader
        mode="dark"
        badge="Devis Gratuit"
        title="Besoin d'une intervention ?"
        description="Contactez notre équipe dès aujourd'hui pour obtenir un devis gratuit, rapide et sans engagement."
      />

      <div class="grid gap-10 lg:gap-16 lg:grid-cols-2">
        <!-- LEFT -->
        <div
          v-intersection-observer="[
            (entries) => onIntersection(entries),
            { threshold: 0.2 },
          ]"
          class="rounded-3xl text-white"
        >
          <h3
            :class="['card', { visible: leftVisible }]"
            :style="{ '--i': 0 }"
            class="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Une urgence ?
          </h3>

          <p
            :class="['card', { visible: leftVisible }]"
            :style="{ '--i': 1 }"
            class="mt-4 font-medium leading-relaxed"
          >
            Nos techniciens interviennent rapidement pour vos climatiseurs,
            chambres froides, équipements frigorifiques et électroménagers.
          </p>

          <div
            :class="['card', { visible: leftVisible }]"
            :style="{ '--i': 2 }"
            class="mt-10 space-y-4"
          >
            <a
              :href="`tel:${company.phone}`"
              class="flex items-center justify-center gap-1.5 text-lg rounded-xl bg-sky-600 px-8 py-4 font-semibold transition hover:bg-sky-500 hover:scale-[1.01]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-4.5 h-4.5"
              >
                <path
                  fill="currentColor"
                  d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                />
              </svg>
              Appeler
            </a>

            <a
              :href="`https://wa.me/${company.whatsapp}`"
              target="_blank"
              class="flex items-center justify-center gap-1.5 rounded-2xl bg-green-700 text-white hover:bg-green-600 px-6 py-4 text-lg font-semibold transition hover:scale-[1.01]"
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

          <div
            :class="['card', { visible: leftVisible }]"
            :style="{ '--i': 3 }"
            class="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur"
          >
            <ul class="space-y-3 text-sm">
              <li>✓ Devis gratuit</li>
              <li>✓ Intervention rapide</li>
              <li>✓ Professionnels qualifiés</li>
              <li>✓ Disponible à {{ company.city }}</li>
            </ul>
          </div>

          <div
            :class="['card', { visible: leftVisible }]"
            :style="{ '--i': 4 }"
            class="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
          >
            <div class="text-4xl font-bold">{{ company.rating }} ★</div>

            <div class="mt-1 text-sky-100">
              Plus de {{ company.reviews }} clients satisfaits
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="rounded-3xl bg-white p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-slate-900">Demander un devis</h3>

          <p class="mt-2 text-slate-600">
            Remplissez ce formulaire et nous vous contacterons rapidement.
          </p>

          <form class="mt-8 space-y-5" @submit.prevent="submitForm" netlify>
            <div class="flex flex-col gap-0.5">
              <input
                v-model="form.name"
                type="text"
                placeholder="Nom complet"
                :class="
                  errors.name
                    ? 'border-red-500'
                    : 'border-slate-200 focus:border-sky-500'
                "
                class="w-full rounded-xl border px-4 py-3 outline-none transition"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">
                {{ errors.name }}
              </p>
            </div>

            <div class="flex flex-col gap-0.5">
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Téléphone"
                :class="
                  errors.phone
                    ? 'border-red-500'
                    : 'border-slate-200 focus:border-sky-500'
                "
                class="w-full rounded-xl border px-4 py-3 outline-none transition"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-500">
                {{ errors.phone }}
              </p>
            </div>

            <div class="flex flex-col gap-0.5">
              <select
                v-model="form.service"
                :class="
                  errors.service
                    ? 'border-red-500'
                    : 'border-slate-200 focus:border-sky-500'
                "
                class="w-full rounded-xl border px-4 py-3 outline-none transition"
              >
                <option value="">Choisir un service</option>
                <option
                  v-for="service in template.quoteServices"
                  :key="service"
                  :value="service"
                >
                  {{ service }}
                </option>
              </select>
              <p v-if="errors.service" class="mt-1 text-sm text-red-500">
                {{ errors.service }}
              </p>
            </div>

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Décrivez votre besoin..."
              class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500"
            />

            <button
              class="w-full rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 py-4 font-semibold text-white transition hover:scale-[1.01]"
            >
              Demander un devis gratuit
            </button>

            <p class="text-center text-sm text-slate-500">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </form>
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
