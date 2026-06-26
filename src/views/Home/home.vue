<template>
  <div class="mainbox">
    <div class="pointone"></div>
    <div class="pointtwo"></div>
    <img src="/hg.jpg" alt="" />

    <header>
      <a href="#" @click.prevent="scrollTo('#about')" class="abaut">من انا</a>
      <a href="#" @click.prevent="scrollTo('#skills')" class="skills"
        >المهارات</a
      >
      <a href="#" @click.prevent="scrollTo('#projects')" class="projects"
        >المشاريع</a
      >
      <a href="#" @click.prevent="scrollTo('#contact')" class="contact"
        >تواصل</a
      >
    </header>
    <div id="about" class="abautbox">
      <h2>من انا؟</h2>
      <p>هل تريد معرفه من انا؟ لست مهتما لان اقول لك</p>
      <p>.لكن ساسمح لك بالتسكع بموقعي الشخصي</p>
      <div class="bio">
        <span>HMM_210 :الاسم</span>
        <span>العمر: ؟؟</span>
        <span>الجنسية: ؟؟</span>
      </div>
    </div>

    <div id="skills" class="skillsbox">
      <h2>المهارات</h2>
      <div class="skill-list">
        <span>Go</span>
        <span>Python</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>HTML</span>
      </div>
    </div>

    <div id="projects" class="projectsbox">
      <h2>المشاريع</h2>
      <div class="project">
        <h3>Admin-Telegram-Master</h3>
        <p>
          بوت تليجرام ذكي يربط المستخدمين بالمطورين بشكل آمن وفوري للتواصل
          والإبلاغ عن المشاكل.
        </p>
        <a href="https://github.com/HMM-210/Telegram-Admin-Bot" target="_blank">عرض المشروع</a>
      </div>
      <div class="project">
        <h3>GymScheduler</h3>
        <p>
          بوت يدير التمارين الرياضية. يدخل المستخدم تمارينه ويولد البوت جدولاً
          نظيفًا وجاهزًا للطباعة.
        </p>
        <a href="https://github.com/HMM-210/GymScheduler" target="_blank">عرض المشروع</a>
      </div>
      <div class="project">
        <h3>XOkingdom</h3>
        <p>
          لعبة XO كاملة: Go backend + Vue frontend + Q-learning AI + تشفير
          AES-GCM + 3 مستويات صعوبة.
        </p>
        <a href="https://github.com/HMM-210/XOkingdom" target="_blank">عرض المشروع</a>
      </div>
    </div>

    <div id="contact" class="contactbox">
      <h2>تواصل</h2>
      <a href="mailto:hassan210mmm@gmail.com">hassan210mmm@gmail.com</a>
      <a href="https://t.me/HMM210_bot" target="_blank">@HMM210_bot</a>
    </div>
    <div class="morespace"></div>
  </div>
</template>

<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}
* {
  color: #fff;
  font-family: "Segoe UI", "sans-serif";
  font-size: large;
}
a {
  text-decoration: none;
}

