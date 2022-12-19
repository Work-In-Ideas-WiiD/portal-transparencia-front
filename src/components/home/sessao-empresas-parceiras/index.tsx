import styles from './styles.module.scss';
import LogoEmpresa1 from '../../../assets/marca_dermajovem.png';
import LogoEmpresa2 from '../../../assets/marca_sistemasagres.png';
import LogoEmpresa3 from '../../../assets/marca_fundacaosagres.png';
import LogoEmpresa4 from '../../../assets/marca_fundesplai.png';
import LogoEmpresa5 from '../../../assets/marca_apj.png';//FALTOU ESSA
import LogoEmpresa6 from '../../../assets/marca_edoo.png';
import LogoEmpresa7 from '../../../assets/marca_fpc.png';


export function SessaoEmpresasParceiras() {
    return (
        <section className={styles.empresasParceiras}>
            <div className={styles.container}>
                <div className={styles.box1}>
                    <h3 className={styles.texto1}>
                        Empresas  {' '}
                        <br className={styles.tagBr} />
                        parceiras:
                    </h3>
                </div>
                <div className={styles.box2}>

                    <img className={styles.imgEmpresa} src={LogoEmpresa1} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa2} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa3} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa4} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa5} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa6} alt="demà jovem" />
                    <img className={styles.imgEmpresa} src={LogoEmpresa7} alt="demà jovem" />
                </div>

            </div>
        </section>
    )
}