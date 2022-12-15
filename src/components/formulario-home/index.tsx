import styles from './styles.module.scss';

export function FormularioHome() {
    return (
        <section className={styles.sessaoFormulario}>
            <div className={styles.container}>
                <div className={`${styles.box1} ${styles.w50}`}>
                    <p className={styles.texto1}>Compliance/Portal da transparência</p>
                    <p className={styles.texto2}>
                        Transparência é um
                        valor inegociável
                        dentro da nossa
                        Instituição, por isso
                        criamos esse Portal.</p>
                </div>
                <div className={`${styles.box2} ${styles.w50}`}>
                    <p className={styles.texto1}>
                        Fique à vontade para acessar abaixo projetos,
                        contratos e outros dados disponíveis.
                        Caso tenha alguma dúvida ou queira mais informações,
                        favor entrar em contato pelo email <a className={styles.email} href="mailto:portaldatransparencia@renapsi.org.br">portaldatransparencia@renapsi.org.br</a>
                    </p>
                    <form action="submit" className={styles.form} onSubmit={(e) => { e.preventDefault() }}>
                        <select className={styles.select} >
                            <option >Âmbito do projeto</option>
                        </select>
                        <select className={styles.select} >
                            <option >Ano</option>
                        </select>
                        <input type="text" className={styles.input} placeholder="Palavra chave relacionada ao projeto" />
                        <button className={styles.botaoSubmit} type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}