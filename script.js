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

let previousWord = "";
let hasShownFirst = false;

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word === previousWord && words.length > 1);
  previousWord = word;
  return word;
}

function showShadowWord(centered = false) {
  const area = document.getElementById("shadow-area");
  if (!area) return;

  const word = document.createElement("div");
  word.className = "shadow-word";
  word.textContent = getRandomWord();

  word.style.position = "absolute";
  word.style.opacity = "0";
  word.style.transition = "opacity 1s ease";
  word.style.textAlign = "center";
  word.style.maxWidth = "90vw";
  word.style.lineHeight = "1.5";
  word.style.whiteSpace = "pre-wrap";
  word.style.color = "#2b2b2b";
  word.style.fontSize = "1.6rem";

  if (centered) {
    word.style.top = "50%";
    word.style.left = "50%";
    word.style.transform = "translate(-50%, -50%)";
  } else {
    word.style.top = Math.random() * window.innerHeight + "px";
    word.style.left = Math.random() * window.innerWidth + "px";
  }

  area.appendChild(word);
  setTimeout(() => { word.style.opacity = "0.4"; }, 100);
  setTimeout(() => { word.style.opacity = "0"; }, 4000);
  setTimeout(() => { word.remove(); }, 7000);
}

window.addEventListener("load", () => {
  // 初回：6秒後に中央表示
  setTimeout(() => {
    if (!hasShownFirst) {
      showShadowWord(true); // 一度だけ中央に表示
      hasShownFirst = true;
    }
  }, 6000);

  // 以降：通常のランダム配置で定期表示
  setTimeout(() => {
    setInterval(() => {
      showShadowWord(false);
    }, 6000);
  }, 13000); // 初回が消えるタイミングに合わせて開始
});
