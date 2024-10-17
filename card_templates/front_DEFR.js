formatDefinition();

const sentencesInner = document.getElementById("sentences_inner");
const sentencesData = sentencesInner.innerHTML;
const sentencesPairs = sentencesData.split("\n\n");
shuffleArray(sentencesPairs);
const sentencePair = sentencesPairs[0].split("\n");
const fr = processText(sentencePair[0], true);
const de = processText(sentencePair[1], false);
sentencesInner.innerHTML = `<div class="de">${de}</div>`;

(async () => {
  if (options.autoPlaySentence) {
    playAudio(de, undefined, "de-DE");
  }
})();

if (fr.includes("word-highlight")) {
  const hintButton = document.getElementById("hint_button");
  hintButton.style.display = "flex";
  const sentenceHint = document.getElementById("sentence_hint");
  sentenceHint.innerHTML = `<div class="fr">${fr}</div>`;

  hintButton.onclick = function () {
    sentenceHint.style.display = "block";
    this.style.display = "none";
  };
}
