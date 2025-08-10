<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import logo from "~/assets/Logo.png";
useHead({
  meta: [
    {
      name: "description",
      content:
        "Explore my portfolio showcasing web development projects, UI/UX designs, and innovative digital solutions using Nuxt.js, Vue.js, and Laravel.",
    },

    {
      name: "keywords",
      content:
        "portfolio, web developer, nuxt.js, vue.js, react.js, reactnative, nest.js, laravel, frontend, backend, cambodia",
    },

    {
      name: "author",
      content: "LUY SOKMATRA",
    },

    // Open Graph (Facebook / LinkedIn)
    {
      property: "og:title",
      content: "My Portfolio - Web Developer & Designer",
    },
    {
      property: "og:description",
      content:
        "Showcasing modern websites and apps created with Nuxt.js and Vue.js.",
    },
    {
      property: "og:image",
      content: "https://smt-portfolio-kh.vercel.app/images/og-image.jpg",
    },
    { property: "og:url", content: "https://smt-portfolio-kh.vercel.app" },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "My Portfolio - Web Developer & Designer",
    },
    {
      name: "twitter:description",
      content: "Check out my web development projects and creative designs.",
    },
    {
      name: "twitter:image",
      content: "https://smt-portfolio-kh.vercel.app/images/twitter-image.jpg",
    },
  ],
  // Canonical URL
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: logo,
    },
    { rel: "canonical", href: "https://smt-portfolio-kh.vercel.app" },
  ],
});
</script>
