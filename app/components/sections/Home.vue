<template>
  <section
    class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    id="home"
  >
    <!-- Texture Overlay -->
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20 z-5"
    ></div>
    <!-- Main Content -->
    <div class="text-center text-white z-10 max-w-4xl mx-auto px-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl tracking-tight"
      >
        Welcome to My Portfolio
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        class="text-xl sm:text-2xl lg:text-3xl mb-8"
      >
        I'm a
        <span class="font-bold text-blue-400">
          {{ typewriterText }}
          <span class="cursor">|</span>
        </span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        class="mt-8 flex justify-center gap-4"
      >
        <a
          @click="scrollToSection('#contact')"
          class="inline-block bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get in Touch
        </a>
        <!-- <a
          @click="scrollToSection('#work')"
          class="inline-block bg-transparent cursor-pointer border-2 border-blue-400 hover:border-blue-500 text-blue-400 hover:text-blue-500 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View Projects
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Smooth scroll function
const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Typewriter effect implementation
const words = ["Graphic Designer", "Photographer", "Full Stack Developer"];
const typewriterText = ref("");
let currentWordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 90;

const type = () => {
  const currentWord = words[currentWordIndex];

  if (!isDeleting) {
    typewriterText.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    typewriterText.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
    setTimeout(type, typingSpeed / 2);
  }
};

onMounted(() => {
  type();
});
</script>

<style scoped>
.cursor {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
