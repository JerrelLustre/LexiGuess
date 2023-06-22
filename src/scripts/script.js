// Target Input Controls

// Elements to modify styles

// Word and definitions
let word = "";

// Load Random Word

function randomWord() {
    let uriRandom = "https://random-word-api.herokuapp.com/word";
    Promise.all([
      // Extract JSON from response. Get Random Word
      fetch(uriRandom).then((response) => response.json()),
    ])
      .then((data) => {
        word = data[0];
      })
      .then(() => {
        fetch(grabDefinition(word, mykey))
          .then((response) => response.json())
          .then((def) => {
            console.log(word);
            console.log(def);
          })
          .catch((error) => {
            console.error("Error occurred while fetching definition:", error);
          });
      })
      .catch((error) => {
        console.error("Error occurred while fetching random word:", error);
      })
      .finally(() => {
        return;
      });
  }
  


randomWord()













function grabDefinition(word, key) {
  let uri =
    "https://dictionaryapi.com/api/v3/references/collegiate/json/" +
    word +
    "?key=" +
    key;
  return uri;
}

// Load Random Definition
function getDescription() {}


