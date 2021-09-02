// console.log("Hola Mundo feliz 🙃🙃🙃!!!");

// Agrupa todos los console.log en el grupo "Cuadrados"
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
// Cierra el grupo "Cuadrados"
console.groupEnd();

// Inicia el grupo "Triángulos"
console.group("Triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
console.log("La altura del triángulo es: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm");
console.groupEnd();

// Inicia el grupo "Círculos"
console.group("Círculos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del Círculo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del Círculo es: " + diametroCirculo + "cm");
//PI
// const PI = 3.141516;
const PI = Math.PI;
// console.log("El valor de PI es: " + PI);
//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del Círculo es: " + perimetroCirculo + "cm");
//Área

function areaCirculo(radio) {
    return Math.pow(radio, 2) * PI;
}
// console.log("El área del Círculo es: " + areaCirculo + "cm^2");
console.groupEnd();

//Calculando valores del Cuadrado, desde HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm²");
}

//Calculando valores del Triángulo
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLado1").value);
    const lado2 = parseInt(document.getElementById("inputLado2").value);
    const base = parseInt(document.getElementById("inputBase").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triángulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo() {
    const altura = document.getElementById("inputAltura").value;
    const base = document.getElementById("inputBase").value;

    const area = areaTriangulo(base, altura).toFixed(2);
    alert("El área del triángulo es: " + area + "cm²");
}

function esIsosceles(ladoA, ladoB) {
    let esIsosceles = false;
    if (ladoA == ladoB) {
        esIsosceles = true;
    }
    return esIsosceles;
}

function calcularAlturaIsosceles() {
    let ladoA = parseInt(document.getElementById("inputLado1").value);
    let ladoB = parseInt(document.getElementById("inputLado2").value);
    let Base = parseInt(document.getElementById("inputBase").value);
    if (esIsosceles(ladoA, ladoB)) {
        let altura = Math.sqrt(Math.pow(ladoA, 2) - (Math.pow(Base, 2) / 4));
        altura = altura.toFixed(2);
        alert("La altura del triángulo isósceles es: " + altura + "cm");
    } else {
        alert("No es un triángulo isósceles");
    }
}

//Calculando valores del Círculo
function calcularDiametroCirculo() {
    const radio = document.getElementById("inputRadio").value;

    const diametro = diametroCirculo(radio);
    alert("El diametro del círculo es: " + diametro + "cm");
}
function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputRadio").value;

    const perimetro = perimetroCirculo(radio).toFixed(2);
    alert("El perímetro del círculo es: " + perimetro + "cm");
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputRadio").value;

    const area = areaCirculo(radio).toFixed(2);
    alert("El área del círculo es: " + area + "cm²");
}