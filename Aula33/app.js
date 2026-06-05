// npm init -y
// npm install prompt-sync
// npm install @supabase/supabase-js
// npm install dotenv

// const prompt = require('prompt-sync')()

// let nome = prompt('Digite seu nome: ')
// let idade = prompt('Diigte sua idade: ')
// idade = Number(idade)

// console.log(`Olá ${nome}, vejo que você tem ${idade} anos de idade`)

//1. Crie um programa em node.js que peça para o usuário digitar o login e uma senha, se o usuário digitar a senha errada peça novamente até 5 vezes, sele errar as 5 vezes mostre: login bloqueado, entre em contato com o adminstrador para recuperar sua senha.

// 2. Crie um programa que simule uma urna de votação:
// 1 - João
// 2 - Maria
// 3 - Carlos
// A urna deve receber 10 votos e no final mostrar a contagem de votos de cada candidato.

// 3. Crie um programa que funcione como um caixa eletrônico
// Se o usuário digitar:
// 1 - Sacar
// 2 - Depositar
// 3 - Ver saldo
// 0 - Sair
// Regras:
// - O sistema inicia com saldo de 1000 reais
// - Se tentar sacar um valor maio que o saldo, mostrar: Saldo insuficiente
// - O programa deve funcionar em loop até a pessoa digitar 0
// - Ao sair mostrar o saldo final da conta

const prompt = require('prompt-sync')()
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()


const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)
console.log('Conectado')
async function inserirAutor() {
    let nome = prompt('Digite o nome do autor: ')
    let nascionalidade = prompt('Digite a nascionalidade: ')
    let novoAutor = {
        nome:nome,
        nascionalidade:nascionalidade
    }
    const {data, erro} = await supabase.from('biblioteca_autor').insert(novoAutor).select()

    console.log(data)
    console.log(erro)
}

inserirAutor()