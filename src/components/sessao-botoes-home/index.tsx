
import styles from './styles.module.scss';
import IconeCard1 from '../../../public/assets/icone-card1.png';
import IconeCard2 from '../../../public/assets/icone-card2.png';

export function SessaoBotoesHome() {
    return (
        <section className={styles.sessaoBotoes}>
            <div className={styles.container}>
                <div className={`${styles.cartao} ${styles.amarelo}`}>
                    <div className={styles.linha}></div>
                    <img className={styles.icone} src={IconeCard1} />
                    <span className={styles.texto1}>Sou jovem</span>
                    <br />
                    <div className={styles.containerTexto}>
                        <span className={styles.texto2}>Quero ser aprendiz</span>
                    </div>
                </div>
                <div className={`${styles.cartao} ${styles.azul}`}>
                    <div className={styles.linha}></div>
                    <img className={styles.icone} src={IconeCard2} />
                    <span className={`${styles.texto1} ${styles.branco}`}>Sou empresa</span>
                    <br />
                    <div className={styles.containerTexto}>
                        <span className={`${styles.texto2} ${styles.branco}`}>Quero contratar aprendiz</span>
                    </div>

                </div>
            </div>
        </section>
    )
} 