
import Input from '../../form/Input'
import { Link } from 'react-router-dom'
import style from '../../form/Form.module.css'

const Register = () => {

    const handleChange = () => {

    }

    return (

        <section className={style.form_container}>
            <h1>Register</h1>
            <form>
                <Input
                    text='Nome'
                    type='text'
                    name='name'
                    placeholder='Digite o seu nome'
                    onChange={handleChange}
                />
                <Input
                    text='Email'
                    type='email'
                    name='email'
                    placeholder='Digite o seu Email'
                    onChange={handleChange}
                />
                <Input
                    text='Senha'
                    type='password'
                    name='pasword'
                    placeholder='Digite a sua senha'
                    onChange={handleChange}
                />

                <Input
                    text='Confirmação de senha'
                    type='password'
                    name='confirmpasword'
                    placeholder='Confirme a sua senha'
                    onChange={handleChange}
                />
                <input type='submit' value='Cadastrar' />
            </form>
            <p>
                Já tem conta? <Link to='/Login'>Clique aqui</Link> para se registrar
            </p>
        </section>

    )

}

export default Register