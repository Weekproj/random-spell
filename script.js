//preset inputs based on params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const quantity = urlParams.get('quantity');
const LC = urlParams.get('list-choice');

if (quantity != null) {
  document.getElementById('quantity').value = quantity;
}

if (LC != null) {
  document.querySelector(`input[name="list-choice"][value="${LC}"]`).checked = true;
}

fetch("MagicInMe.txt")
  .then(response => response.text())
  .then(text => {
    const effects = text.split(/\n/);
    const oldEff = effects.slice(0,10000);
    const newEff = effects.slice(10000);

    if (quantity == null || LC == null) {
      //nothing
    } else if (quantity <= 0) {
      sillyOutput();
    } else if (LC != "old" && LC != "new" && LC != "both") {
      sillyOutput(2);
    } else {
      const output = document.getElementById("output");
      const p = document.createElement('p');
      p.id = 'magicOutput';
      p.textContent = 'Getting your random effects...';
      output.appendChild(p);

      let magiclist;

      if (LC == "old") {
        magiclist = oldEff;
      }
      if (LC == "new") {
        magiclist = newEff;
      }
      if (LC == "both") {
        magiclist = effects;
      }

      let magicOutput = getRandomEffs(magiclist, quantity);

      output.removeChild(p);

      magicOutput.forEach(printOutput);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    sillyOutput(1);
  });

function sillyOutput(val = 0) {
  switch(val) {
    case 0:
      alert("I can't give you less than one effect!");
      break;
    case 1:
      alert("Uh-oh, something is broken!");
      break;
    case 2:
      alert("That's not an option!");
      break;
    default:
      alert("Don't be silly, that's an invalid input!");
  }
}

function getRandomEffs(list, count) {
  return Array.from({ length: count}, () =>
    list[Math.floor(Math.random() * list.length)]
  );
}

function printOutput(magicEffect) {
  const finalOutput = document.getElementById("output");
  const effect = document.createElement('p');
  effect.id = 'magicOutput';
  effect.textContent = magicEffect;
  finalOutput.appendChild(effect);
}
