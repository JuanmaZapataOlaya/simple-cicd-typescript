/**
 * Unit tests for sum()
 * Loads the compiled sum.js so window.sum is available (same as in the browser).
 */
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches sum to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("adds negative numbers and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });

  it("returns 0 when both are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });
});

const { subtract, multiply, divide } = require('./math');

describe('Pruebas de operaciones matemáticas', () => {

  // --- PRUEBAS DE RESTA ---
  describe('Función subtract', () => {
    test('resta básica con enteros positivos', () => {
      expect(subtract(10, 5)).toBe(5);
    });

    test('resta con el número cero', () => {
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('resta con números negativos', () => {
      expect(subtract(-5, -2)).toBe(-3);
      expect(subtract(5, -5)).toBe(10);
    });
  });

  // --- PRUEBAS DE MULTIPLICACIÓN ---
  describe('Función multiply', () => {
    test('multiplicación básica con enteros positivos', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    test('multiplicación por cero', () => {
      expect(multiply(10, 0)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('multiplicación con números negativos', () => {
      expect(multiply(-4, 3)).toBe(-12);
      expect(multiply(-2, -5)).toBe(10);
    });
  });

  // --- PRUEBAS DE DIVISIÓN ---
  describe('Función divide', () => {
    test('división básica con enteros positivos', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('división con números negativos', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });

    test('división donde el dividendo es cero', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('Caso límite: error al dividir por cero', () => {
      // Nota: Para capturar errores en Jest, envolvemos la llamada en una función
      expect(() => {
        divide(10, 0);
      }).toThrow("No se puede dividir por cero");
    });
  });

});

export {};
