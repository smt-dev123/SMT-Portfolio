<template>
  <section class="bg-gray-100 min-h-screen pt-[8vh]">
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-blue-600 mb-6"
      >
        About Me
      </h1>
      <div class="flex flex-col md:flex-row gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="flex-shrink-0 flex justify-center"
        >
          <img
            src="~/assets/my-photo.jpg"
            alt="My Picture"
            class="w-full max-w-64 h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <div class="text-lg mb-6">
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              class="text-center md:text-left text-2xl font-bold mb-2"
            >
              I'm LUY SOKMATRA
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              class="text-center md:text-left font-bold"
            >
              Full Stack Developer
            </p>
            <hr
              data-aos="fade-up"
              data-aos-delay="600"
              class="my-2 border-2 border-blue-600"
            />
            <div data-aos="fade-up" data-aos-delay="700">
              <p>
                I am a Full-Stack creator based in Siem Reap, Cambodia. I am a
                Bachelor of Science in Computer Science from Angkor University.
                I am passionate about improving my coding skills and programming
                and website development. I create WebApps and websites using the
                NestJs + NuxtJs. Work for myself to improve my skills. Likes to
                create clones full of stacks.
              </p>
              <p>Email: luysokmatra3@gmail.com</p>
              <p>
                Location: Roluos Commune, Prasat Bakong District, Siem Reap
                Province, Cambodia
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            class="flex gap-4 text-2xl text-blue-600"
          >
            <a href="https://www.facebook.com/luysokmatra" target="_blank">
              <img
                :src="Facebook"
                alt="facebook/luysokmatra"
                class="w-9 h-9 text-blue-500"
              />
            </a>
            <a href="https://t.me/luysokmatra" target="_blank">
              <img
                :src="Telegram"
                alt="Telegram/Luysokmatra"
                class="w-9 h-9 text-blue-500"
              />
            </a>
            <a href="https://github.com/smt-dev123" target="_blank">
              <img
                :src="Github"
                alt="Github/smt-dev123"
                class="w-9 h-9 text-blue-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Facebook from "~/assets/icon/Facebook.svg";
import Telegram from "~/assets/icon/Telegram.svg";
import Github from "~/assets/icon/GitHub.svg";
</script>
