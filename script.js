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
let hasInitialized = false;

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

  // 基本スタイル
  word.style.position = "absolute";
  word.style.opacity = "0";
  word.style.transition = "opacity 1.2s ease";
  word.style.textAlign = "center";
  word.style.maxWidth = "90vw";
  word.style.lineHeight = "1.6";
  word.style.whiteSpace = "pre-wrap";
  word.style.color = "#2b2b2b";
  word.style.fontSize = "1.6rem";
  word.style.zIndex = "10";

  if (centered) {
    // 初回のみ中央に表示
    word.style.top = "50%";
    word.style.left = "50%";
    word.style.transform = "translate(-50%, -50%)";
  } else {
    // ランダム位置（以降）
    word.style.top = `${Math.random() * window.innerHeight}px`;
    word.style.left = `${Math.random() * window.innerWidth}px`;
  }

  area.appendChild(word);

  // ゆっくり表示 → 消えて → 削除
  setTimeout(() => { word.style.opacity = "0.4"; }, 100);     // フェードイン
  setTimeout(() => { word.style.opacity = "0"; }, 4000);      // フェードアウト
  setTimeout(() => { word.remove(); }, 7000);                 // DOMから削除
}

if (window.shadowScriptInitialized) return;
window.shadowScriptInitialized = true;

window.addEventListener("load", () => {
  if (hasInitialized) return;
  hasInitialized = true;

  // 初回：ページ表示後すぐ中央に1回だけ表示
  showShadowWord(true);

  // 以降：7秒後から6秒間隔でランダム表示
  setTimeout(() => {
    setInterval(() => {
      showShadowWord(false);
    }, 6000);
  }, 7000);
});
