const nome = 'Gustavo'
const altura = 1.76
const peso = 59


const IMC = peso / (altura * altura)

if (IMC >=30){
    console.log(`${nome} você esta acima do peso.`)
} else {
    console.log(`${nome} você não esta acima do peso`)
}