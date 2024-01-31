import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contato">
                <h3>CONTATO:</h3>
                <div className="iframe" >
                    <iframe src="https://maps.google.com/maps?q=Barra%20da%20tijuca&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width={800} height={350}></iframe>
                </div>
                <p className="contato-p">
                    Se ficou interessado em nos conhecer ou se tiver dúvidas entre em <span>contato</span> conosco atráves de um dos emails abaixo: </p>
                <ul className="contato-ul">
                    <li>
                        <a href="mailto:rafaperez_dev_coder@hotmail.com">Escritório Barra da Tijuca</a>
                    </li>
                    <li>
                        <a href="mailto:rafaperez_dev_coder@hotmail.com">Escritório Centro/RJ</a>
                    </li>
                    <li>
                        <a href="mailto:rafaperez_dev_coder@hotmail.com">Escritório Centro/RJ</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contact;