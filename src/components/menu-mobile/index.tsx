import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface MenuMobileProps {
    aberto: boolean;
    acaoMenu: (acao?: boolean) => void;
}

export function MenuMobile({ aberto, acaoMenu }: MenuMobileProps) {
    const [classeMenu, setClasseMenu] = useState(styles.fechado);

    useEffect(() => {
        handleMenu(aberto);
    }, [aberto])

    function handleMenu(acao: boolean) {

        if (acao) {
            setClasseMenu(styles.aberto);
        } else {
            setClasseMenu(styles.fechado);
        }
    }

    return (
        <aside className={`${styles.menu} ${classeMenu}`}>
            <div className={styles.cabecalho}>
                <IoClose color="white" size={35} onClick={() => acaoMenu()} />
            </div>
            <ul className={styles.navbar}>
                <Link className="react-router-Link" to="/"><li>Sobre</li></Link>
                <Link className="react-router-Link" to="/"><li>Demà Jovem</li></Link>
                <Link className="react-router-Link" to="/"><li>Sou Jovem</li></Link>
                <Link className="react-router-Link" to="/"><li>Sou Empresa</li></Link>
                <Link className="react-router-Link" to="/"><li>Blog</li></Link>
                <Link className="react-router-Link" to="/"><li>Compliance</li></Link>
                <Link className="react-router-Link" to="/"><li>Contato</li></Link>
            </ul>
        </aside>
    )
}