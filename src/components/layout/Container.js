import { Link } from 'react-router-dom'
import style from './Container.module.css'



const Container = ({ children }) => {
    return (
        <main className={style.container}>
            {children}
        </main>
    )

}

export default Container