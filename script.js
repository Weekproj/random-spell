fetch("MagicInMe.txt")
  .then(response => response.text())
  .then(text => {
    const lines = text.split(/\r?\n/);

    console.log(lines[0]);
  })
  .catch(error => {
    console.error("Error reading file:", error);
  });
