fetch("MagicInMe.txt")
  .then(response => response.text())
  .then(text => {
    const effects = text.split(/\n/);
    
    console.log(effects[9999]);

    const queryString = window.location.search;

    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const quantity = urlParams.get('quantity');
    const LC = urlParams.get('list-choice');

    console.log(quantity);
    console.log(LC);
  })
  .catch(error => {
    console.error("Error reading file:", error);
  });
