"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, icdm, cantidad, prestados) {
        this.titulo = titulo;
        this.autor = autor;
        this.icdm = icdm;
        this.cantidad = cantidad;
        this.prestados = prestados;
    }
    Libro.prototype.prestar = function (cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
            this.prestados += cantidad;
            return true;
        }
        else {
            return false;
        }
    };
    Libro.prototype.devolver = function (cantidad) {
        if (this.prestados >= cantidad) {
            this.cantidad += cantidad;
            this.prestados -= cantidad;
            return true;
        }
        else {
            return false;
        }
    };
    Libro.prototype.mostrar = function () {
        console.log(this.titulo, this.autor, this.icdm, this.cantidad, this.prestados);
    };
    return Libro;
}());
exports.Libro = Libro;
