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