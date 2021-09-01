// console.log("Hola Mundo feliz 🙃🙃🙃!!!");

// Agrupa todos los console.log en el grupo "Cuadrados"
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
// Cierra el grupo "Cuadrados"
console.groupEnd();

// Inicia el grupo "Triángulos"
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm");
console.groupEnd();

// Inicia el grupo "Círculos"
console.group("Círculos");
//Radio
const radioCirculo = 4;
console.log("El radio del Círculo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del Círculo es: " + diametroCirculo + "cm");
//PI
// const PI = 3.141516;
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del Círculo es: " + perimetroCirculo + "cm");
//Área
const areaCirculo = Math.pow(radioCirculo,2) * PI;
console.log("El área del Círculo es: " + areaCirculo + "cm^2");
console.groupEnd();