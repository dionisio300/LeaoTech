import { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
  const navigate = useNavigate()

  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function fazerLogin(event) {
    event.preventDefault()

    setMensagem('')
    setCarregando(true)

    try {
      const resposta = await fetch(
        'http://localhost:3000/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            cpf,
            senha
          })
        }
      )

      const dados = await resposta.json()

      if (!resposta.ok) {
        setMensagem(dados.erro || 'Não foi possível entrar')
        return
      }

      localStorage.setItem('token', dados.token)

      localStorage.setItem(
        'usuario',
        JSON.stringify(dados.usuario)
      )

      if (dados.usuario.tipo === 'funcionario') {
        navigate('/funcionario')
        return
      }

      if (dados.usuario.tipo === 'cliente') {
        navigate('/cliente')
        return
      }

      setMensagem('Tipo de usuário não reconhecido')
    } catch (erro) {
      console.log(erro)

      setMensagem(
        'Não foi possível conectar com o servidor'
      )
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main>
      <h1>Biblioteca</h1>
      <h2>Entrar no sistema</h2>

      <form onSubmit={fazerLogin}>
        <div>
          <label htmlFor="cpf">CPF</label>

          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            placeholder="Digite seu CPF"
            required
          />
        </div>

        <div>
          <label htmlFor="senha">Senha</label>

          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button
          type="submit"
          disabled={carregando}
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>

        {mensagem && <p>{mensagem}</p>}
      </form>
    </main>
  )
}

export default Login