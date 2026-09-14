/* =========================================
   ❤️ WITH MY LOVE
   FULL SCRIPT
   🎵 MUSIC REMOVED
========================================= */


/* =========================================
   GLOBAL
========================================= */

const permanentPhotos = [
  "images/love1.jpg",
  "images/love2.jpg",
  "images/love3.jpg",
  "images/love4.jpg",
  "images/love5.jpg",
  "images/love6.jpg",
  "images/love7.jpg",
  "images/love8.jpg",
  "images/love9.jpg",
  "images/love10.jpg"
];

let heartGameTimer = null;
let heartGameScore = 0;
let heartGameTime = 20;

let quizIndex = 0;
let quizScore = 0;

let memoryCards = [];
let memoryFirst = null;
let memorySecond = null;
let memoryLock = false;
let memoryMatches = 0;


/* =========================================
   ❤️ ENTER WEBSITE
========================================= */

function enterLove() {

  const enterScreen =
    document.getElementById("enterScreen");

  if (!enterScreen) {
    return;
  }

  enterScreen.classList.add("hide");

  document.body.style.overflow = "";

}


/* =========================================
   📄 PAGE NAVIGATION
========================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  const selected =
    document.getElementById(pageId);

  if (selected) {
    selected.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   ❤️ BACKGROUND HEARTS
========================================= */

function createBackgroundHeart() {

  const container =
    document.getElementById("hearts");

  if (!container) {
    return;
  }

  const heart =
    document.createElement("div");

  heart.className = "floating-heart";

  heart.textContent =
    Math.random() > 0.5
      ? "❤️"
      : "💕";

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    12 + Math.random() * 22 + "px";

  const duration =
    5 + Math.random() * 7;

  heart.style.animationDuration =
    duration + "s";

  container.appendChild(heart);

  setTimeout(function() {
    heart.remove();
  }, duration * 1000 + 500);
}


/* =========================================
   📸 GALLERY
========================================= */

function loadGallery() {

  const gallery =
    document.getElementById("gallery");

  if (!gallery) {
    return;
  }

  gallery.innerHTML = "";

  permanentPhotos.forEach(
    function(photo, index) {

      const card =
        document.createElement("div");

      card.className =
        "photo-card";

      card.onclick =
        function() {
          openImage(photo);
        };

      const image =
        document.createElement("img");

      image.src = photo;

      image.alt =
        "Love Memory " + (index + 1);

      image.loading =
        index < 2
          ? "eager"
          : "lazy";

      image.onerror =
        function() {

          card.innerHTML =
            `
            <div style="
              width:100%;
              height:100%;
              display:flex;
              align-items:center;
              justify-content:center;
              flex-direction:column;
              gap:10px;
              color:#ff9bc5;
              text-align:center;
              padding:10px;
            ">
              <div style="font-size:40px;">❤️</div>
              <div>love${index + 1}.jpg</div>
              <small>Rasmni images papkasiga joylang</small>
            </div>
            `;

        };

      const number =
        document.createElement("div");

      number.className =
        "photo-number";

      number.textContent =
        "❤️ " + (index + 1);

      card.appendChild(image);
      card.appendChild(number);

      gallery.appendChild(card);

    }
  );

}


/* =========================================
   🖼️ IMAGE MODAL
========================================= */

function openImage(imagePath) {

  const modal =
    document.getElementById("modal");

  const content =
    document.getElementById("modalContent");

  if (!modal || !content) {
    return;
  }

  content.innerHTML =
    `
      <img
        src="${imagePath}"
        alt="Love Memory"
      >
    `;

  modal.classList.add("show");

  document.body.style.overflow =
    "hidden";
}


function closeModal() {

  const modal =
    document.getElementById("modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");

  document.body.style.overflow =
    "";

}


/* =========================================
   🎮 GAME OPEN
========================================= */

function openGame() {

  const gameArea =
    document.getElementById("gameArea");

  if (!gameArea) {
    return;
  }

  gameArea.classList.add("show");

  document.body.style.overflow =
    "hidden";

}


function closeGame() {

  const gameArea =
    document.getElementById("gameArea");

  const content =
    document.getElementById("gameContent");

  if (!gameArea) {
    return;
  }

  if (heartGameTimer) {

    clearInterval(
      heartGameTimer
    );

    heartGameTimer = null;
  }

  gameArea.classList.remove("show");

  if (content) {
    content.innerHTML = "";
  }

  document.body.style.overflow =
    "";

}


