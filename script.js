const words = [
  "今日を終えるあなたに、小さな光が降りますように",
  "だいじょうぶ、立ち止まっていても世界はちゃんと回ってるよ",
  "ほんの少しでも、風が味方してくれる時間がありますように",
  "進むときも、休むときも、あなたの選んだ速度で",
  "静けさの中に、あなただけの答えがあるかもしれない",
  "今日は何もできなくても、明日を迎える準備はしていたってこと",
  "呼吸の深さに、今日の自分が宿っている",
  "やさしさは、焦らないことで育つよ",
  "止まっているように見えても、ちゃんと内側は動いてる",
  "選ばなくても、選ばれなくても、今日がそこにあるってすごいこと",
  "あなたが立っている場所も、誰かにとっては光かもしれない"
];

// iPhoneやAndroidなどのモバイル判定（ピクセルとUserAgent両方で）
const isMobile = window.innerWidth <= 480 || /iPhone|Android/.test(navigator.userAgent);

function showShadowWord() {
  const area = document.getElementById("shadow-area");
  const word = document.createElement("div");
  word.className = "shadow-word";
  word.textContent = words[Math.floor(Math.random() * words.length)];

  // 配置のロジック（スマホなら中央、PCならランダム位置）
  word.style.position = "absolute";
  if (isMobile) {
    word.style.top = "50%";
    word.style.left = "50%";
    word.style.transform = "translate(-50%, -50%)";
    word.style.textAlign = "center";
    word.style.maxWidth = "90vw";
  } else {
    word.style.top = Math.random() * window.innerHeight + "px";
    word.style.left = Math.random() * window.innerWidth + "px";
  }

  // アニメーション
  area.appendChild(word);
  setTimeout(() => { word.style.opacity = 0.4 }, 100);
  setTimeout(() => { word.style.opacity = 0 }, 4000);
  setTimeout(() => { word.remove() }, 7000);
}

// ページ読み込み直後に即表示、その後は6秒ごとに繰り返し
document.addEventListener("DOMContentLoaded", () => {
  showShadowWord(); // 🕊 初回はすぐ表示
  setInterval(showShadowWord, 6000); // 🫧 以降は6秒ごとに表示
});
