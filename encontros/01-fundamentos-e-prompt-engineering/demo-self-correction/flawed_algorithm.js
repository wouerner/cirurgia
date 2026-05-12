/**
 * Implementação Ineficiente de Busca Binária
 * 
 * Este código tem problemas de performance (uso de recursão sem necessidade)
 * e um erro de lógica clássico no cálculo do 'mid'.
 */

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // BUG: Pode causar overflow em linguagens de tipagem forte (embora raro em JS)
    // E a lógica de atualização dos ponteiros está levemente falha
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid; // Deveria ser mid + 1
    } else {
      right = mid; // Deveria ser mid - 1
    }
  }

  return -1;
}

const data = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(data, 7));
