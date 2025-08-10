<template>
  <header
    class="fixed w-full bg-white text-black font-bold shadow-md py-4 z-50"
  >
    <nav
      class="flex flex-col md:flex-row gap-4 items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8"
    >
      <a @click="scrollToSection('home')" class="text-xl cursor-pointer">
        <img :src="MyLogo" alt="SMT-DEV" class="h-8 text-black" />
      </a>
      <hr class="my-2 border-2 border-blue-400 w-full md:hidden" />
      <ul class="flex items-center space-x-6">
        <li v-for="{ id, label } in navLinks" :key="id">
          <a
            @click="scrollToSection(id)"
            class="transition-all duration-500 cursor-pointer"
            :class="[
              activeLink === id
                ? 'text-blue-600 font-bold transition-all duration-500'
                : 'text-black',
              'hover:text-blue-600',
            ]"
            tabindex="0"
          >
            {{ label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import MyLogo from "~/assets/SMT-DEV Black.svg";
import navLinks from "~/data/navLinks.json";

const activeLink = ref("home");

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    activeLink.value = id;
  }
};

const handleScroll = () => {
  const sections = navLinks.map((link) => document.getElementById(link.id));
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeLink.value = section.id;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
