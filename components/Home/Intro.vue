<template>
  <div class="space-y-6 ">
    <climate-clock />
    <div class="text-center typewriter">
          <!-- <h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">Greetings,</h1>
          <h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">I am Sunil Regmi...</h1> -->
          <h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">This site is under Construction.</h1>
        </div>
    <div class="flex justify-center">
      <img src="assets/pp.jpg" alt="Sunil Regmi"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 h-40 w-40 hover:scale-110"
      sizes="48px sm:64px" placeholder format="webp" />
    </div>
    <h1 class="text-xl flex justify-center font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400 textk` text-justify">
    I'm Sunil Regmi. I am a versatile IT professional with a Master's in Information Technology and a strong background in academia and industry. 
    I have over 3 years of experience in teaching computer programming, AI, and IT-related subjects, 
    coupled with five years of hands-on expertise in full-stack web application development.
    I hold a passion for AI backed by in-depth knowledge in machine learning and deep learning. 
    I have also worked as an IT Project Manager and I am currently serving as a part-time Tech Consultant and AI Researcher in a research company. 
    I have some publications related on NLP like Nepali speech recognition and exploring large language models for low-resource languages like Nepali. 
    <br>&emsp;
    
    I also posses a proven track record as a dedicated educator, with experience as a Teaching Assistant and Visiting Lecturer at Kathmandu University.

    </p>
    
    <p class="text-justify text-gray-900 dark:text-gray-400">
    &emsp;
      By day, I'm a AI Research and Developer at
      <a href="https://www.gdlabs.org.np/" target="_blank" class="underline">Green Decisions Labs and Research</a>, and
      by night (and weekends), I am a freelancer, self-learner, musician and a composer.
    </p>
  </div>

</template>

<script setup>
useSeoMeta({
  title: "Sunil Regmi",
  description:
  "Hi, I'am Sunil Regmi, skilled IT professional with a Master's in Information Technology, specializing in AI and full-stack web development, currently working as an AI Researcher at Green Decisions Labs while pursuing freelance projects and interests in music."
});


</script>


<style>
  .typewriter h1 {
  font-size: 20px;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* border-right: .15em solid rgb(255, 255, 255); The typewriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end) forwards, /* Added 'forwards' to keep the final state */
    blink-caret .75s step-end 3.5s infinite; /* Added 3.5s delay before caret disappears */
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
}
</style>