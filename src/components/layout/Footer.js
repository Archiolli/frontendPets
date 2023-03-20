import { Link } from 'react-router-dom'
import style from './Footer.module.css'



const Footer = () => {
    return (
           <footer className={style.footer}>
            <p>
                <span className='bold'>
                    Get a Pet
                </span>
                &copy; 2023
            </p>
           </footer>
    )

}

export default Footer