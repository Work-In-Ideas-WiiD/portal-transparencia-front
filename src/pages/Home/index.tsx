
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BannerHome } from '../../components/home/banner-home';
import { FooterHome } from '../../components/home/footer-home';
import { FormularioHome } from '../../components/home/formulario-home';
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


    useEffect(() => {

    }, []);

    async function pesquisarProjeto(obj: ObjFormProps) {
        if (obj.ambito == '' &&
            obj.ano == ''
        ) {
            toast.warn("Selecione alguma opção para busca.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            return
        }
        try {
            const data = await getProjetos(obj.ano, obj.ambito, obj.palavraChave, undefined, 10000);
            if (data.data.lenght > 0) {
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

    return (
        <main>
            <BannerHome />
            <FormularioHome enviar={pesquisarProjeto} />
            <TabelaProjetos projetos={projetos} />
            <SessaoBotoesHome />
            <SessaoAssineNewsletterHome />
            <SessaoEmpresasParceiras />
            <FooterHome />
        </main>
    )
}