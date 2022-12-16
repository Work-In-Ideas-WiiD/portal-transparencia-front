import styles from './styles.module.scss';
import ImgBanner from '../../../assets/banner-recortado.png'

export function BannerHome() {
    return (
        <section className={styles.banner}>
            <div className={styles.containerBanner}>
                <span className={styles.texto}>Portal da <br /> transparência</span>
                <img className={styles.img} src={ImgBanner} />
            </div>
        </section>
    )
}