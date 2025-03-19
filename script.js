
// ~~~~~USANDO IF COM TERNARIO~~~~~~
//EXEMPLO:  salary < 3000 && console.log("colaborador e junior")

// ... ... ... ... ... ... ... ... ... ... ... ... ... ... 
//~~~~~~USANDO IF / ELSE~~~~~~~~
// EXEMPLOS: salary < 3000 ? console.log("o colaborador e junior") : console.log("ele e senior")
// ......... ... ... ... ... ... ... ... 



//monatando um arrei
//  const number = [1, 2, 3, 4, 5, 6, 7]

 // agora criando um novo arrei com o map pegando por item, posicoes eo, array Original...

//  exemplos: 
// const double = number.map((item, index, arrayOriginal) => {
//     console.log(item + 'item')
//     console.log(index + 'index')
//     console.log(arrayOriginal +'arrayOriginal')
//     const newItem = item * 2
//  return newItem
// })
// console.log(double)


// ... ... ... ... ... ... ... ... ... ... ... ... ... ... 
 
    //  2  AULA DE MAP... ... ... ... 

    // EXEMPLOS.. ... 
//    const list = [
//     {name: 'Rodolfo', vip: true },
//     {name: 'Maria', vip: false },
//     {name: 'Joao', vip: true },
//     {name: 'Bruno', vip: true },
//     {name: 'Carla', vip: false },
//     {name: 'Ana', vip: true },
//     {name: 'Julio', vip: false },
//    ]
// ... entre os usuario acima so e VIP se 
// tiver a pulseira preta e, quem nao for VIP 
// vai uar verde...

// ... EXEMPLO ABAIXO. criando a nova lista com o MAP
       
  //        const newList = list.map( user => {
//             const newUser = {
//                name: user.name,
//                braceletColor: user.vip ? 'black' : 'green'
//             }
//             return newUser
//           })
//    console.log(newList)

//... ... ... ... ............ ..... ..... ....

          
//NOVO EXEMPLO DE UMA LISTA USANDO E ADICIONANDO O .MAP... ... 


// const students = [
//     { name: 'rodolfo', testGrade: 7 },
//     { name: 'Maria', testGrade: 5 },
//     { name: 'Joao', testGrade: 8 },
//     { name: 'Bruno', testGrade: 9 },
//     { name: 'Carla', testGrade: 3 },
//     { name: 'Ana', testGrade: 2 },
//     { name: 'Julio', testGrade: 10 },
// ]

// const newStudents = students.map( student => {
    
//     return{
//        name: student.name,
//        passouDeAno: student.testGrade >= 5 ? 'passou de ano' : 'reprovado'

//     }
// })
// console.log(newStudents)

//............ ......... ......... ........... ........... 

//..... FALANDO SOBRE ...REDUCE
 //  tem a funcao de pagar todos os valores de um array e deixar em um valor so
 //----- ele aceiota 4parametros diferentes

// - acumulador
//- valor tual
//- index
//- array completo]

//  : EXEMPLOS
//    const list = [ 1, 2, 3, 4, 5,]
// //    como somar esse numeros acima ....
// const sum = list.reduce((acumulador, valorAtual) => {
//     console.log(acumulador + 'acc')
//     console.log(valorAtual + 'valorAtual')
// }, 0)

// OUTRO EXEMPLO:

// um carrinho de compra de um cliente 
     
//  const cart = [
//   { productName: 'Abóbora', pricePerkg: 5, kg: 1 },
//   { productName: 'Pepino', pricePerkg: 3.55, kg: 1.3 },
//   { productName: 'Limao', pricePerkg: 1.2, kg: 2 },
//   { productName: 'Abacate', pricePerkg: 5.4, kg: 1.67 },
//   { productName: 'Morango', pricePerkg: 11.9, kg: 3 },
// ]
// const finalValue = cart.reduce((acc, value) => {
//   const result = value.pricePerkg * value.kg
//   return acc + result
// }, 0)

//  console.log(`A sua compra deu: ${finalValue}`)



//.....COMO SOMAR OS VALORES COM REDUCE....
//. 


// const list = [230, 450, 122, 320]
// const sum = list.reduce((acc, valores) => {
//   return acc + valores
// })
// console.log(`O seu valor e de: ${sum}`)
 

//  FALANDO AGORA SOBRE FILTER.......
//   EXEMPLOS quero retornar somente os numeros > 100
//   const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]
// const newList = list.filter(number => {
//   if (number < 100 || number % 2 === 0) {
                            //  numero que seja menor que 100 ou se for par 
//     return true
//   } else{
//     return false
//   }
// })
// console.log(newList)