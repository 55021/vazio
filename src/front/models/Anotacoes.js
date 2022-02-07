class Anotacoes {
    constructor(titulo, notas) {
        if (typeof titulo === 'string' && typeof notas === 'string') {
        this.titulo = titulo;
        this.notas = notas;
        } else {
            console.log("Criação de notas - dados inválidos");
        }
    }
}