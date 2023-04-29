function characterReplacement(s, k) {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    let count = new Array(26).fill(0); // array com 26 posições (uma para cada letra do alfabeto) iniciando com valor 0
  
    for (let right = 0; right < s.length; right++) {
      count[s[right].charCodeAt() - 'A'.charCodeAt()]++; // incrementa o valor da posição do array correspondente à letra
  
      maxCount = Math.max(maxCount, count[s[right].charCodeAt() - 'A'.charCodeAt()]); // atualiza o valor máximo de contagem
  
      while (right - left + 1 - maxCount > k) { // verifica se é possível fazer a troca de letras
        count[s[left].charCodeAt() - 'A'.charCodeAt()]--; // decrementa o valor da posição do array correspondente à letra
        left++; // move o índice esquerdo para a direita
      }
  
      maxLength = Math.max(maxLength, right - left + 1); // atualiza o valor máximo do comprimento da substring
    }
  
    return maxLength;
  }

const s = "ABAB";
const k = 2;
const length = longestSubstring(s, k);
console.log(length); // Output: 4