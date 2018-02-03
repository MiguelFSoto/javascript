var amigo = "Gustavo";
var amiga = "Catalina";
var mascota = "Osa";

function cambiarAmigo(nuevo) {
    return amigo = nuevo;
}

function cambiarAmiga(nuevo) {
    return amiga = nuevo
}

function cambiarMascota(nuevo) {
    return mascota = nuevo
}

function main() {
    cambiarAmigo("Pepito");
    cambiarAmiga("Pepita");
    cambiarMascota("Pet1");
}

main();