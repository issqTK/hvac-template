<script setup lang="ts">
import { useRoute } from "vue-router";
import { businesses } from "../data/businesses";

const route = useRoute();

const slug = route.params.business as string;

const business = businesses[slug];
</script>

<template>
  <div v-if="business">
    <h1>{{ business.name }}</h1>

    <p>{{ business.city }}</p>

    <p>{{ business.phone }}</p>

    <ul>
      <li v-for="service in business.services" :key="service">
        {{ service }}
      </li>
    </ul>
  </div>

  <div v-else>Business Not Found</div>
</template>
