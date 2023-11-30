export class Libro {
  titulo: string;
  autor: string;
  ICDM: string;
  cantidadDisponible: number;

  constructor(titulo: string, autor: string, ICDM: string, cantidadDisponible: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.ICDM = ICDM;
    this.cantidadDisponible = cantidadDisponible;
  }

  prestarLibro(): void {
    if (this.cantidadDisponible > 0) {
      this.cantidadDisponible--;
      console.log(`Se prestó el libro "${this.titulo}"`);
    } else {
      console.log(`No hay ejemplares disponibles del libro "${this.titulo}"`);
    }
  }

  devolverLibro(): void {
    this.cantidadDisponible++;
    console.log(`Se devolvió el libro "${this.titulo}"`);
  }

  
}

