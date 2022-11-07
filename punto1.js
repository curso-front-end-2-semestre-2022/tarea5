//1.-Mostrar en consola la secuenci de Fibonnacci

//a. Entre los números 0 y 1000

const secuenciaFibonnacci = (numero) => {

    enunciado1 = 'secuencia Fibonnacci entre los números 0 y 1000'
    enunciado2 = 'secuencia Fibonnacci numeros pares entre los números 0 y 1000'
    enunciado3 = 'secuencia Fibonnacci numeros impares entre entre los números 0 y 1000'

    const array = [0, 1]
    const arrayPar = []
    const arrayImpar = [1]

    for (let i = 2; i < numero; i++) {

        array[i] = array[i - 1] + array[i - 2]

        if (array[i] % 2 === 0) {

            arrayPar.push(array[i])
            
        }
        else if (array[i] % 2 !== 0) {

            arrayImpar.push(array[i])
            
        }

    }
    return {enunciado1, array, enunciado2, arrayPar, enunciado3,arrayImpar}
}
console.log('Entre los números 0 y 1000')
const punto1 = secuenciaFibonnacci(1000);

console.log(punto1)
