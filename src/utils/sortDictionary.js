export function sortDictionary(dict) {
    // Convertir el objeto en un array de pares clave-valor
    const pares = Object.entries(dict);

    // Ordenar el array por clave
    pares.sort((a, b) => a[0].localeCompare(b[0]));
    pares.reverse();

    // Convertir el array ordenado de nuevo en un objeto
    return Object.fromEntries(pares);
}

export function sortDictionaryByValue(dict) {
    // Convertir el objeto en un array de pares clave-valor
    const pares = Object.entries(dict);
    
    // Ordenar el array por valor
    pares.sort((a, b) => a[1] - b[1]);
    
    // Invertir orden del array
    pares.reverse();

    // Convertir el array ordenado de nuevo en un objeto
    return Object.fromEntries(pares);
}