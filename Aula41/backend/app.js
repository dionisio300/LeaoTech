const prompt = require('prompt-sync')()
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)
const bcrypt = require('bcrypt')
const express = require('express')

const jwt = require('jsonwebtoken')
const JWT_SENHA = process.env.JWT_SENHA

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


//npm install jsonwebtoken
//npm install cors


const API_KEY = process.env.API_KEY


app.get('/listarlivros',autenticarToken,async (req,res) => {
    // const chaveRecebida = req.headers['api-key']
    // console.log(chaveRecebida)
    // if(chaveRecebida != API_KEY){
    //     return res.status(401).json({
    //         "erro":"Chave API errada"
    //     })
    // }

    const {data, error} = await supabase.from('biblioteca_livro').select('*')
    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.get('/listarlivros/:id/:genero',autenticarToken, async (req,res) => {

    const chaveRecebida = req.headers['api-key']
    console.log(chaveRecebida)
    if(chaveRecebida != API_KEY){
        return res.status(401).json({
            "erro":"Chave API errada"
        })
    }

    const id = req.params.id
    const genero = req.params.genero
    console.log(id)
    console.log(genero)
    const {data, error} = await supabase.from('biblioteca_livro').select('*').eq('id',id)
    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.get('/buscarlivro', async (req,res) => {

    const chaveRecebida = req.headers['api-key']
    console.log(chaveRecebida)
    if(chaveRecebida != API_KEY){
        return res.status(401).json({
            "erro":"Chave API errada"
        })
    }

    console.log(req.query)
    const titulo = req.query.titulo
    const ano = req.query.ano
    const autor = req.query.autor
    const {data, error} = await supabase.from('biblioteca_livro').select('*').or(`titulo.ilike.%${titulo}%`,`autor.ilike.%${autor}%`,`ano.ilike.%${ano}%`)

    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.post('/cadastrarlivro', async(req,res) => {

    // const chaveRecebida = req.headers['api-key']
    // console.log(chaveRecebida)
    // if(chaveRecebida != API_KEY){
    //     return res.status(401).json({
    //         "erro":"Chave API errada"
    //     })
    // }

    console.log(req.body)

    const {data, error} = await supabase.from('biblioteca_livro').insert(req.body).select()

    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.put('/atualizarlivro/:id_livro',autenticarToken, async (req,res) => {
    console.log('atualizar livro')
    const chaveRecebida = req.headers['api-key']
    console.log(chaveRecebida)
    if(chaveRecebida != API_KEY){
        return res.status(401).json({
            "erro":"Chave API errada"
        })
    }

    const id_livro = req.params.id_livro
    const atualizacoes = req.body
    console.log(atualizacoes)
    const {data, error} = await supabase.from('biblioteca_livro').update(atualizacoes).eq('id',id_livro).select()

    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.delete('/deletarlivro/:id_livro',autenticarToken, async (req,res) => {

    const chaveRecebida = req.headers['api-key']
    console.log(chaveRecebida)
    if(chaveRecebida != API_KEY){
        return res.status(401).json({
            "erro":"Chave API errada"
        })
    }

    const id_livro = req.params.id_livro
    const {data, error} = await supabase.from('biblioteca_livro').delete().eq('id',id_livro).select()
    if (error){
        console.log(error)
        res.json(error)
        return
    }
    console.log('Deu tudo certo!!',data)
    res.json(data)
})

app.post('/login', async (req, res) => {
    const { cpf, senha } = req.body

    if (!cpf || !senha) {
        return res.status(400).json({
            erro: 'CPF e senha são obrigatórios'
        })
    }

    const { data, error } = await supabase
        .from('biblioteca_usuarios')
        .select('*')
        .eq('cpf', cpf)

    if (error) {
        console.log(error)

        return res.status(500).json({
            erro: 'Erro ao consultar o usuário'
        })
    }

    if (data.length === 0) {
        return res.status(401).json({
            erro: 'CPF não encontrado'
        })
    }

    const usuario = data[0]

    const senhaCorreta = await bcrypt.compare(
        senha,
        usuario.senha
    )

    if (!senhaCorreta) {
        return res.status(401).json({
            erro: 'Senha incorreta'
        })
    }

    const token = jwt.sign(
        {
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo
        },
        JWT_SENHA,
        {
            expiresIn: '1h'
        }
    )

    return res.status(200).json({
        mensagem: 'Login realizado com sucesso!',
        token,
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo
        }
    })
})

function autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({
            erro: 'Token não enviado'
        })
    }

    const partes = authHeader.split(' ')

    if (partes.length !== 2 || partes[0] !== 'Bearer') {
        return res.status(401).json({
            erro: 'Formato do token inválido'
        })
    }

    const token = partes[1]

    try {
        const usuario = jwt.verify(token, JWT_SENHA)

        req.usuario = usuario

        console.log('Usuário autenticado:', usuario)

        next()
    } catch (erro) {
        return res.status(401).json({
            erro: 'Token inválido ou expirado'
        })
    }
}

app.listen(3000, () => {
    console.log('Acesse o sistema em: http://localhost:3000')
})

