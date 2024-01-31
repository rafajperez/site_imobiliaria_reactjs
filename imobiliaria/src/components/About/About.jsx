
import Imovel from '/src/assets/images/imovel-assinatura.jpg';
import './About.css'
const About = () => {
    return (
        <div className='secao banner'>
            <div id='sobre' className='secao'>
                <h1>Encontre o imóvel dos seus sonhos</h1>
                <h2>A imobiliária que te ajuda no sonho do seu imóvel</h2>
                <img className='imagem' src={Imovel} />
                <p className="paragrafo paragrafo-sobre">
                    Há <span className="texto-azul">10 anos</span> no ramo temos conquistado a confiança de <span className="texto-azul">inúmeros clientes</span>. Isso porque procuramos sempre as melhores condições tanto para quem quer comprar, como para quem quer vender ou alugar. Oferecemos um <span className="texto-azul">serviço de qualidade</span> servindo como ponte entre as partes interessadas.
                </p>
            </div>
        </div>
    )
}

export default About;