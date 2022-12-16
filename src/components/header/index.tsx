import styles from './styles.module.scss';
import Logo from '../../assets/logo-renapsi.png';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} src={Logo} alt="logo" />
                <ul>
                    <Link className="react-router-Link" to="/"><li>Sobre</li></Link>
                    <Link className="react-router-Link" to="/"><li>Demà Jovem</li></Link>
                    <Link className="react-router-Link" to="/"><li>Sou Jovem</li></Link>
                    <Link className="react-router-Link" to="/"><li>Sou Empresa</li></Link>
                    <Link className="react-router-Link" to="/"><li>Blog</li></Link>
                    <Link className="react-router-Link" to="/"><li>Compliance</li></Link>
                    <Link className="react-router-Link" to="/"><li>Contato</li></Link>
                </ul>
            </div>
            <div className={styles.divisor}></div>
        </header>
    )
}