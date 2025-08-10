<template>
  <section
    class="bg-gradient-to-r from-green-800 to-blue-500 min-h-screen pt-[8vh] flex items-center justify-center"
    id="experience"
  >
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-white mb-12"
      >
        My Experience
      </h1>
      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/50"
        ></div>
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :data-aos="'fade-up'"
          :data-aos-delay="200 + index * 200"
          :data-aos-anchor="'#exp-' + exp.id"
          :id="'exp-' + exp.id"
          class="relative mb-8 md:flex md:items-center md:justify-center"
        >
          <!-- Timeline Dot -->
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full z-10"
          ></div>
          <!-- Card -->
          <div
            class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg md:w-[45%] md:odd:mr-auto md:even:ml-auto md:odd:text-right md:even:text-left"
          >
            <h2 class="text-xl font-bold text-blue-600">{{ exp.position }}</h2>
            <p class="text-gray-800 font-semibold">{{ exp.company }}</p>
            <p class="text-gray-600 text-sm">{{ exp.duration }}</p>
            <p class="text-gray-700 mt-2 line-clamp-3">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    id: 1,
    position: "Full Stack Developer",
    company: "Tech Startup Cambodia",
    duration: "Jan 2023 - Present",
    description:
      "Developed and maintained web applications using NestJS and NuxtJS. Implemented responsive designs and optimized backend performance for scalability.",
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "Siem Reap Web Solutions",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Designed and built user interfaces for client websites using React and Vue.js. Collaborated with designers to create visually appealing layouts.",
  },
  {
    id: 3,
    position: "Junior Developer",
    company: "Angkor Tech Co.",
    duration: "May 2020 - May 2021",
    description:
      "Assisted in developing web applications, focusing on frontend development with JavaScript and backend support using Laravel.",
  },
]);
</script>
