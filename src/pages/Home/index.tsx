
import { useEffect, useState } from 'react';
import { BannerHome } from '../../components/home/banner-home';
import { FooterHome } from '../../components/home/footer-home';
import { FormularioHome } from '../../components/home/formulario-home';
import { SessaoAssineNewsletterHome } from '../../components/home/sessao-assine-newsletter-home';
import { SessaoBotoesHome } from '../../components/home/sessao-botoes-home';
import { SessaoEmpresasParceiras } from '../../components/home/sessao-empresas-parceiras';
import { ObjFormProps, ProjetosRes } from '../../models/home.model';
import { getProjetos } from '../../services/api/renapsi-service';
import './styles.module.scss';

export function Home() {
    const [projetos, setProjetos] = useState<ProjetosRes[]>([])

    useEffect(() => {

    }, []);

    async function pesquisarProjeto(obj: ObjFormProps) {
        if (obj.ambito == '' &&
            obj.ano == ''
        ) {
            console.log("falta dados");
            return
        }
        try {
            const data = await getProjetos(obj.ano, obj.ambito, obj.palavraChave, undefined, 10000);
            console.log(data);

        } catch (err) {
            console.log(err);
        }

    }


    return (
        <main>
            <BannerHome />
            <FormularioHome enviar={pesquisarProjeto} />

            <SessaoBotoesHome />
            <SessaoAssineNewsletterHome />
            <SessaoEmpresasParceiras />
            <FooterHome />
        </main>
    )
}