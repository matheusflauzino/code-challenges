/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
  let cows = 0;
  const map = new Map();
  // Verifica os bulls e coloca os números em um mapa
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      map.set(secret[i], (map.get(secret[i]) || 0) + 1);
    }
  }
  // Verifica os cows
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] !== guess[i] && map.get(guess[i]) > 0) {
      cows++;
      map.set(guess[i], map.get(guess[i]) - 1);
    }
  }
  return `${bulls}A${cows}B`;
};

console.log('1A3B', getHint("1807", "7810"))
console.log('1A1B', getHint("1123", "0111"))
console.log('0A4B', getHint("1122", "2211"))