import React from 'react';
import { useTranslation } from 'react-i18next';
import slide1 from './images/slide-1.jpg';
import slide2 from './images/slide-2.jpg';
import slide3 from './images/slide-3.png';
import slide4 from './images/slide-4.jpeg';
import style from './style.module.scss';

const Specializations = () => {
    const { t } = useTranslation();

    const data = [
        {
            text: t('professionalHygiene'),
            img: slide2,
        },
        {
            text: t('periodontology'),
            img: slide3,
        },
        {
            text: t('teethWhitening'),
            img: slide4,
        },
        {
            text: t('preventionOfDentalDiseases'),
            img: slide1,
        },
    ];

    return (
        <div id="specialization">
            <div className={style.container}>

                <h3 className={style.container__title}>{t('specialization')}</h3>
                <div className={style.container__wrapper}>
                    {data.map(item => {
                        const { text, img } = item;

                        return (
                            <div key={img} className={style.container__item}>
                                <p className={style.container__item_text}>{text}</p>
                                <img
                                    className={style.container__item_img}
                                    src={img}
                                    alt="slide"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Specializations;
