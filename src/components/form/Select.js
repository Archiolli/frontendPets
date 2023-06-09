import style from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
 return (
    <div className={style.form_control}>

        <label htmlFor={name} >{text}</label>
        <select name={name} options={options} onChange={handleOnChange} value={value || ''}>

            <option>Selecione uma opção</option>
            {options.map((option) =>(
                <option value={option} key={option}>{option}</option>
            ))}
        </select>

    </div>
 )
}
export default Select