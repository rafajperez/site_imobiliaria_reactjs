import Logo from '/src/assets/images/logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='secao topo'>
            <img src={Logo} alt='Logotype' />
            <nav className='nav nav-topo'>
                <Link className='link-topo' to='/about'>Sobre</Link>
                <Link className='link-topo' to='/services'>Serviços</Link>
                <Link className='link-topo' to='/contact'>Contato</Link>
                <Link className='link-topo' to='/corretores'>Corretores</Link>
                <Link className='link-topo' to='/'>Home</Link>
            </nav>
        </div>
    )
}

export default NavBar;