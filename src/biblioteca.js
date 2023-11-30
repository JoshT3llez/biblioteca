"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.libros = [];
    }
    Biblioteca.prototype.agregar = function (libro) {
        this.libros.push(libro);
    };
    Biblioteca.prototype.buscar = function (icdm) {
        for (var _i = 0, _a = this.libros; _i < _a.length; _i++) {
            var libro = _a[_i];
            if (libro.icdm == icdm) {
                return libro;
            }
        }
        return null;
    };
    Biblioteca.prototype.prestar = function (icdm, cantidad) {
        var libro = this.buscar(icdm);
        if (libro != null) {
            return libro.prestar(cantidad);
        }
        else {
            return false;
        }
    };
    Biblioteca.prototype.devolver = function (icdm, cantidad) {
        var libro = this.buscar(icdm);
        if (libro != null) {
            return libro.devolver(cantidad);
        }
        else {
            return false;
        }
    };
    Biblioteca.prototype.mostrar = function () {
        for (var _i = 0, _a = this.libros; _i < _a.length; _i++) {
            var libro = _a[_i];
            libro.mostrar();
        }
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