/* =========================================
   ❤️ HEART CATCHER
========================================= */

function startHeartGame() {

  openGame();

  heartGameScore = 0;
  heartGameTime = 20;

  const content =
    document.getElementById("gameContent");

  if (!content) {
    return;
  }

  content.innerHTML =
    `
    <div class="heart-game" id="heartGame">

      <div class="game-score">
        ❤️ Score:
        <span id="heartScore">0</span>
        &nbsp; | &nbsp;
        ⏱️ Time:
        <span id="heartTime">20</span>
      </div>

      <p style="
        color:#ffd1e3;
        margin-bottom:15px;
      ">
        Falling heartsni bosib ochko to‘pla!
      </p>

    </div>
    `;

  if (heartGameTimer) {
    clearInterval(heartGameTimer);
  }

  heartGameTimer =
    setInterval(function() {

      heartGameTime--;

      const timeElement =
        document.getElementById(
          "heartTime"
        );

      if (timeElement) {
        timeElement.textContent =
          heartGameTime;
      }

      if (heartGameTime <= 0) {

        clearInterval(
          heartGameTimer
        );

        heartGameTimer = null;

        const game =
          document.getElementById(
            "heartGame"
          );

        if (game) {

          game.innerHTML =
            `
            <div style="
              padding-top:100px;
            ">

              <div style="
                font-size:70px;
              ">
                ❤️
              </div>

              <h2 style="
                color:#ff65ab;
                margin:20px 0;
              ">
                Game Over!
              </h2>

              <p style="
                color:#ffd2e4;
                font-size:20px;
              ">
                Score: ${heartGameScore}
              </p>

              <button
                class="main-btn"
                onclick="startHeartGame()"
                style="margin-top:20px;"
              >
                🔄 Again
              </button>

            </div>
            `;
        }

      }

    }, 1000);


  const spawnInterval =
    setInterval(function() {

      const game =
        document.getElementById(
          "heartGame"
        );

      if (!game ||
          !document
            .getElementById("gameArea")
            .classList
            .contains("show") ||
          heartGameTime <= 0) {

        clearInterval(
          spawnInterval
        );

        return;
      }

      spawnCatchHeart();

    }, 550);

}


function spawnCatchHeart() {

  const game =
    document.getElementById(
      "heartGame"
    );

  if (!game) {
    return;
  }

  const heart =
    document.createElement("button");

  heart.className =
    "catch-heart";

  heart.textContent =
    Math.random() > 0.5
      ? "❤️"
      : "💕";

  const maxX =
    Math.max(
      10,
      game.clientWidth - 70
    );

  const maxY =
    Math.max(
      100,
      game.clientHeight - 70
    );

  heart.style.left =
    Math.random() * maxX + "px";

  heart.style.top =
    80 +
    Math.random() *
    (maxY - 80) +
    "px";

  heart.onclick =
    function() {

      heartGameScore++;

      const score =
        document.getElementById(
          "heartScore"
        );

      if (score) {
        score.textContent =
          heartGameScore;
      }

      heart.remove();

    };

  game.appendChild(heart);

  setTimeout(function() {

    if (heart.parentNode) {
      heart.remove();
    }

  }, 1500);

}


/* =========================================
   ❓ LOVE QUIZ
========================================= */

const quizQuestions = [

  {
    question:
      "Sevgi uchun eng muhim narsa nima?",

    options: [
      "Ishonch ❤️",
      "Pul 💰",
      "Telefon 📱",
      "O‘yin 🎮"
    ],

    answer: 0
  },

  {
    question:
      "Yaxshi xotiralar nimani yaratadi?",

    options: [
      "Go‘zal hikoya 💕",
      "Muammo 😅",
      "Uyqu 😴",
      "Hech narsa"
    ],

    answer: 0
  },

  {
    question:
      "Baxtli lahzani nima yanada chiroyli qiladi?",

    options: [
      "Yaxshi insonlar ❤️",
      "Yomg‘ir",
      "Telefon",
      "Kompyuter"
    ],

    answer: 0
  },

  {
    question:
      "Yaxshi munosabatning asosi nima?",

    options: [
      "Hurmat va ishonch 💖",
      "Janjal",
      "Sir saqlash",
      "E'tiborsizlik"
    ],

    answer: 0
  }

];


