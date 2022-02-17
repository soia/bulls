import React from 'react';
import { useTranslation } from 'react-i18next';
import portret from '../../../assets/images/portrets/portret.png';
import signature from '../../../assets/images/portrets/signature.png';
import style from './about-me.module.scss';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className={style.aboutMe} id="aboutMe">
            <div className={style.letter}>
                <img className={style.letter__portret} src={portret} alt="portret" />
                <h3 className={style.letter__title}>{t('about.title')}</h3>
                <p className={style.letter__text}>{t('about.about1')}</p>
                <p className={style.letter__text}>{t('about.about2')}</p>
                <p className={style.letter__text}>{t('about.about3')}</p>
                <p className={style.letter__text}>{t('about.about4')}</p>
                <p className={style.letter__text}>{t('about.about5')}</p>
                <p className={style.letter__text}>{t('about.about6')}</p>
                <div className={style.letter__sine}>
                    <img src={signature} alt="signature" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
