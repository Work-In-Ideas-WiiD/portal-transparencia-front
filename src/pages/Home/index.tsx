
import { BannerHome } from '../../components/banner-home';
import { FormularioHome } from '../../components/formulario-home';
import { SessaoBotoesHome } from '../../components/sessao-botoes-home';
import './styles.module.scss';

export function Home() {
    return (
        <main>
            <BannerHome />
            <FormularioHome />
            <SessaoBotoesHome />
        </main>
    )
}