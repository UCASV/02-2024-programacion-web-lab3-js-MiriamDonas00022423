//Funcion suma
const plus = (numbers) => {
    return numbers[0] + numbers[1];
};
//Funcion resta
const subtract = (numbers) => {
    return numbers[0] - numbers[1];
};
//Funcion multiplicar
const multiply = (numbers) => {
    return numbers[0] * numbers[1];
};
//Funcion dividir
const divide = (numbers) => {
    if (numbers[1] === 0) {
        return NaN;
    } else {
        return numbers[0] / numbers[1];
    }
};
//Funcion para pedir los numeros 
const requestNumber = () => {
    let value1 = prompt("Escribe el primer número", "1");
    let value2 = prompt("Escribe el segundo número", "1");


    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    // Verifica si los valores ingresados son válidos
    if (isNaN(value1) || isNaN(value2)) {
        alert("Por favor, ingrese números válidos.");
        return requestNumber();
    }

    return [value1, value2];
};
//Funcion para seleccionar la operacion
const selectOperation = (numbers) => {
    let result;
    let selection = prompt("Escribe tu selección: " +
        "+. Suma " +
        "-. Resta " +
        "*. Multiplicación " +
        "/. División"
    );

    switch (selection) {
        case "+":
            result = plus(numbers);
            break;
        case "-":
            result = subtract(numbers);
            break;
        case "*":
            result = multiply(numbers);
            break;
        case "/":
            result = divide(numbers);
            break;
        default:
            result = "invalid";
            alert("La opción no es válida");
            break;
    }

    return result;
};

const main = () => {
    let numbers = requestNumber();
    let result = selectOperation(numbers);
    //Dependiendo del resultado
    if (result === "invalid") {
        return;
    } else if (isNaN(result)) {
        alert("No se puede dividir entre 0");
    } else {
        alert("El resultado es: " + result);
    }
};

main();