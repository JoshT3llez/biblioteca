import { Libro } from './libro';

class Biblioteca {
  libros: Libro[];

  constructor() {
    this.libros = [];
  }

  agregarLibro(libro: Libro): void {
    this.libros.push(libro);
  }

  mostrarInventario(): void {
    console.log("Inventario de la Biblioteca:");
    this.libros.forEach(libro => {
      console.log(`Título: ${libro.titulo}`);
      console.log(`Autor: ${libro.autor}`);
      console.log(`ICDM: ${libro.ICDM}`);
      console.log(`Cantidad Disponible: ${libro.cantidadDisponible}`);
      console.log("---------------------");
    });
  }
}

// Ejemplos
const libro1 = new Libro("El exorcista", "William Peter Blatty", "ISBN1234", 5);
const libro2 = new Libro("Azteca", "Gary Jennings", "ISBN5678", 3);

const biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarInventario();

libro1.prestarLibro();
libro1.prestarLibro();
libro1.devolverLibro();

biblioteca.mostrarInventario();