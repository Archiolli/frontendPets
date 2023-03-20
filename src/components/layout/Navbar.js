import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'



const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
                Logo
                <h2>Get a pet</h2>
            </div>
            <ul>
                <li>
                    <Link to='/'>Adotar</Link>
                </li>
                <li>
                    <Link to='/login'>Entrar</Link>
                </li>
                <li>
                    <Link to='/register'>Registrar</Link>
                </li>
            </ul>



        </nav>

    )

}

export default Navbar