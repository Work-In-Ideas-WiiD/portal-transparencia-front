import styles from './styles.module.scss';
import ImgBanner from '../../../assets/banner-recortado.png'

export function BannerHome() {
    return (
        <section className={styles.banner}>
            <div className={styles.containerBanner}>
                <div className={styles.overlay}></div>
                <span className={styles.texto}>Portal da <br /> transparĂȘncia</span>
                <img className={styles.img} src={ImgBanner} />
            </div>
        </section>
    )
}