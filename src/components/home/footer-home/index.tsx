import styles from './styles.module.scss';
import ImgDesenho from '../../../assets/obj.png';
import ImgUnesco from '../../../assets/unescob.png';
import ImgBb from '../../../assets/bb-escuro.png';
import Logo from '../../../assets/logo-renapsi.png';
import IconTikTok from '../../../assets/tiktok.svg';

import { AiOutlineInstagram } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import { TiSocialYoutube } from 'react-icons/ti';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function FooterHome() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer1}>
                    <img className={styles.img} src={ImgDesenho} alt="Renapsi" />
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperLista1}>
                            <ul className={styles.listaFooter}>
                                <span className={styles.tituloLista}><a href='#'>Sou Aprendiz</a></span>
                                <li className={`${styles.itemLista}`}><a href='https://renapsi.org.br/sou-aprendiz/'>Quero ser aprendiz</a></li>
                                <li className={`${styles.itemLista}`}><a href='https://renapsi.org.br/wp-content/uploads/2022/12/Guia-do-Aprendiz-Versao-Final.pdf'>Guia do aprendiz</a></li>
                                <li className={`${styles.itemLista}`}><a href='https://candidato.edoo.com.br/login'>Vagas</a></li>
                            </ul>
                            <ul className={styles.listaFooter}>
                                <span className={styles.tituloLista}><a href='#'>Sou Empresa</a></span>
                                <li className={`${styles.itemLista}`}><a href='https://renapsi.org.br/contratar-aprendiz/'>Já sou cliente empresa</a></li>
                                <li className={`${styles.itemLista}`}><a href='https://renapsi.org.br/contratar-aprendiz/'>Quero contratar aprendiz</a></li>
                                <li className={`${styles.itemLista}`}><a href='https://renapsi.org.br/calculadora-de-cotas/'>Calculadora de cota</a></li>
                            </ul>
                            <ul className={styles.listaFooter}>
                                <li className={`${styles.itemListaNegrito}`}><a href='https://renapsi.org.br/blog/'>Notícias</a></li>
                                <li className={`${styles.itemListaNegrito}`}><a href='https://renapsi.org.br/dema-jovem/'>Demà Jovem</a></li>
                                <li className={`${styles.itemListaNegrito}`}><a href='https://renapsi.org.br/compliance/'>Compliance</a></li>
                                <li className={`${styles.itemListaNegrito}`}><a href='https://renapsi.org.br/contato/'>Contato</a></li>
                                <li className={`${styles.itemListaNegrito}`}><a href='https://renapsi.org.br/wp-content/uploads/2022/12/Compliance-Renapsi-LGPD.pdf'>LGPD</a></li>
                            </ul>
                        </div>
                        <div className={styles.wrapperLista2}>
                            <div className={styles.grupo1}>
                                <span className={styles.texto1}>Reconhecida por:</span>
                                <img className={styles.img1} src={ImgBb} alt="fundação bb" />
                                <img className={styles.img2} src={ImgUnesco} alt="unesco" />
                            </div>
                            <div className={styles.grupo2}>
                                <span className={styles.texto1}>Siga-nos:</span>
                                <a href="https://www.instagram.com/renapsibr/?hl=pt-br"><AiOutlineInstagram className={styles.icone} size={37} color="#727272" /></a>
                                <a href="https://www.facebook.com/renapsibrasil/"><SiFacebook className={styles.icone} size={37} color="#727272" /></a>
                                <a href="https://www.youtube.com/channel/UCDn1T_R9RUmJwDp6xKMGawQ"><TiSocialYoutube className={styles.icone} size={37} color="#727272" /></a>
                                <a href="https://www.linkedin.com/company/renapsibr/?originalSubdomain=br"><FaLinkedin className={styles.icone} size={37} color="#727272" /></a>
                                <a href="https://www.tiktok.com/@demajovembyrenapsi"><img src={IconTikTok} className={styles.icone} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer2}>
                    <p className={styles.texto1}>© Renapsi - Rede Nacional de Aprendizagem, Promoção Social e Integração. Leia nossa política de privacidade. Leia nosso manifesto LGPD</p>
                    <a href="/" className={styles.logo}>
                        <img src={Logo} alt="Renapsi" className={styles.logo} />
                    </a>
                </div>

            </div>
        </footer>
    )
}