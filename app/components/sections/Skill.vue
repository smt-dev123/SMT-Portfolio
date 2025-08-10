<template>
  <Screen class="bg-gradient-to-r from-purple-800 to-purple-600">
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-white mb-6"
      >
        Skills & Abilities
      </h1>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        class="flex items-center justify-center w-full h-[60%] m-auto bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg p-4"
      >
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-6 lg:gap-4">
          <div
            v-for="(skill, index) in skills"
            :key="skill.id"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-up'"
            :data-aos-delay="400 + index * 500"
            class="flex flex-col justify-center items-center bg-gray-900 w-[150px] md:w-[190px] h-[110px] rounded-md"
          >
            <img :src="skill.imgSrc" :alt="skill.name" class="w-[50px]" />
            <span class="text-white text-lg text-center">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </Screen>
</template>

<script setup>
import skills from "~/data/skills.json";
</script>
