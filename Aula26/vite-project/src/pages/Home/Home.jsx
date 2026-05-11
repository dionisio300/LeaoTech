import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './Home.css'

function Home(){
    return(
        <>
            <Header/>
            <main className="main-home">
                <div className="container mt-4">
                    <div className="row">
                        <aside className="col-4 ">
                            <div className="border rounded-2 shadow p-2">
                                <ul>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                    <li>coisas</li>
                                </ul>
                            </div>
                        </aside>
                        <section className="col-8">
                            <div className="border rounded-2 shadow p-2">
                                <h3>Título 1</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium fugiat architecto culpa minima vel, veniam quaerat hic cum provident itaque eum consequatur facilis deserunt a corporis neque reiciendis adipisci!
                                </p>
                            </div>
                            <div className="border rounded-2 shadow p-2 mt-4">
                                <h3>Título 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium fugiat architecto culpa minima vel, veniam quaerat hic cum provident itaque eum consequatur facilis deserunt a corporis neque reiciendis adipisci!
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home