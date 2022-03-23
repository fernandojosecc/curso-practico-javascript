//Codigo del cuadrado
console.group("CUADRADOS")

function perimetroCuadrado(lado){  
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
} 

console.groupEnd();

//Codigo del triangulo
console.group("TRIANGULOS")

function perimetroTriangulo(lado1,lado2,base){
  return lado1+lado2+base;
}

function areaTriangulo(base,altura){
  return (base*altura)/2;
}

function alturaTriangulo(base,lado){
  const altura = Math.sqrt((lado*lado)-((base*base)/4));
  return altura;
}

console.groupEnd();

//Codigo del Circulo
console.group("CIRCULOS");

//Diametro
function diametroCirculo(radio){
  return radio*2;
}

//PI
const PI = Math.PI;
console.log("PI es: "+PI);

//Circunferencia
function circunferencia(radio){
  const diametro = diametroCirculo(radio);
  return diametro*PI;
}

//Area
function areaCirculo(radio){
  return (radio*radio)*PI
}

console.groupEnd();

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value=input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTriangulo(){
  const ladoinput = document.getElementById("InputLado");
  const valueLado = ladoinput.value;

  const baseinput = document.getElementById("InputBase");
  const valueBase = baseinput.value;

  const altura = alturaTriangulo(valueBase,valueLado);
  alert(altura);
}
