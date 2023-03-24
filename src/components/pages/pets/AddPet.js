import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './AddPet.module.css'
import api from "../../../utils/api"
import { useNavigate } from "react-router-dom"

/*HOOKS*/
import useFlashMessage from "../../../hooks/useFlashMessage"

//pages
import PetForm from './../../form/PetForm';

function AddPet() {

    const [pets, setPets] = useState([])


    return (
        <>
        <section className={styles.addpet_header}>
            <div >
                <h1>Cadastre seu pet</h1>
                <p>Depois ele ficará disponivél para adoção</p>
            </div>
            <PetForm btnText='Cadastrar Pet'/>

        </section>
        </>
        

    )
}

export default AddPet