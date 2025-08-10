<template>
  <section class="bg-white">
    <div class="max-w-screen-xl mx-auto p-4">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-center font-bold text-4xl text-blue-600 mb-6"
      >
        Contact Me
      </h1>
      <div class="font-sans mx-auto relative overflow-hidden mt-4">
        <div class="grid md:grid-cols-2 gap-8 py-8 px-6">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            class="text-center flex flex-col items-center justify-center"
          >
            <img
              src="https://readymadeui.com/signin-image.webp"
              class="shrink-0 w-5/6"
              alt="Contact Illustration"
            />
          </div>
          <div class="max-w-md mx-auto space-y-3 relative">
            <input
              data-aos="fade-left"
              data-aos-delay="200"
              type="text"
              placeholder="Name"
              v-model="formData.name"
              name="name"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              required
            />
            <input
              data-aos="fade-left"
              data-aos-delay="400"
              type="email"
              placeholder="Email"
              v-model="formData.email"
              name="email"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              required
            />
            <input
              data-aos="fade-left"
              data-aos-delay="800"
              type="tel"
              placeholder="Phone No."
              v-model="formData.phone"
              name="phone"
              class="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              required
            />
            <textarea
              data-aos="fade-left"
              data-aos-delay="1000"
              placeholder="Message"
              rows="6"
              v-model="formData.message"
              name="message"
              class="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
              required
            ></textarea>
            <button
              data-aos="fade-left"
              data-aos-delay="1200"
              @click="handleSendEmail"
              class="text-white w-full bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSendEmail = () => {
  const subject = `Contact from ${formData.value.name}`;
  const body = `Name: ${formData.value.name}%0D%0AEmail: ${formData.value.email}%0D%0APhone: ${formData.value.phone}%0D%0AMessage: ${formData.value.message}`;
  window.location.href = `mailto:luysokmatra3@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
};
</script>
