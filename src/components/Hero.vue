<script setup lang="ts">
import { templates } from "@/templates";
import type { Business } from "@/types/business";

const props = defineProps<{
  company: Business;
}>();

const template = templates[props.company.businessType];
</script>

<template>
  <section
    class="relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center mt-20"
  >
    <!-- Background -->
    <div
      :style="{
        '--hero-image': `url(${template.hero.heroImage})`,
        '--hero-image-mobile': `url(${template.hero.heroImageMobile})`,
      }"
      class="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
    />

    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-80 sm:opacity-70"
    />

    <div
      class="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
    />

    <div
      class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
    />

    <!-- Content -->
    <div
      class="relative !mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:grid lg:grid-cols-[2fr_1fr] lg:items-center lg:gap-20"
    >
      <!-- Left -->
      <div class="flex flex-col items-start gap-9">
        <span
          class="fade-up delay-1 inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/30 px-4 py-2 text-sm font-medium text-sky-300"
        >
          📍 {{ company.city }}
        </span>

        <h1
          class="fade-up delay-2 text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          {{ company.name }}
        </h1>

        <h2
          class="fade-up delay-3 text-2xl md:text-3xl font-semibold text-slate-100"
        >
          {{ template.hero.title }}
        </h2>

        <p
          class="fade-up delay-4 max-w-xl text-lg leading-8 text-slate-300 text-justify"
        >
          {{ template.hero.sous_title }} à {{ company.city }}.
        </p>

        <!-- CTA BUTTONS -->
        <div class="fade-up delay-5 flex flex-col w-full sm:flex-row gap-4">
          <a
            :href="`tel:${company.phone}`"
            class="flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 px-8 py-4 text-center font-semibold transition hover:bg-sky-500"
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
            class="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-center font-semibold transition hover:border-sky-500 hover:bg-slate-800"
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
          class="fade-up delay-6 grid grid-cols-2 gap-6 w-full text-sm text-slate-300 md:grid-cols-4 mt-6"
        >
          <div class="flex flex-col items-center !gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="h-8 w-8"
            >
              <path
                fill="white"
                d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg>
            <span class="text-center">Intervention rapide</span>
          </div>

          <div class="flex flex-col items-center !gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="h-8 w-8"
            >
              <path
                fill="white"
                d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"
              />
            </svg>
            <span class="text-center">Techniciens qualifiés</span>
          </div>

          <div class="flex flex-col items-center !gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-8 w-8"
            >
              <path
                fill="white"
                d="M448 75.2l0 361.7c0 24.3-19 43.2-43.2 43.2l-361.6 0C19.3 480 0 461.4 0 436.8L0 75.2C0 51.1 18.8 32 43.2 32l361.7 0c24 0 43.1 18.8 43.1 43.2zM410.7 436.8l0-361.6c0-3-2.6-5.8-5.8-5.8l-9.3 0-110.3 74.6-61.3-49.9-61.2 49.9-110.3-74.7-9.3 0c-3.2 0-5.8 2.8-5.8 5.8l0 361.7c0 3 2.6 5.8 5.8 5.8l361.7 0c3.2 .1 5.8-2.7 5.8-5.8zM150.2 186l0 37-73.5 0 0-37 73.5 0zm0 74.4l0 37.3-73.5 0 0-37.3 73.5 0zm11.1-147.3l54-43.7-118.5 0 64.5 43.7zm210 72.9l0 37-196 0 0-37 196 0zm0 74.4l0 37.3-196 0 0-37.3 196 0zM286.7 113.1l64.5-43.7-118.4 0 53.9 43.7zM371.3 335l0 37.3-99.4 0 0-37.3 99.4 0z"
              />
            </svg>
            <span class="text-center">Devis gratuit</span>
          </div>

          <div class="flex flex-col items-center !gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="h-8 w-8"
            >
              <path
                fill="white"
                d="M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z"
              />
            </svg>
            <span class="text-center">Service de qualité</span>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div class="hidden lg:flex justify-center">
        <div
          class="slide-left relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl"
        >
          <div class="!space-y-6">
            <div>
              <p class="text-slate-400 text-sm">Disponible aujourd'hui</p>

              <h3 class="!mt-2 text-3xl font-bold">Intervention à domicile</h3>
            </div>

            <div class="!space-y-4 text-slate-300">
              <div class="flex justify-between">
                <span>Installation</span>
                <span>✓</span>
              </div>

              <div class="flex justify-between">
                <span>Réparation</span>
                <span>✓</span>
              </div>

              <div class="flex justify-between">
                <span>Maintenance</span>
                <span>✓</span>
              </div>
            </div>

            <a
              :href="`https://wa.me/${company.whatsapp}`"
              target="_blank"
              class="block rounded-xl bg-sky-600 py-4 text-center font-semibold hover:bg-sky-500"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
}
@keyframes heroZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.08);
  }
}

.hero-bg {
  animation: heroZoom 10s ease-in-out infinite alternate;
  transform-origin: center;
  will-change: transform;
  background-image: var(--hero-image);
  background-size: cover;
  background-position: center;
}

@media (max-width: 767px) {
  .hero-bg {
    background-image: var(--hero-image-mobile);
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up {
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
}

.delay-1 {
  animation-delay: 0.12s;
}
.delay-2 {
  animation-delay: 0.24s;
}
.delay-3 {
  animation-delay: 0.36s;
}
.delay-4 {
  animation-delay: 0.48s;
}
.delay-5 {
  animation-delay: 0.6s;
}
.delay-6 {
  animation-delay: 0.72s;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-left {
  opacity: 0;
  animation: slideLeft 0.9s ease forwards;
}
</style>
