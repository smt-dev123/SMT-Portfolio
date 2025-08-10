<template>
  <section
    class="bg-gradient-to-r from-green-800 to-blue-500 min-h-screen pt-[8vh]"
    id="education"
  >
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-white mb-6"
      >
        My Education
      </h1>
      <div>
        <div
          v-for="(school, index) in schools"
          :key="school.id"
          :data-aos="'fade-up'"
          :data-aos-delay="200 + index * 200"
          :data-aos-anchor="'#school-' + school.id"
          :id="'school-' + school.id"
          class="relative md:flex gap-4 mb-4 p-4 bg-white shadow-lg rounded-lg h-[380px] md:h-[200px]"
        >
          <div
            class="w-auto md:w-[320px] h-[150px] md:h-full bg-gray-900 rounded-md overflow-hidden"
          >
            <img
              :src="school.image"
              :alt="school.school"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-bold mt-2">{{ school.school }}</h2>
            <p class="text-gray-700 line-clamp-5">{{ school.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import schools from "~/data/schools.json";
</script>
