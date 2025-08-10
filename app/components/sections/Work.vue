<template>
  <section class="bg-gray-800 min-h-screen pt-[8vh]" id="work">
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-blue-600 mb-6"
      >
        Projects Made
      </h1>
      <div class="mx-auto p-4">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:max-w-3xl max-md:max-w-md mx-auto"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            :data-aos="'fade-up'"
            :data-aos-delay="200 + index * 200"
            :data-aos-anchor="'#project-' + project.id"
            :id="'project-' + project.id"
            class="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-96 object-cover"
            />
            <div
              class="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90"
            >
              <span class="text-sm block text-gray-800 mb-2">
                {{ project.date }} | BY {{ project.author }}
              </span>
              <h3 class="text-xl font-bold text-gray-800">
                {{ project.title }}
              </h3>
              <div
                class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300"
              >
                <p class="text-gray-800 text-sm line-clamp-3">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: 1,
    image: "https://readymadeui.com/images/food.webp",
    title: "Igniting Your Imagination",
    date: "10 FEB 2023",
    author: "JOHN DOE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 2,
    image: "https://readymadeui.com/images/food11.webp",
    title: "Hacks to Supercharge Your Day",
    date: "7 JUN 2023",
    author: "MARK ADAIR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 3,
    image: "https://readymadeui.com/images/food22.webp",
    title: "Trends and Predictions",
    date: "5 OCT 2023",
    author: "SIMON KONECKI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 4,
    image: "https://readymadeui.com/images/food33.webp",
    title: "Trends and Predictions",
    date: "5 OCT 2023",
    author: "SIMON KONECKI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 5,
    image: "https://readymadeui.com/images/food44.webp",
    title: "Trends and Predictions",
    date: "5 OCT 2023",
    author: "SIMON KONECKI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
  {
    id: 6,
    image: "https://readymadeui.com/images/food55.webp",
    title: "Trends and Predictions",
    date: "5 OCT 2023",
    author: "SIMON KONECKI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.",
  },
]);
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