function startQuiz() {

  openGame();

  quizIndex = 0;
  quizScore = 0;

  showQuizQuestion();

}


function showQuizQuestion() {

  const content =
    document.getElementById(
      "gameContent"
    );

  if (!content) {
    return;
  }

  if (
    quizIndex >=
    quizQuestions.length
  ) {

    content.innerHTML =
      `
      <div class="quiz-box">

        <div style="
          font-size:70px;
        ">
          💖
        </div>

        <h2>
          Quiz tugadi!
        </h2>

        <p style="
          color:#ffd3e5;
          font-size:20px;
          margin:20px 0;
        ">
          Natija:
          ${quizScore}/${quizQuestions.length}
        </p>

        <button
          class="main-btn"
          onclick="startQuiz()"
        >
          🔄 Qayta o‘ynash
        </button>

      </div>
      `;

    return;
  }

  const question =
    quizQuestions[quizIndex];

  content.innerHTML =
    `
    <div class="quiz-box">

      <h2>
        ❤️ Love Quiz
      </h2>

      <p style="
        color:#ffb4d3;
        margin-bottom:20px;
      ">
        Savol ${quizIndex + 1}
        / ${quizQuestions.length}
      </p>

      <div class="quiz-question">
        ${question.question}
      </div>

      <div class="quiz-options">

        ${question.options
          .map(function(option, index) {

            return `
              <button
                class="quiz-option"
                onclick="answerQuiz(${index})"
              >
                ${option}
              </button>
            `;

          })
          .join("")}

      </div>

    </div>
    `;

}


function answerQuiz(selected) {

  const question =
    quizQuestions[quizIndex];

  if (
    selected ===
    question.answer
  ) {

    quizScore++;

    showTemporaryMessage(
      "❤️ To‘g‘ri!",
      true
    );

  } else {

    showTemporaryMessage(
      "💔 Keyingi savolga o‘tamiz!",
      false
    );

  }

  setTimeout(function() {

    quizIndex++;

    showQuizQuestion();

  }, 650);

}


/* =========================================
   🎁 MYSTERY GIFT
========================================= */

function mysteryGift() {

  openGame();

  const messages = [

    "❤️ Har bir yaxshi xotira qalbda qoladi.",

    "💕 Baxtli lahzalar hech qachon unutilmaydi.",

    "🌹 Eng chiroyli xotiralar doimo qadrlanadi.",

    "✨ Har bir yangi kun yangi go‘zal xotira.",

    "💖 Qalbdagi yaxshi tuyg‘ular doimo qadrli."
  ];

  const randomMessage =
    messages[
      Math.floor(
        Math.random() *
        messages.length
      )
    ];

  const content =
    document.getElementById(
      "gameContent"
    );

  if (!content) {
    return;
  }

  content.innerHTML =
    `
    <div class="quiz-box">

      <div style="
        font-size:100px;
        animation:floating 2s infinite;
      ">
        🎁
      </div>

      <h2 style="
        color:#ff67ad;
        margin:20px 0;
      ">
        Mystery Gift
      </h2>

      <p style="
        color:#ffe0ec;
        font-size:18px;
        line-height:1.7;
      ">
        ${randomMessage}
      </p>

      <button
        class="main-btn"
        onclick="mysteryGift()"
        style="margin-top:25px;"
      >
        🎁 Yana ochish
      </button>

    </div>
    `;

}


/* =========================================
   🧠 MEMORY GAME
========================================= */

function startMemoryGame() {

  openGame();

  memoryFirst = null;
  memorySecond = null;
  memoryLock = false;
  memoryMatches = 0;

  const symbols = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💘",
    "🌹",
    "✨",
    "💌"
  ];

  memoryCards =
    symbols.concat(symbols);

  shuffleArray(memoryCards);

  renderMemoryGame();

}


function shuffleArray(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[j]
    ] =
    [
      array[j],
      array[i]
    ];

  }

}


