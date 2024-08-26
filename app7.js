/*
DESAFIO DÍA 7--¿CÓMO FUNCIONA UNA CALCULADORA?
*/

function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    if (b === 0) {
      return "Error: No se puede dividir por cero";
    }
    return a / b;
  }
  
  console.log("Bienvenido a la calculadora");
  
  while (true) {
    console.log("\nSelecciona una operación:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Salir");
  
    let operation = parseInt(prompt("Ingresa el número de la operación que deseas realizar:"));
  
    if (operation === 5) {
      console.log("Hasta la próxima");
      break;
    }
  
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    let result;
    switch (operation) {
      case 1:
        result = suma(num1, num2);
        console.log(`El resultado de ${num1} + ${num2} es ${result}`);
        break;
      case 2:
        result = resta(num1, num2);
        console.log(`El resultado de ${num1} - ${num2} es ${result}`);
        break;
      case 3:
        result = multiplicacion(num1, num2);
        console.log(`El resultado de ${num1} * ${num2} es ${result}`);
        break;
      case 4:
        result = division(num1, num2);
        console.log(`El resultado de ${num1} / ${num2} es ${result}`);
        break;
      default:
        console.log("Opción inválida. Intenta de nuevo.");
    }
  }
