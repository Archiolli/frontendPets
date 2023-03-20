import style from './Input.module.css'

const Input = ({ type, placeholder, text, name, value, onChange, multiple }) => {

    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} placeholder={placeholder} id={name} onChange={onChange} value={value} {...(multiple ? { multiple } : '')} />
        </div>
    )
}

export default Input