import styles from './Search.module.css';
import Image from 'next/image';
import Lupa from '../../../public/lupa.png';


export default function Search(props) {
    return (
        <form className={styles.search}>
            <Image src={Lupa} alt='Lupa' />
            <input className={styles.search_field} type='text'
                placeholder='Buscar Pratos' value={props.value}
                onChange={props.onChange}
            />
        </form>
    )
}
