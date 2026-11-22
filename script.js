fetch("MagicInMe.txt")
  .then(response => response.text())
  .then(text => {
    const effects = text.split(/\n/);

    console.log(effects[0]);
    //should be the last of v1
    console.log(effects[9999]);
  })
  .catch(error => {
    console.error("Error reading file:", error);
  });
