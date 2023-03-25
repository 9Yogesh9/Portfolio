async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

$(document).ready(async function () {
  carousel(carouselText, '#feature-text')
});

const carouselText = [
  { text: "React", shadow: "0px 0px 12px #00ff00,0px 0px 15px #ffff00,0px 0px 12px #00ffff" },
  { text: "Node", shadow: "0px 0px 12px #0000ff,0px 0px 15px #ff00ff,0px 0px 12px #00ffff"},
  { text: "Full stack", shadow: "0px 0px 12px #ff0000,0px 0px 15px #ff00ff,0px 0px 12px #ffff00"}
]

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i])
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) { i = 0; }
  }
}

function updateFontColor(eleRef, item) {
  $(eleRef).css('text-shadow', item.shadow);
  
}