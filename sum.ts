"use strict";

// Definimos la interfaz para que el Linter sepa qué funciones tiene window
interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}

/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
    return a + b;
}

/**
 * Returns the difference of two numbers.
 */
function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Returns the product of two numbers.
 */
function multiply(a: number, b: number): number {
    return a * b;
}

/**
 * Returns the division of two numbers.
 * Throws an error if dividing by zero.
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No es posible dividir por cero");
    }
    return a / b;
}

// Exponer a window usando una conversión de tipo segura
const win = (window as unknown as Window);
win.sum = sum;
win.subtract = subtract;
win.multiply = multiply;
win.divide = divide;