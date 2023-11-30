import { Libro } from './libro';
import { Biblioteca } from './biblioteca';

// Crear una instancia de la clase Biblioteca
let biblioteca = new Biblioteca();

// Crear instancias de la clase Libro y agregarlas a la biblioteca
let libro1 = new Libro('El principito', 'Antoine de Saint-Exupéry', '1234567890', 10, 0);
biblioteca.agregar(libro1);

let libro2 = new Libro('1984', 'George Orwell', '0987654321', 5, 0);
biblioteca.agregar(libro2);

// Mostrar el inventario de la biblioteca
biblioteca.mostrar();

// Prestar algunos libros
console.log(biblioteca.prestar('1234567890', 1)); // Debería devolver true
console.log(biblioteca.prestar('0987654321', 2)); // Debería devolver true

// Mostrar el inventario de la biblioteca después de prestar los libros
biblioteca.mostrar();

// Devolver algunos libros
console.log(biblioteca.devolver('1234567890', 1)); // Debería devolver true
console.log(biblioteca.devolver('0987654321', 2)); // Debería devolver true

// Mostrar el inventario de la biblioteca después de devolver los libros
biblioteca.mostrar();