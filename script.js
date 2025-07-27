const words = [
  "今日を終えるあなたに、\n小さな光が\n降りますように",
  "だいじょうぶ、\n立ち止まっていても\n世界はちゃんと回ってるよ",
  "ほんの少しでも、\n風が味方してくれる時間が\nありますように",
  "進むときも、休むときも、\nあなたの選んだ速度で",
  "静けさの中に、\nあなただけの答えが\nあるかもしれない",
  "今日は何もできなくても、\n明日を迎える準備は\nしていたってこと",
  "呼吸の深さに、\n今日の自分が宿っている",
  "やさしさは、\n焦らないことで育つよ",
  "止まっているように見えても、\nちゃんとあなたは進んでいる",
  "選ばなくても、選ばれなくても、\n今日がそこにあるって\nすごいこと",
  "あなたが立っている場所も、\n誰かにとっては\n光かもしれない",
  "心をほどくのに、\n理由なんていらないよ",
  "見えなくても、\n届いているやさしさがある",
  "今日という名前の場所に、\nちゃんと立っているんだね",
  "まっすぐじゃなくても、\n前に進んでるよ",
  "無言の時間にも、\nあなたの感情は揺れてる",
  "すぐ応えられなくても、\nそれは大切に考えてる証だよ",
  "ほんとうの強さは、\n静けさの中にあるかもしれない",
  "さびしさは、\n誰かを想ってる証だから",
  "選ばれなかった日も、\n誰かの世界では\n主役だったかもしれないね",
  "ほどけてしまった気持ちも、\nまた結び直せる",
  "何も言えないときほど、\n心の中は深く語ってるよ",
  "わかり合えないままでも、\nそばにいることはできる",
  "手放すことが、\n守ることになる瞬間もある",
  "誰にも見せていない涙にも\n意味があるよ",
  "静けさは、\n心が本音に\n戻っていく準備時間だよ"

];

let previousWord = "";

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (word === previousWord && words.length > 1);
  previousWord = word;
  return word;
}

function showShadowWord() {
  const area = document.getElementById("shadow-area");
  if (!area) return;

  const word = document.createElement("div");
  word.className = "shadow-word";
  word.textContent = getRandomWord();

  area.appendChild(word);

  // フェードイン → フェードアウト → 削除
  setTimeout(() => { word.style.opacity = "0.6"; }, 100);
  setTimeout(() => { word.style.opacity = "0"; }, 4000);
  setTimeout(() => { word.remove(); }, 7000);
}

window.addEventListener("load", () => {
  showShadowWord(); // 初回すぐ表示
  setInterval(showShadowWord, 6000); // 6秒ごとに表示
});
