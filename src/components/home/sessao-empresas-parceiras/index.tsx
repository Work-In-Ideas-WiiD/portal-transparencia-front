import styles from './styles.module.scss';
import LogoEmpresa1 from '../../../assets/dema.png';
import LogoEmpresa2 from '../../../assets/sistema_sagres.png';
import LogoEmpresa3 from '../../../assets/fundacao-sagres.png';
import LogoEmpresa4 from '../../../assets/fundesplai.png';
import LogoEmpresa5 from '../../../assets/dema.png';//FALTOU ESSA
import LogoEmpresa6 from '../../../assets/edoo.png';
import LogoEmpresa7 from '../../../assets/FPC.png';


export function SessaoEmpresasParceiras() {
    return (
        <section className={styles.empresasParceiras}>
            <div className={styles.container}>
                <h3 className={styles.texto1}>
                    Empresas
                    <br />
                    parceiras:
                </h3>
                <img className={styles.imgEmpresa} src={LogoEmpresa1} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa2} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa3} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa4} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa5} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa6} alt="demà jovem" />
                <img className={styles.imgEmpresa} src={LogoEmpresa7} alt="demà jovem" />
            </div>
        </section>
    )
}