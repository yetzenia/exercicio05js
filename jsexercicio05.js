let usuario1=prompt("nome do 1ro usuario")
let idade1=prompt("idade do 1ro usuario")
let usuario2=prompt("nome do 2do usuario")
let idade2=prompt("idade do 2do usuario")


console.log("resultado dos usuarios registrados");
console.log("primeiro usuario e idade")
console.log(usuario1,idade1);
console.log("segundo usuario e idade")
console.log(usuario2,idade2)

if (idade1==idade2){
	console.log("os usuarios tem a mesma idade")
} else if (idade1>idade2) {
	console.log("1ro usuario é mais velho que o 2do usuario");
} else if (idade1<idade2) {
	console.log("1ro usuario é mais novo que o 2do usuario")
};


