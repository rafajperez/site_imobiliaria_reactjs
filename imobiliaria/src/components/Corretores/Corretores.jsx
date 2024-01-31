import './Corretores.css'
import CorretoresImg from '/src/assets/images/corretores.jpg'

const Corretores = () => {
    return (
        <>
            <div className="corretores-subtitulo">
                <h3>CORRETORES</h3>
            </div>
            <div className='corretor-img'>
                <img src={CorretoresImg} alt="corretores" /></div>
            <div>
                <p className='corretor-p'>A <span>imobiliária Santos</span> conta com um time de profissionais qualificados que têm vários anos de experiência no mercado. Para entrar em contato com um de nossos corretores, basta clicar no link a seguir: <a href="mailto:rafaperez_dev_coder@hotmail.com">Corretores</a></p>

            </div >
        </>
    )
}

export default Corretores