# Exercício 2

Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
Cole o comando aqui:
```jsx
    function imprimaValor(){
    let fruta = document.getElementById("fruta-5")
    console.log(fruta.value)
    fruta.value = ""
}
```