function renderMemoryGame() {

  const content =
    document.getElementById(
      "gameContent"
    );

  if (!content) {
    return;
  }

  content.innerHTML =
    `
    <div class="quiz-box">

      <h2>
        🧠 Heart Memory
      </h2>

      <p style="
        color:#ffd3e5;
        margin-bottom:15px;
      ">
        Bir xil yuraklarni toping!
      </p>

      <div class="memory-grid">

        ${memoryCards
          .map(function(symbol, index) {

            return `
              <button
                class="memory-card"
                id="memory-${index}"
                onclick="flipMemoryCard(${index})"
              >
                ${symbol}
              </button>
            `;

          })
          .join("")}

      </div>

      <p id="memoryStatus" style="
        color:#ff8abc;
        margin-top:20px;
      ">
        Topilgan:
        ${memoryMatches}/8
      </p>

    </div>
    `;

}


function flipMemoryCard(index) {

  if (memoryLock) {
    return;
  }

  if (
    memoryFirst === index
  ) {
    return;
  }

  const card =
    document.getElementById(
      "memory-" + index
    );

  if (!card) {
    return;
  }

  card.classList.add("open");

  if (memoryFirst === null) {

    memoryFirst = index;

    return;
  }

  memorySecond = index;

  memoryLock = true;

  const firstCard =
    document.getElementById(
      "memory-" + memoryFirst
    );

  const secondCard =
    document.getElementById(
      "memory-" + memorySecond
    );

  if (
    memoryCards[memoryFirst] ===
    memoryCards[memorySecond]
  ) {

    firstCard.classList.add(
      "matched"
    );

    secondCard.classList.add(
      "matched"
    );

    memoryMatches++;

    memoryLock = false;

    memoryFirst = null;
    memorySecond = null;

    const status =
      document.getElementById(
        "memoryStatus"
      );

    if (status) {

      status.textContent =
        "Topilgan: " +
        memoryMatches +
        "/8";

    }

    if (memoryMatches === 8) {

      setTimeout(function() {

        const content =
          document.getElementById(
            "gameContent"
          );

        if (content) {

          content.innerHTML =
            `
            <div class="quiz-box">

              <div style="
                font-size:80px;
              ">
                🎉❤️
              </div>

              <h2 style="
                color:#ff68ae;
              ">
                Tabriklayman!
              </h2>

              <p style="
                color:#ffd4e5;
                margin:20px 0;
                font-size:18px;
              ">
                Barcha yuraklarni topdingiz!
              </p>

              <button
                class="main-btn"
                onclick="startMemoryGame()"
              >
                🔄 Qayta o‘ynash
              </button>

            </div>
            `;

        }

      }, 500);

    }

  } else {

    setTimeout(function() {

      firstCard.classList.remove(
        "open"
      );

      secondCard.classList.remove(
        "open"
      );

      memoryFirst = null;
      memorySecond = null;
      memoryLock = false;

    }, 700);

  }

}


/* =========================================
   💬 TEMPORARY MESSAGE
========================================= */

function showTemporaryMessage(
  text,
  success
) {

  const message =
    document.createElement("div");

  message.textContent =
    text;

  message.style.position =
    "fixed";

  message.style.left =
    "50%";

  message.style.top =
    "50%";

  message.style.transform =
    "translate(-50%, -50%)";

  message.style.zIndex =
    "2000";

  message.style.padding =
    "18px 25px";

  message.style.borderRadius =
    "20px";

  message.style.background =
    success
      ? "#ff207f"
      : "#631533";

  message.style.color =
    "white";

  message.style.fontWeight =
    "bold";

  message.style.boxShadow =
    "0 0 30px rgba(255,30,120,.5)";

  document.body.appendChild(
    message
  );

  setTimeout(function() {

    message.remove();

  }, 550);

}


/* =========================================
   🖱️ MODAL BACKGROUND CLICK
========================================= */

document.addEventListener(
  "click",
  function(event) {

    const modal =
      document.getElementById(
        "modal"
      );

    if (
      modal &&
      event.target === modal
    ) {

      closeModal();

    }

  }
);


/* =========================================
   ⌨️ ESCAPE
========================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      closeModal();
      closeGame();

    }

  }
);


/* =========================================
   🚀 START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadGallery();

    showPage("home");

    document.body.style.overflow =
      "hidden";

    setInterval(
      createBackgroundHeart,
      700
    );

  }
);