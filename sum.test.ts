/**
 * Unit tests for Calculator Operations
 * Loads the compiled sum.js so functions are available in the global window object.
 */

// 1. Extendemos la interfaz Window para incluir todas las nuevas operaciones [cite: 6, 18]
declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Cargamos el script generado que adjunta las funciones a window [cite: 14]
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./sum.js");
});

describe("Calculadora - Pruebas Unitarias", () => {

  // --- PRUEBAS DE SUMA ---
  describe("sum", () => {
    it("adds two positive numbers ", () => {
      expect(window.sum(2, 3)).toBe(5);
    });

    it("adds negative numbers and positive numbers ", () => {
      expect(window.sum(-1, 1)).toBe(0);
    });

    it("returns 0 when both are 0 ", () => {
      expect(window.sum(0, 0)).toBe(0);
    });
  });

  // --- PRUEBAS DE RESTA --- 
  describe('subtract', () => {
    test('resta básica con enteros positivos ', () => {
      expect(window.subtract(10, 5)).toBe(5);
    });

    test('resta con el número cero ', () => {
      expect(window.subtract(10, 0)).toBe(10);
      expect(window.subtract(0, 5)).toBe(-5);
    });

    test('resta con números negativos ', () => {
      expect(window.subtract(-5, -2)).toBe(-3);
      expect(window.subtract(5, -5)).toBe(10);
    });
  });

  // --- PRUEBAS DE MULTIPLICACIÓN --- 
  describe('multiply', () => {
    test('multiplicación básica con enteros positivos ', () => {
      expect(window.multiply(4, 3)).toBe(12);
    });

    test('multiplicación por cero ', () => {
      expect(window.multiply(10, 0)).toBe(0);
    });

    test('multiplicación con números negativos ', () => {
      expect(window.multiply(-4, 3)).toBe(-12);
    });
  });

  // --- PRUEBAS DE DIVISIÓN --- 
  describe('divide', () => {
    test('división básica con enteros positivos ', () => {
      expect(window.divide(10, 2)).toBe(5);
    });

    test('división con números negativos ', () => {
      expect(window.divide(-10, -2)).toBe(5);
    });

    test('división donde el dividendo es cero ', () => {
      expect(window.divide(0, 5)).toBe(0);
    });

    // Ajuste del mensaje de error para que coincida con tu código [cite: 47, 52]
    test('Caso límite: error al dividir por cero ', () => {
      expect(() => {
        window.divide(10, 0);
      }).toThrow("No es posible dividir por cero");
    });
  });

});

export {};