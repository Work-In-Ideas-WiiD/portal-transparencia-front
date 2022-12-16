
import { BannerHome } from '../../components/home/banner-home';
import { FormularioHome } from '../../components/home/formulario-home';
import { SessaoAssineNewsletterHome } from '../../components/home/sessao-assine-newsletter-home';
import { SessaoBotoesHome } from '../../components/home/sessao-botoes-home';
import { SessaoEmpresasParceiras } from '../../components/home/sessao-empresas-parceiras';
import './styles.module.scss';

export function Home() {
    return (
        <main>
            <BannerHome />
            <FormularioHome />
            <SessaoBotoesHome />
            <SessaoAssineNewsletterHome />
            <SessaoEmpresasParceiras />
        </main>
    )
}