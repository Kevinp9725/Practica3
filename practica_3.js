const matriz = [17,9,36,8,7,3,15,28,57]
const ordenada = []
let actual = 0

for (i = 1; i < matriz.length; i++) {
    for (j = 0; j < (matriz.length - i); j++) {
        if (matriz[j] > matriz[j + 1]) {
            actual = matriz[j];
            matriz[j] = matriz[j + 1];
            matriz[j + 1] = actual;
        }
    }
}

const num = matriz.length;
let mediana = 0;
    if (num % 2 === 0) {
        const med1 = matriz[num / 2 - 1];
        const med2 = matriz[num / 2];
        mediana = (med1 + med2) / 2;
    } else {
        mediana = matriz[Math.floor(num / 2)];
    }


console.log("Elementos Ordenados: " + matriz);
console.log("Mediana: " + mediana);