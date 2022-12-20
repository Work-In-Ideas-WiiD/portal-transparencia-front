import { useEffect, useState } from 'react';
import { ObjFormProps } from '../../../models/home.model';
import styles from './styles.module.scss';

interface FormularioHomeProps {
    enviar: (obj: ObjFormProps) => void,
}

const objAmbito = [{
    valor: 'Federal',
    chave: 'Âmbito Federal'
},
{
    valor: 'Estadual',
    chave: 'Âmbito Estadual',
},
{
    valor: 'Municipal',
    chave: 'Âmbito Municipal'
}]


export function FormularioHome({ enviar }: FormularioHomeProps) {
    const [objForm, setObjForm] = useState<ObjFormProps>({
        ambito: '',
        ano: '',
        palavraChave: ''
    })

    const [dataSelect, setDataSelect] = useState<number[]>([]);

    useEffect(() => {
        gerarDadasParaSelect();
    }, [])

    function gerarDadasParaSelect() {
        const arrayDatas: number[] = [];
        const anoAtual = new Date().getFullYear();
        let dataLimite = anoAtual - 2013;

        for (let i = 0; i <= dataLimite; i++) {
            arrayDatas.push(anoAtual - i);
        }
        setDataSelect([...arrayDatas]);
    }

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
                    <p className={styles.texto1}>
                        Fique à vontade para acessar abaixo projetos,
                        contratos e outros dados disponíveis.
                        Caso tenha alguma dúvida ou queira mais informações,
                        favor entrar em contato pelo email <a className={styles.email} href="mailto:portaldatransparencia@renapsi.org.br">portaldatransparencia@renapsi.org.br</a>
                    </p>
                </div>
                <div className={`${styles.box2} ${styles.w50}`}>

                    <form action="submit" className={styles.form} onSubmit={(e) => { e.preventDefault(), enviar(objForm) }}>
                        <select
                            className={styles.select}
                            defaultValue=""
                            onChange={(e) => {
                                setObjForm(prev => ({
                                    ...prev,
                                    ambito: e.target.value
                                }))
                            }}
                        >
                            <option value="" disabled >Âmbito do projeto</option>
                            {
                                objAmbito.map((item, index) => (
                                    <option value={item.chave} key={index}>{item.valor}</option>
                                ))
                            }
                        </select>
                        <select
                            className={styles.select}
                            defaultValue=""
                            onChange={(e) => {
                                setObjForm(prev => ({
                                    ...prev,
                                    ano: e.target.value
                                }))
                            }}
                        >
                            <option value="" disabled>Ano</option>
                            {
                                dataSelect.map((item, index) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Palavra chave relacionada ao projeto"
                            onChange={(e) => {
                                setObjForm(prev => ({
                                    ...prev,
                                    palavraChave: e.target.value
                                }))
                            }}
                        />
                        <button className={styles.botaoSubmit} type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}