import { ProjetosRes } from "../../../models/home.model";
import styles from './styles.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ModalProjetoProps {
    projeto?: ProjetosRes;
    fecharModal: (acao: boolean) => void;
    estadoModal: boolean
}

export function ModalProjeto({ projeto, fecharModal, estadoModal }: ModalProjetoProps) {


    function renderizarModal() {

        if (projeto && estadoModal) {
            return (
                <div className={styles.ovelayModal}>
                    <div className={styles.modal}>
                        <AiFillCloseCircle
                            className={styles.iconeFechar}
                            size={35}
                            onClick={() => {
                                fecharModal(false)
                            }} />
                        <div className={styles.cabecalho}>
                            <h2 className={styles.titulo}>{projeto.nome}</h2>
                            <div className={styles.divisor}></div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.linha}>
                                <div className={`${styles.inputWrapper} ${styles.w60}`}>
                                    <label className={styles.inputLabel}>Organização Parceira</label>
                                    <span className={styles.input}>{projeto.orgao}</span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w40}`}>
                                    <label className={styles.inputLabel}>Número do Instrumento</label>
                                    <span className={styles.input}>{projeto.numero_instrumento}</span>
                                </div>
                            </div>
                            <div className={styles.linha}>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Âmbito do Projeto</label>
                                    <span className={styles.input}>{projeto.ambito}</span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Estado do Projeto</label>
                                    <span className={styles.input}></span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Termo Inicial</label>
                                    <span className={styles.input}>{projeto.termo_inicial}</span>
                                </div>
                            </div>
                            <div className={styles.linha}>
                                <div className={`${styles.inputWrapper} ${styles.w40}`}>
                                    <label className={styles.inputLabel}>Termo Final</label>
                                    <span className={styles.input}>{projeto.termo_final}</span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w60}`}>
                                    <label className={styles.inputLabel}>Vigência</label>
                                    <span className={styles.input}>{projeto.prazo}</span>
                                </div>

                            </div>
                            <div className={styles.linha}>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Valor</label>
                                    <span className={styles.input}>{projeto.valor}</span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Quantidade de empregados</label>
                                    <span className={styles.input}>{projeto.quantidade}</span>
                                </div>
                                <div className={`${styles.inputWrapper} ${styles.w33}`}>
                                    <label className={styles.inputLabel}>Termo Aditivo</label>
                                    <span className={styles.input}>{projeto.aditivo_num}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {
                renderizarModal()
            }
        </>
    )

}