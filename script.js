const frutas = ["laranja", "limão", "uva"]

let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML += frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML += frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML += frutas[2]

let fruta5 = document.getElementById("fruta-5")

// function imprimaValor(){
//     console.log(fruta5.value)
//     fruta5.value = ""
// }

function adicionarFruta(){
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = fruta5.value
    fruta5.value = ""
}