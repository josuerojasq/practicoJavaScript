/**Obtenemos del array de objetos "country" (que esta en salarios.js) la lista de solo salarios
 * Utilizando el metodo map().
*/
const salariosCountry = country.map(
    function (persona) {
        return persona.salary;
    }
);

/**Ordenamos la lista de salarios obtenida con el metodo sort() */
const salariosCountrySorted = salariosCountry.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

/**Funcion que devuelve "true si es par" y "false si es impar" */
function esPar(numero) {
    return (numero % 2 === 0);
}

/**Funcion que calcula la media aritmetica(promedio) de una lista.
 * Utilizamos metodo reduce() para recorrer la lista
*/
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/**Calculamos la mediana de la lista de salarios */
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

console.log(medianaSalarios(salariosCountrySorted));