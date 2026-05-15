const usuarios = `[
  {
    "id": 1,
    "nome": "Lucas Silva",
    "email": "lucas.silva@email.com",
    "telefone": "(85) 99999-1111",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "nome": "Mariana Costa",
    "email": "mariana.costa@email.com",
    "telefone": "(85) 99999-2222",
    "cidade": "Caucaia",
    "foto": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "nome": "Pedro Lima",
    "email": "pedro.lima@email.com",
    "telefone": "(85) 99999-3333",
    "cidade": "Maracanaú",
    "foto": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "nome": "Juliana Alves",
    "email": "juliana.alves@email.com",
    "telefone": "(85) 99999-4444",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "nome": "Rafael Souza",
    "email": "rafael.souza@email.com",
    "telefone": "(85) 99999-5555",
    "cidade": "Sobral",
    "foto": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "nome": "Amanda Ferreira",
    "email": "amanda.ferreira@email.com",
    "telefone": "(85) 99999-6666",
    "cidade": "Quixadá",
    "foto": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "id": 7,
    "nome": "Carlos Mendes",
    "email": "carlos.mendes@email.com",
    "telefone": "(85) 99999-7777",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "id": 8,
    "nome": "Fernanda Rocha",
    "email": "fernanda.rocha@email.com",
    "telefone": "(85) 99999-8888",
    "cidade": "Eusébio",
    "foto": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "id": 9,
    "nome": "João Batista",
    "email": "joao.batista@email.com",
    "telefone": "(85) 99999-9999",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "id": 10,
    "nome": "Camila Nunes",
    "email": "camila.nunes@email.com",
    "telefone": "(85) 98888-1111",
    "cidade": "Aquiraz",
    "foto": "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    "id": 11,
    "nome": "Thiago Martins",
    "email": "thiago.martins@email.com",
    "telefone": "(85) 98888-2222",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "id": 12,
    "nome": "Patrícia Gomes",
    "email": "patricia.gomes@email.com",
    "telefone": "(85) 98888-3333",
    "cidade": "Horizonte",
    "foto": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "id": 13,
    "nome": "Eduardo Ribeiro",
    "email": "eduardo.ribeiro@email.com",
    "telefone": "(85) 98888-4444",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "id": 14,
    "nome": "Larissa Oliveira",
    "email": "larissa.oliveira@email.com",
    "telefone": "(85) 98888-5555",
    "cidade": "Pacatuba",
    "foto": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "id": 15,
    "nome": "Bruno Carvalho",
    "email": "bruno.carvalho@email.com",
    "telefone": "(85) 98888-6666",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "id": 16,
    "nome": "Vanessa Araújo",
    "email": "vanessa.araujo@email.com",
    "telefone": "(85) 98888-7777",
    "cidade": "Sobral",
    "foto": "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    "id": 17,
    "nome": "Felipe Santos",
    "email": "felipe.santos@email.com",
    "telefone": "(85) 98888-8888",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "id": 18,
    "nome": "Bianca Lima",
    "email": "bianca.lima@email.com",
    "telefone": "(85) 98888-9999",
    "cidade": "Itapipoca",
    "foto": "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    "id": 19,
    "nome": "Gabriel Fernandes",
    "email": "gabriel.fernandes@email.com",
    "telefone": "(85) 97777-1111",
    "cidade": "Fortaleza",
    "foto": "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    "id": 20,
    "nome": "Natália Barbosa",
    "email": "natalia.barbosa@email.com",
    "telefone": "(85) 97777-2222",
    "cidade": "Crato",
    "foto": "https://randomuser.me/api/portraits/women/20.jpg"
  }
]`
let usuariosObj = JSON.parse(usuarios)
console.log(usuariosObj)

export default usuariosObj