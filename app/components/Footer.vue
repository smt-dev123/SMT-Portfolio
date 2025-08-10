<template>
  <footer class="bg-[#0a4275] font-sans tracking-wide">
    <div class="w-[80%] mx-auto py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-2">
          <a @click="scrollToSection('home')">
            <img :src="MyLogo" alt="SMT-DEV" class="w-44 mb-8 cursor-pointer" />
          </a>
          <p class="text-gray-300 text-sm">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-8 text-white">Navigation</h4>
          <ul class="grid grid-cols-2">
            <li v-for="{ id, label } in navLinks" :key="id" class="mb-4">
              <a
                @click="scrollToSection(id)"
                class="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white text-sm"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20.707 5.293a1 1 0 0 0-1.414 0L9 15.586 4.707 11.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0 0-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-8 text-white">Contact Me</h4>
          <div class="space-y-4">
            <p class="text-gray-300 text-sm">
              170507 Roluos Commune, Prasat Bakong District, Siem Reap Province
            </p>
            <p class="text-gray-300 text-sm">luysokmatra3@gmail.com</p>
            <p class="text-gray-300 text-sm">+855 61 828 767</p>
          </div>
          <div class="mt-4">
            <ul class="flex gap-4">
              <li>
                <a href="https://www.facebook.com/luysokmatra" target="_blank">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.845c0-2.507 1.493-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/luysokmatra" target="_blank">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.447 2.105a.994.994 0 0 0-.69.281L2.666 11.43a.994.994 0 0 0-.044 1.687l4.584 2.292 1.458 4.584a.994.994 0 0 0 1.687.044l2.292-2.292 4.584 2.292a.994.994 0 0 0 1.378-.344l4.584-17.166a.994.994 0 0 0-.648-1.322zM9.5 14.5l-.5 5.5 2.5-2.5-2-3zm1.5-1.5 8.5-8.5-11 11z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/smt-dev123" target="_blank">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.698-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.114 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.376.203 2.393.1 2.646.641.699 1.03 1.592 1.03 2.683 0 3.841-2.339 4.687-4.566 4.935.359.307.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:luysokmatra3@gmail.com" target="_blank">
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-5 bg-[#08355e]">
      <p class="text-gray-300 text-sm">© SMT-DEV. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import MyLogo from "~/assets/SMT-DEV.svg";
import navLinks from "~/data/navLinks.json";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
