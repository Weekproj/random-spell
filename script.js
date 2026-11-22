//preset inputs based on params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const quantity = urlParams.get('quantity');
const LC = urlParams.get('list-choice');

fetch("MagicInMe.txt")
  .then(response => response.text())
  .then(text => {
    const effects = text.split(/\n/);
    const oldEff = effects.slice(0,9999);
    const newEff = effects.slice(10000);
    
    console.log(effects[9999]);
    console.log(oldEff);
    console.log(newEff);
  })
  .catch(error => {
    console.error("Error reading file:", error);
  });
