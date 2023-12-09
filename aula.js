// console é um objeto que atraves dos seus metodos
// conseguimos trazer informacoes em tempo de execucao

let erro = 'caiu a api de consumo'
// console.log('olá, mundo!')
// console.warn('Api lenta')
// console.error(`barraco desabou ${erro}`)

const fruits = ['apple', 'banana' , 'orange'  ]  

// console. table(fruits)

// console.info('inform');

// variáveis
// variavel nome = valor
var a = 6
let b = 5
const c = 10

// a = 900
// console.log(a)

// b = 'banana'
// console.log(b)

// console.log(c)

// const data = Date()
// console.log(data)

// tipos de dados

const name = 'Thalyta'
const age = 17
const isApproved = false
let surname = null
let email
const languages = ['java', 'Python', 'PHP']
const number = [10,200,1]
const user = {    
   email:'thalytalucas4@gmail.com',
   password: 'teste@123'
}  
// operador typeof() retorna o tipo da minha variável
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(isApproved))
// console.log(typeof(surname))
// console.log(typeof(email))
// console.log(typeof(languages))
// console.log(typeof(user))

// métodos de strings
const fullName = 'Marilia Mendonça Gab'
// length retorna quantas letras tem nossa string
console.log(fullName.length)

// split() separa string conforme a letra desejada
const separadorName = fullName.split(' ')
console.log(separadorName)

// trabalhando com a array, que pode ser reconhecida como lista, de 0 a...
// trazendo a variável[] com conchet o numero que colocar é o que vai 
// retornar para voce 
console.log(separadorName[1])

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.indexOf('Gab'))
console.log(fullName.slice(8, 16))

// métodos de array

const list = ['a', 'b', 'c', 'd', 'e']
// buscando quantidades de intens no array
console.log(list.length)

//buscando um item especifico no array
console.log (list[4])

// adicionamos um item no array
list[5] = 'f'

console.log(list)
// adiciona um item ao array
list.push('g')
console.table(list)

console.log(list.length)
// list.lenght = valor de itens contando com o 0 = primeiro indice
// list.lenght - 1 = retorna o ultimo item do array
console.log(list[list.length - 1 ])
// retira o ultimo valor do array
list.pop()

console.log(list)


function calcular() {
    const a = document.getElementById('numbOne').value
    const b = document.getElementById('numbTwo').value

    const soma = parseFloat(a) + parseFloat(b)

  
  
  
 
    // return alert('O resultado da soma é ${soma}') 
