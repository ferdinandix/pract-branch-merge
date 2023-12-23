// esto agrega a la pantala el vaor de la calculadora que agreguemos 

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function calcular(){
    const respantalla= document.getElementById('pantalla').value
    const resultado= eval(respantalla)
    document.getElementById('pantalla').value = resultado

}

function borrar(){
    document.getElementById('pantalla').value = ''
}