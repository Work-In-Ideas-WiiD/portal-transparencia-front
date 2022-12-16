import styles from './styles.module.scss';
import ImgDesenho from '../../../assets/obj.png';
import ImgUnesco from '../../../assets/unescob.png';
import ImgBb from '../../../assets/bb-escuro.png';

import { AiOutlineInstagram } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { TiSocialYoutube } from 'react-icons/ti';
import { FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

export function FooterHome() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer1}>
                    <img className={styles.img} src={ImgDesenho} alt="Renapsi" />
                    <div className={styles.wrapper}>
                        <ul className={styles.listaFooter}>
                            <span className={styles.tituloLista}>Sou Aprendiz</span>
                            <li className={`${styles.itemLista}`}>Quero ser aprendiz</li>
                            <li className={`${styles.itemLista}`}>Guia do aprendiz</li>
                            <li className={`${styles.itemLista}`}>Vagas</li>
                        </ul>
                        <ul className={styles.listaFooter}>
                            <span className={styles.tituloLista}>Sou Empresa</span>
                            <li className={`${styles.itemLista}`}>Já sou cliente empresa</li>
                            <li className={`${styles.itemLista}`}>Quero contratar aprendiz</li>
                            <li className={`${styles.itemLista}`}>Calculadora de cota</li>
                        </ul>
                        <ul className={styles.listaFooter}>
                            <span className={styles.tituloLista}>Notícias</span>
                            <li className={`${styles.itemListaNegrito}`}>Demà Jovem</li>
                            <li className={`${styles.itemListaNegrito}`}>Compliance</li>
                            <li className={`${styles.itemListaNegrito}`}>Contato</li>
                            <li className={`${styles.itemListaNegrito}`}>LGPD</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <div className={styles.grupo1}>
                        <span className={styles.texto1}>Reconhecida por:</span>
                        <img className={styles.img1} src={ImgBb} alt="fundação bb" />
                        <img className={styles.img2} src={ImgUnesco} alt="unesco" />
                    </div>
                    <div className={styles.grupo2}>
                        <span className={styles.texto1}>Siga-nos:</span>
                        <AiOutlineInstagram className={styles.icone} size={37} color="#727272" />
                        <SiFacebook className={styles.icone} size={37} color="#727272" />
                        <TiSocialYoutube className={styles.icone} size={37} color="#727272" />
                        <FaLinkedin className={styles.icone} size={37} color="#727272" />
                        <FaTiktok className={styles.icone} size={37} color="#727272" />
                    </div>
                </div>
                <div className={styles.footer3}>

                </div>
            </div>
        </footer>
    )
}