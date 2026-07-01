<template>
  <Header v-if="business" :business="business" />

  <Hero v-if="business" :company="business" />

  <Services v-if="business" :company="business" />

  <WhyChooseUs v-if="business" :company="business" />

  <Gallery v-if="business" :company="business" />

  <Reviews v-if="business" :company="business" />

  <Devis v-if="business" :company="business" />

  <Location v-if="business" :company="business" />

  <Footer v-if="business" :business="business" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { businesses } from "@/data/businesses.ts";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import Gallery from "@/components/Gallery.vue";
import Reviews from "@/components/Reviews.vue";
import Devis from "@/components/Devis.vue";
import Location from "@/components/Location.vue";

const route = useRoute();

const slug =
  (route.params.business as string | undefined) ||
  import.meta.env.VITE_BUSINESS ||
  "climatek";

const business = businesses[slug];

console.log(import.meta.env.VITE_BUSINESS);
</script>
