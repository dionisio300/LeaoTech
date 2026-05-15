
import ListarProdutos from '../../components/ListarProdutos/ListarProdutos'
import './Home.css'


function Home(){
    return(
        <>
            <main className="main-home">
                <h1 className='text-center'>Sejam Bem-Vindos a Loja</h1>
                <h3 className='text-center'>Confira nossos produtos</h3>
                <p className='text-center'>
                    {/* Itens no carrinho: {quantidadeCarrinho} */}
                </p>
                <ListarProdutos/>
            </main>
        </>
    )
}

export default Home