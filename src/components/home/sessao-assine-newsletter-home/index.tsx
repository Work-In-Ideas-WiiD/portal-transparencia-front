import styles from './styles.module.scss';
import IconeFlechaPreta from '../../../assets/flecha-preta.png';

export function SessaoAssineNewsletterHome() {


    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <form action="submit" className={styles.cardEmail} onSubmit={(e) => { e.preventDefault() }}>
                    <div className={styles.linha}></div>
                    <h3 className={styles.texto1}>Fique por dentro dos nossos boletins  <br /> mensais. Assine nossa newsletter.</h3>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder='Seu e-mail principal' className={styles.inputEmail} />
                        <button type='submit' className={styles.botao}>
                            Enviar
                            <img className={styles.flecha} src={IconeFlechaPreta} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}