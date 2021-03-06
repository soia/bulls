import React from 'react';
import Tilt from 'react-tilt';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import video from './video.MOV';
import mobileWidth from '../../../../helpers/mobile-width';
import arrowDown from '../../../assets/images/icons/arrow-down-fs.png';
import style from './first-screen.module.scss';

const FirstScreen = () => {
    const { t } = useTranslation();

    const description = (
        <div className={style.tilt__content}>
            <h1 className={style.tilt__content_title}>{t('name')}</h1>
            <h2 className={style.tilt__content_subTitle}>{t('specialty')}</h2>
        </div>
    );

    return (
        <div className={style.firstScreen}>
            {mobileWidth() ? (
                <div className={style.tilt}>
                    {description}
                </div>
            ) : (
                <Tilt className={style.tilt} options={{ max: 25 }}>
                    {description}
                </Tilt>
            ) }

            <video playsInline={!!mobileWidth()} autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <AnchorLink href="#aboutMe">
                <img
                    className={style.firstScreen__arrowDown}
                    src={arrowDown}
                    alt="arrowDown"
                />
            </AnchorLink>
        </div>
    );
};

export default FirstScreen;
