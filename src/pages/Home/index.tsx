
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BannerHome } from '../../components/home/banner-home';
import { FooterHome } from '../../components/home/footer-home';
import { FormularioHome } from '../../components/home/formulario-home';
import { ModalProjeto } from '../../components/home/modal-projeto-home';
import { SessaoAssineNewsletterHome } from '../../components/home/sessao-assine-newsletter-home';
import { SessaoBotoesHome } from '../../components/home/sessao-botoes-home';
import { SessaoEmpresasParceiras } from '../../components/home/sessao-empresas-parceiras';
import { TabelaProjetos } from '../../components/home/tabela-projetos-home';
import { ObjFormProps, ProjetosRes } from '../../models/home.model';
import { getProjetos } from '../../services/api/renapsi-service';
import './styles.module.scss';

export function Home() {
    const [projetos, setProjetos] = useState<ProjetosRes[]>([])
    const [projeto, setProjeto] = useState<ProjetosRes>();
    const [modalAberta, setModalAberta] = useState(false);

    useEffect(() => {

    }, []);

    function manusearModal(acao: boolean) {
        if (acao != undefined) {
            return setModalAberta(acao);
        }
        setModalAberta(!modalAberta);

    }

    async function pesquisarProjeto(obj: ObjFormProps) {
        if (obj.ambito == '' &&
            obj.ano == ''
        ) {
            return toast.warn("Selecione alguma opção para busca.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

        }
        setModalAberta(false);
        setProjeto(undefined);
        setProjetos([]);//limpando dados
        try {
            const data = await getProjetos(obj.ano, obj.ambito, obj.palavraChave, undefined, 10000);
            if (data.data.length > 0) {
                setProjetos(data.data);
            } else {
                toast.warn("Nenhum dado encontrado.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    function selecionarProjeto(projeto: ProjetosRes) {
        setProjeto(projeto);
        manusearModal(true);
    }

    return (
        <main>
            <BannerHome />
            <FormularioHome enviar={pesquisarProjeto} />
            <TabelaProjetos projetos={projetos} selecionarProjeto={selecionarProjeto} />
            <SessaoBotoesHome />
            {/* <SessaoAssineNewsletterHome />
            <SessaoEmpresasParceiras /> */}
            <FooterHome />
            <ModalProjeto projeto={projeto} fecharModal={manusearModal} estadoModal={modalAberta} />
        </main>
    )
}