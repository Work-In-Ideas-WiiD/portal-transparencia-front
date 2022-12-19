import { useState } from 'react';
import styles from './styles.module.scss';
import Logo from '../../assets/logo-renapsi.png';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { MenuMobile } from '../menu-mobile';

export function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

    function handleMenu(ordem?: boolean) {
        if (ordem != undefined) {
            setMenuAberto(ordem);
        } else {
            setMenuAberto(!menuAberto);
        }
    }



    return (
        <>
            <MenuMobile aberto={menuAberto} acaoMenu={handleMenu} />
            <header className={styles.header}>
                <div className={styles.container}>
                    <img className={styles.logo} src={Logo} alt="logo" />
                    <ul className={styles.navbar}>
                        <Link className="react-router-Link" to="/"><li>Sobre</li></Link>
                        <Link className="react-router-Link" to="/"><li>Demà Jovem</li></Link>
                        <Link className="react-router-Link" to="/"><li>Sou Jovem</li></Link>
                        <Link className="react-router-Link" to="/"><li>Sou Empresa</li></Link>
                        <Link className="react-router-Link" to="/"><li>Blog</li></Link>
                        <Link className="react-router-Link" to="/"><li>Compliance</li></Link>
                        <Link className="react-router-Link" to="/"><li>Contato</li></Link>
                    </ul>
                    <FiMenu size={30} className={styles.iconeMenu} onClick={() => { handleMenu() }} />
                </div>
                <div className={styles.divisor}></div>
            </header>
        </>

    )
}