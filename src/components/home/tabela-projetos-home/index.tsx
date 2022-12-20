import { useEffect, useState } from "react";
import { ProjetosRes } from "../../../models/home.model";
import styles from './styles.module.scss';

interface TabelaProjetosProps {
    projetos: ProjetosRes[]
}

export function TabelaProjetos({ projetos }: TabelaProjetosProps) {

    useEffect(() => {


    }, [projetos])

    function renderizarTabela() {
        if (projetos.length > 0) {
            return (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th className={styles.responsivo}>Órgão</th>
                            <th >Nome do Projeto</th>
                            <th className={styles.responsivo}>Número do Instrumento</th>
                            <th className={styles.responsivo}>Quantidade de empregados</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projetos.map((projeto) => (
                                <tr>
                                    <td className={styles.responsivo}>{projeto.orgao}</td>
                                    <td className={styles.center}>{projeto.nome}</td>
                                    <td className={`${styles.center} ${styles.responsivo}`}>{projeto.numero_instrumento}</td>
                                    <td className={`${styles.center} ${styles.responsivo}`}>{projeto.quantidade}</td>
                                    <td className={styles.center}>
                                        <button className={styles.botao}>Visualizar</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            )
        }
    }


    return (
        <section className={styles.sessaoTabela}>
            <div className={styles.container}>
                {
                    renderizarTabela()
                }
            </div>
        </section>
    )
}