"use strict";

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

// Exponer a window para el navegador y los tests (esto las hace globales)
(window as any).sum = sum;
(window as any).subtract = subtract;
(window as any).multiply = multiply;
(window as any).divide = divide;