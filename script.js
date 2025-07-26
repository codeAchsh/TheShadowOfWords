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

function showShadowWord() {
  const area = document.getElementById("shadow-area");
  const word = document.createElement("div");
  word.textContent = words[Math.floor(Math.random() * words.length)];
  word.className = "shadow-word";
  word.style.top = Math.random() * window.innerHeight + "px";
  word.style.left = Math.random() * window.innerWidth + "px";

  area.appendChild(word);
  setTimeout(() => { word.style.opacity = 0.4 }, 100);
  setTimeout(() => { word.style.opacity = 0 }, 4000);
  setTimeout(() => { word.remove() }, 7000);
}

setInterval(showShadowWord, 6000);