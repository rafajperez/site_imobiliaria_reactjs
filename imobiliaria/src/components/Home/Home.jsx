import Banner from '/src/assets/images/banner.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='titulo'>
                <h1>Bem vindo á imbiliaria Santos!</h1>
            </div >
            <div className='banner'>
                <img src={Banner} alt='anúncio de casa' />
            </div>
        </>
    )
}

export default Home