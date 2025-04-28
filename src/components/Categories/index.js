import styles from './Categories.module.css'
import Image from 'next/image'

import Entrada from '../../../public/entrada.png'
import Massa from '../../../public/massa.png'
import Carne from '../../../public/carne.png'
import Bebidas from '../../../public/bebidas.png'
import Salada from '../../../public/salada.png'
import Sobremesa from '../../../public/sobremesa.png'

export default function Categories(props) {
    const handleSelectedBtn = (category) => {
        props.selectedBtn == category && styles.selectedBtn;
    }

    return (
        <section className={styles.categories}>
            <button onClick={props.onClickEntradas} className={`${styles.btn} 
             ${handleSelectedBtn('Entradas')}`}>
                <Image src={Entrada} alt='parato de entrada'/>
                <span>Entradas</span>
            </button>

            <button onClick={props.onClickMassa} className={`${styles.btn} 
             ${handleSelectedBtn('Massa')}`}>
                <Image src={Massa} alt='parato de Massa'/>
                <span>Massas</span>
            </button>

            <button onClick={props.onClickCarne} className={`${styles.btn} 
             ${handleSelectedBtn('Carne')}`}>
                <Image src={Carne} alt='parato de Carne'/>
                <span>Carnes</span>
            </button>

            <button onClick={props.onClickBebidas} className={`${styles.btn} 
             ${handleSelectedBtn('Bebidas')}`}>
                <Image src={Bebidas} alt='Bebidas'/>
                <span>Bebidas</span>
            </button>

            <button onClick={props.onClickSalada} className={`${styles.btn} 
             ${handleSelectedBtn('Salada')}`}>
                <Image src={Salada} alt='Pratos de Salada'/>
                <span>Salada</span>
            </button>

            <button onClick={props.onClickSalada} className={`${styles.btn} 
             ${handleSelectedBtn('Sobremesa')}`}>
                <Image src={Sobremesa} alt='Sobremesas'/>
                <span>Sobremesa</span>
            </button>
        </section>
    )
}                     