var nombre = "Miguel Soto";
var edad = 15;
var gustos = ["jugar", "programar", "pensar"];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var esAdulto = edad >= 18 ? true : false;

var persona = 
{
    nombre: nombre,
    edad: edad,
    gustos: gustos
};
console.log(persona.nombre);
esAdulto ? console.log("Es adulto") : console.log("No es adulto");

gustos.forEach(element => 
{
    console.log(element);
}, this);

var numsPlusOne = nums.map(elem => elem += 1);
var bigNums = nums.filter(elem => elem > 5)
console.log(nums);
console.log(numsPlusOne);
console.log(bigNums);

function cambiarNombre(nombre2)
{
    persona.nombre = nombre2;
}

function cambiarEdad(edad2)
{
    persona.edad = edad2;
}