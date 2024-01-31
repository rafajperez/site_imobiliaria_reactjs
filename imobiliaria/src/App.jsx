import './App.css'

//reaproveitando a estrutura //
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;