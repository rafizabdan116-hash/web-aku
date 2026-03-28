const start = document.getElementById("start");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const typing = document.getElementById("typing");
const music = document.getElementById("music");

const lines = [
  "semenjak kenal u,",
  "hari-hari ai jadi beda.",
  "cuma chat dari u yang ai tunggu…",
  "",
  "ai jadi sering senyum sendiri 🗿",
  "padahal gak ada yang lucu 😭",
  "",
  "tapi ya gitu…",
  "ai nyaman sama u 💗",
  "",
  "dan sebenernya…",
  "ai ada perasaan ke u… serius."
];

// 🎬 START
start.addEventListener("click", () => {
  music.volume = 0.4;
  music.play();

  scene1.style.display = "none";
  scene2.style.display = "block";

  let i = 0;

  let delays = [
    1800, 1800, 1600, 1200,
    1200, 1200, 1000,
    1000, 1200, 1400,
    1800, 2200
  ];

  function showLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      p.innerText = lines[i];
      typing.appendChild(p);

      setTimeout(() => {
        p.style.opacity = "1";
      }, 100);

      let delay = delays[i] || 1200;

      i++;
      setTimeout(showLine, delay);
    } else {
      showEnding();
    }
  }

  showLine();
});

function showEnding() {
  const box = document.createElement("div");

  const text = document.createElement("p");
  text.innerText = "jadi… u sayang ai juga gak? 😳";
  box.appendChild(text);

  const yes = document.createElement("button");
  yes.innerText = "iya 💗";

  const no = document.createElement("button");
  no.innerText = "tidak 🗿";
  no.style.marginLeft = "10px";

  // 💘 YES
  yes.onclick = () => {
    box.innerHTML = "";

    music.volume = 0.25;

    const finalText = document.createElement("p");
    finalText.innerText = "nah gitu dong 😭💘 ai bakal jaga ini yaa";
    finalText.style.fontSize = "20px";

    const sub = document.createElement("p");
    sub.innerText = "jangan ilang ya… ai udah nyaman banget sama u 😭";
    sub.style.opacity = "0.7";

    box.appendChild(finalText);
    box.appendChild(sub);

    // 💗 efek bertahap biar smooth
    startHearts();

    setTimeout(() => {
      startFlowers();
    }, 1500);

    setTimeout(() => {
      startLedName();
    }, 2500);

    // 💬 tambahan biar gak cepet selesai
    setTimeout(() => {
      const more = document.createElement("p");
      more.innerText = "u juga udah ada di hati ai…";
      more.style.opacity = "0";
      box.appendChild(more);

      setTimeout(() => {
        more.style.opacity = "1";
      }, 100);
    }, 3000);

    setTimeout(() => {
      const more2 = document.createElement("p");
      more2.innerText = "cukup u yang selalu ada…";
      more2.style.opacity = "0";
      box.appendChild(more2);

      setTimeout(() => {
        more2.style.opacity = "1";
      }, 100);
    }, 6000);

    setTimeout(() => {
      const more3 = document.createElement("p");
      more3.innerText = "dan gak ninggalin ai 😭";
      more3.style.opacity = "0";
      box.appendChild(more3);

      setTimeout(() => {
        more3.style.opacity = "1";
      }, 100);
    }, 9000);

    setTimeout(() => {
      const more3 = document.createElement("p");
      more3.innerText = "maaf yaa kalau masih sederhana 🥺";
      more3.style.opacity = "0";
      box.appendChild(more3);

      setTimeout(() => {
        more3.style.opacity = "1";
      }, 100);
    }, 12000);

    setTimeout(() => {
      const more3 = document.createElement("p");
      more3.innerText = "tapi ai bikin ini sambil mikirin u terus 💗";
      more3.style.opacity = "0";
      box.appendChild(more3);

      setTimeout(() => {
        more3.style.opacity = "1";
      }, 100);
    }, 15000);

    setTimeout(() => {
      const more3 = document.createElement("p");
      more3.innerText = "oiyaa ai ada foto laa, kapan yaa foto kita berdua";
      more3.style.opacity = "0";
      box.appendChild(more3);

      setTimeout(() => {
        more3.style.opacity = "1";
      }, 100);
    }, 19000);

    // 📸 FOTO PALING AKHIR (rapi)
    setTimeout(() => {
      const wrap = document.createElement("div");

      wrap.style.display = "flex";
      wrap.style.justifyContent = "center";
      wrap.style.gap = "10px";
      wrap.style.marginTop = "30px";
      wrap.style.flexWrap = "wrap";

      const img1 = document.createElement("img");
      img1.src = "foto1.jpg";

      const img2 = document.createElement("img");
      img2.src = "foto2.jpg";

      [img1, img2].forEach(img => {
        img.style.width = "40%";
        img.style.maxWidth = "150px";
        img.style.borderRadius = "12px";
        img.style.opacity = "0";
        img.style.transition = "1.5s";
        img.style.boxShadow = "0 0 15px rgba(255, 100, 150, 0.5)";
      });

      wrap.appendChild(img1);
      wrap.appendChild(img2);
      box.appendChild(wrap);

      setTimeout(() => {
        img1.style.opacity = "1";
      }, 200);

      setTimeout(() => {
        img2.style.opacity = "1";
      }, 800);

    }, 22000);
  };

  // 🗿 NO kabur
  no.onmouseover = () => {
    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "%";
    no.style.top = Math.random() * 80 + "%";
  };

  box.appendChild(yes);
  box.appendChild(no);

  typing.appendChild(box);
}

// 💗 HATI
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💗";
    heart.style.position = "fixed";
    heart.style.top = "-10px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = "0.8";
    heart.style.transition = "3s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.top = "100vh";
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 400);
}

// 🌸 BUNGA
function startFlowers() {
  setInterval(() => {
    const flower = document.createElement("div");

    const flowers = ["🌸", "🌺", "🌷", "💮"];
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.position = "fixed";
    flower.style.left = "-20px";
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.fontSize = Math.random() * 20 + 15 + "px";
    flower.style.opacity = "0.9";
    flower.style.transition = "4s linear";

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.style.left = "110vw";
    }, 50);

    setTimeout(() => {
      flower.remove();
    }, 4000);
  }, 700);
}

// 💡 LED
function startLedName() {
  const led = document.createElement("div");
  led.innerText = "I LOVE U SHASA 💗"; // beress

  led.style.position = "fixed";
  led.style.bottom = "20px";
  led.style.whiteSpace = "nowrap";
  led.style.fontSize = "24px";
  led.style.fontWeight = "bold";

  led.style.color = "#ff4d6d";
  led.style.textShadow = `
    0 0 5px #ff4d6d,
    0 0 10px #ff4d6d,
    0 0 20px #ff4d6d,
    0 0 40px #ff4d6d
  `;

  document.body.appendChild(led);

  let pos = -300;

  setInterval(() => {
    pos += 2;
    led.style.left = pos + "px";

    if (pos > window.innerWidth) {
      pos = -300;
    }
  }, 20);
}