.mainbox {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;

  top: 0;
  left: 0;
  background: radial-gradient(circle, #000000 30%, #05000a 90%);
  animation: fadeBlackfront 1.5s ease 10s forwards;
  z-index: 2;
  .pointone {
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% + 7.5vw);
    border-radius: 50%;
    background-color: rgba(26, 58, 106);
    filter: blur(15px);
    z-index: 3;
    animation: fadeInGlow 10s forwards ease-in-out;
  }

  .pointtwo {
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 12.5vw);
    border-radius: 50%;
    filter: blur(15px);
    background-color: rgba(26, 58, 106);
    z-index: 3;
    animation: fadeInGlow 10s forwards ease-in-out;
  }

  img {
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0;
    animation: fadeInRaven 4s ease 8s forwards;
  }
  header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #000000aa;
    height: 5%;
    display: flex;
    gap: 5%;
    justify-content: center;
    align-items: center;
    z-index: 5;
    opacity: 0;
    animation: dropIn 2s ease 11s forwards;
    a {
      font-size: 0.9rem;
      color: #7a7265;
      transition: 0.3s;
    }
    a:hover {
      color: #d0c8b0;
    }
  }
  .abautbox {
    position: absolute;
    top: 0; left: 0; right: 0;
    margin: 30vh auto 0;
    width: fit-content;
    text-align: center;
    animation: dropIn 2s ease 11s forwards;
    h2 {
      font-size: 4rem;
      opacity: 0;
      animation: dropIn 2s ease 11s forwards;
    }
    p {
      opacity: 0;
      animation: dropIn 2s ease 11s forwards;
    }
    .bio {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 5%;
      opacity: 0;
      animation: dropIn 2s ease 11s forwards;
      span {
        font-size: 1rem;
        color: #b0a898;
      }
    }
  }
  .skillsbox {
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    margin: 0 auto;
    padding: 5% 0%;
    height: auto;
    width: 90vw;
    border-radius: 2%;
    background-color: #1a1a1a;
    opacity: 0;
    animation: dropIn 2s ease 11s forwards;
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-top: 10%;
    }
    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5%;
      justify-content: center;
      margin-top: 5%;
      span {
        background: #2a2a2a;
        padding: 1rem 2rem;
        margin: 2%;
        border-radius: 12px;
        font-size: 1.2rem;
        border: 1px solid #3a3a3a;
      }
    }
  }
  .projectsbox {
    position: absolute;
    top: 172%;
    left: 0; right: 0;
    margin: 0 auto;
    padding: 5% 0%;
    width: 90vw;
    height: auto;
    border-radius: 2%;
    background-color: #1a1a1a;
    opacity: 0;
    animation: dropIn 2s ease 11s forwards;
    text-align: center;
    h2 {
      font-size: 3rem;
      margin-top: 5%;
    }
    .project {
      margin: 5%;
      padding: 5%;
      max-width: 80%;
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        color: #b0a898;
      }
    }
  }
  .contactbox {
    position: absolute;
    top: 310%;
    left: 0; right: 0;
    margin: 0 auto;
    padding: 5% 0%;
    height: auto;
    width: 90vw;
    border-radius: 2%;
    background-color: #1a1a1a;
    opacity: 0;
    animation: dropIn 2s ease 11s forwards;
    text-align: center;
    margin-bottom: 15vh;
    h2 {
      font-size: 3rem;
      margin-top: 5%;
    }
    a {
      display: block;
      margin: 2%;
      padding: 1rem 2rem;
      background: #2a2a2a;
      border-radius: 12px;
      color: #c8c0b0;
      font-size: 1.2rem;
    }
  }
  .morespace {
    position: absolute;
    top: 340%;
    left: 0; right: 0;
    margin: 0 auto;
    padding: 5% 0%;
    height: 10vh;
    margin-bottom: 10vh;
    width: 90vw;
    border-radius: 2%;
    opacity: 0;
    animation: dropIn 2s ease 11s forwards;
    text-align: center;
  }
}

@keyframes fadeInGlow {
  0% {
    opacity: 0;
    box-shadow: none;
  }
  50% {
    opacity: 1;
    box-shadow:
      0 0 40px rgba(26, 58, 106, 0.8),
      0 0 80px rgba(26, 58, 106, 0.5),
      0 0 120px rgba(26, 58, 106, 0.2);
  }
  65% {
    opacity: 1;
    background-color: rgba(90, 48, 32, 0.6);
    box-shadow:
      0 0 40px rgba(90, 48, 32, 0.8),
      0 0 80px rgba(90, 48, 32, 0.5),
      0 0 120px rgba(90, 48, 32, 0.2);
  }
  70% {
    opacity: 0;
    box-shadow: none;
  }
  100% {
    opacity: 0;
    box-shadow: none;
  }
}
@keyframes fadeBlackfront {
  to {
    z-index: 0;
  }
}
@keyframes fadeInRaven {
  to {
    opacity: 0.3;
  }
}
@keyframes dropIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup>
function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>
