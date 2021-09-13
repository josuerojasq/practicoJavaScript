/** Calculo del Promedio de los elementos de una lista */
function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    } */
    /**Alternativa al for 
     * 
    */

    /**Calculamos la suma de la lista con un metodo del array = reduce() que:
     * Recibe una funcion como argumento que suma los elementos de la lista, aplica recursividad.
     */
    const sumaLista = lista.reduce(
        /**Enviamos como argumento una funcion anonima */
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    /**Calculamos el promedio de la lista */
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/**Calculo de la  mediana de una lista*/
/* const lista = [100, 200, 500, 1252000];
let mediana; */

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function orderList(lista) {
    lista.sort((a, b) => a - b);
    return lista
}

function calcularMediana(lista) {
    /**Primero ordenamos la lista */
    lista = orderList(lista);

    /**Obtenemos el elemento del medio de una lista; es necesario parsearlo a entero */
    const mitadLista = parseInt(lista.length / 2);
    
    /**Preguntamos si el numero de elementos de la lista es par o impar*/
    if (esPar(lista.length)) {
        /**Si es par obtenemos los dos elementos del medio */
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        /**Calculamos el promedio de estos dos elementos, el resultado es la mediana de la lista */
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedio;
    } else {
        /**Si la lista es impar solo se obtiene el elemento de la mitad y este es la mediana */
        mediana = lista[mitadLista];
    }
    return mediana;
}

/**Calculo de la  moda de una lista*/
// const lista = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function calcularModa(lista) {
    /**Objeto que almacenara cuantas veces se repite cada elemento del array*/
    const listaCount = {};
    
    /**Llenamos el objeto a traves del metodo map() el array que recorre el mismo y suma + 1 cada que encuentra un elemento similar */
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    /** Genera lista que almacena en arrays el numero y las veces que aparece ej: [["2",5], ["8",2]]
     * Ordena la lista con el metodo sort que toma el segundo elemento de cada array interno.*/
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    /**La moda es el ultimo elemento de la lista de arrays ya que es el que tiene mayores repeticiones */
    const moda = listaArray[listaArray.length - 1];
    return moda;
}

const listaFinal = [];

function adicionarValores() {
    const inputValorES = document.getElementById("inputValores").value;
    const displayList = document.getElementById("displayList");
    const listaValorES = inputValorES.split(' ');
    listaValorES.map(
        function (valor) {
            valor = parseInt(valor);
            if (!Number.isNaN(valor)) {
                listaFinal.push(valor);
            }
        }
    );
    displayList.innerHTML = `${listaFinal}`;
    limpiarPantalla();
}

function mostrarPromedio() {
    const resultPromedio = document.getElementById("resultPromedio");
    const promedio = calcularMediaAritmetica(listaFinal);
    resultPromedio.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
    resultPromedio.classList.add('show');
}

function mostrarMediana() {
    const resultMediana = document.getElementById("resultMediana");
    const mediana = calcularMediana(listaFinal);
    resultMediana.innerHTML = `Mediana: ${mediana.toFixed(2)}`;
    resultMediana.classList.add('show');
}

function mostrarModa() {
    const resultModa = document.getElementById("resultModa");
    const moda = calcularModa(listaFinal);
    resultModa.innerHTML = `Moda: ${moda[0]} - ${moda[1]} veces`;
    resultModa.classList.add('show');
}

function limpiarPantalla() {
    const inputValorES = document.getElementById("inputValores");
    const resultPromedio = document.getElementById("resultPromedio");
    const resultMediana = document.getElementById("resultMediana");
    const resultModa = document.getElementById("resultModa");
    inputValorES.value = '';
    resultPromedio.classList.remove('show');
    resultMediana.classList.remove('show');
    resultModa.classList.remove('show');
}
/**Calculo de la media aritmética ponderada
 * Array de objetos; Cada objeto tendrá tres valores:
 * course: nombre de la materia
 * note: nota de la materia
 * credit: créditos de la materia.
*/
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

/** Array de solo números a partir de multiplicar cada nota con sus créditos.
*/
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

/**Suma de todos los elementos del array anterior*/
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/**Array credits únicamente con los créditos de cada materia */
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

/**Suma de todos los elementos del array anterior*/
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

/**dividir nuestras variables importantes */
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits

/** Calculo de la media geométrica*/
function calculaMediaGeometrica(lista) {
    /**array.includes("valor") Devuelve true si el valor esta en la lista, caso contrario devuelve false */
    // const listaConCeros = lista.includes(0);

    /**Validamos la lista con el metodo reduce(); si esta tiene algun elemento negativo o igual a cero, devuelve "false" caso contrario retorna el primer valor de la lista que es positivo*/
    const validaRangoLista = lista.reduce(
        function (resultado, elemento) {
            if (resultado <= 0 || elemento <= 0) {
                resultado = false;
            }
            return resultado;
        }
    )

    if (validaRangoLista) {
        const productoLista = lista.reduce(
            function (resultado = 1, elemento) {
                return resultado *= elemento;
            }
        );
        
        const raizNesima = 1 / lista.length;

        const mediaGeometrica = Math.pow(productoLista, raizNesima);
        console.group([validaRangoLista, productoLista, raizNesima]);
        return mediaGeometrica;
    } else {
        return "No se puede calcular la Media Geometrica de la lista dada";
    }
}

/** Calculo de la media geométrica*/
function calculaMediaGeometrica(lista) {
    /**Validamos la lista con el metodo reduce(); si esta tiene algun elemento negativo o igual a cero, devuelve "false" caso contrario retorna el primer valor de la lista que es positivo*/
    const validaRangoLista = lista.reduce(
        function (resultado, elemento) {
            if (resultado <= 0 || elemento <= 0) {
                resultado = false;
            }
            return resultado;
        }
    )

    /**Preguntamos si la lista es valida */
    if (validaRangoLista) {
        /**Obtenemos el producto de todos los valores de la lista */
        const productoLista = lista.reduce(
            function (resultado = 1, elemento) {
                return resultado *= elemento;
            }
        );
        
        /**convertimos la raiz n-ésima (Número de elementos de la lista) a potencia*/
        const raizNesima = 1 / lista.length;

        /**Calculamos la raiz n-ésima del producto de los valores por medio de la potencia*/
        const mediaGeometrica = Math.pow(productoLista, raizNesima);
        
        return mediaGeometrica;
    } else {
        return "No se puede calcular la Media Geometrica de la lista dada";
    }
}