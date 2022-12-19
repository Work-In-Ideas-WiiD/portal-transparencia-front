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
                                <span className={styles.tituloLista}><Link className='react-router-Link' to={'/'}>Sou Aprendiz</Link></span>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Quero ser aprendiz</Link></li>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Guia do aprendiz</Link></li>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Vagas</Link></li>
                            </ul>
                            <ul className={styles.listaFooter}>
                                <span className={styles.tituloLista}><Link className='react-router-Link' to={'/'}>Sou Empresa</Link></span>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Já sou cliente empresa</Link></li>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Quero contratar aprendiz</Link></li>
                                <li className={`${styles.itemLista}`}><Link className='react-router-Link' to={'/'}>Calculadora de cota</Link></li>
                            </ul>
                            <ul className={styles.listaFooter}>
                                <span className={styles.tituloLista}><Link className='react-router-Link' to={'/'}>Notícias</Link></span>
                                <li className={`${styles.itemListaNegrito}`}><Link className='react-router-Link' to={'/'}>Demà Jovem</Link></li>
                                <li className={`${styles.itemListaNegrito}`}><Link className='react-router-Link' to={'/'}>Compliance</Link></li>
                                <li className={`${styles.itemListaNegrito}`}><Link className='react-router-Link' to={'/'}>Contato</Link></li>
                                <li className={`${styles.itemListaNegrito}`}><Link className='react-router-Link' to={'/'}>LGPD</Link></li>
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
                    <img src={Logo} alt="Renapsi" className={styles.logo} />
                </div>

            </div>
        </footer>
    )
}