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
                    <a href="/" className={styles.logo} >
                        <img className={styles.logo} src={Logo} alt="logo" />
                    </a>
                    <ul className={styles.navbar}>
                        <a className="react-router-a" href='https://renapsi.org.br/sobre/' target="_blank"><li>Sobre</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/dema-jovem/' target="_blank"><li>Demà Jovem</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/sou-aprendiz/' target="_blank"><li>Sou Jovem</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/contratar-aprendiz/' target="_blank"><li>Sou Empresa</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/blog/' target="_blank" ><li>Blog</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/compliance/' target="_blank"><li>Compliance</li></a>
                        <a className="react-router-a" href='https://renapsi.org.br/contato/' target="_blank"><li>Contato</li></a>
                    </ul>
                    <FiMenu size={30} className={styles.iconeMenu} onClick={() => { handleMenu() }} />
                </div>
                <div className={styles.divisor}></div>
            </header>
        </>

    )
}