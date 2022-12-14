import React from 'react'
import laptop from './photo-category/laptop.png'
import styles from '../categories/Category.module.scss'
import watch from './photo-category/watch.png'
import wphones from './photo-category/wphones.png'
import tablet from './photo-category/tablet.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import AbbreviatedNews from '../NewsPage/AbbreviatedNews'

import CarouselBox from '../Carousel/Carousel.box'
import PhoneCards from '../Phone/phoneCards/PhoneCards'

export default function Category () {
  return (
    <div className={styles.category_main}>
        <CarouselBox/>
        <h2 className={styles.main_text}>Наши последние предложения и категории</h2>
        <p className={styles.paragraph}><h5> Найдите что-нибуть понемногу для всех!</h5></p>
            <ul className={styles.div_ul}>
                <div className={styles.upper_ul}>
                    <div className={styles.laptop_div}>
                    <img className={styles.photo} src={laptop} alt="" />
                        <li className={styles.true_laptop}>Настоящее решение для ноутбука</li>
                    </div>
                    <div className={styles.watch_div}>
                    <img className={styles.photo} src={watch} alt="" />
                        <li className={styles.watch_text}>Не просто стильный</li>
                    </div>
                </div>
                <div className={styles.under_div}>
                    <div className={styles.wphones_div}>
                    <img className={styles.photo} src={wphones} alt="" />
                        <li class={styles.wphones_text}>Ваша повседневная жизнь</li>
                    </div>
                    <div className={styles.tablet_div}>
                        <li className={styles.tablet_text}>Расширьте возможности</li>
                        <img className={styles.photo4} src={tablet} alt="" />
                    </div>
                </div>
            </ul>
            <AbbreviatedNews/>
            <PhoneCards/>
        </div>

    )
}
