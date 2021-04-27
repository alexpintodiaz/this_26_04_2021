const lista = {
    nombre: "Alexander",
    apellido: "Pinto",
    mostrar: p1 => `Hola ${p1} como estas`,
};
function hello(Callback,p2){
    console.log(Callback(p2));
}
const execute = hello.bind(lista, lista.mostrar, lista.nombre);
execute();
