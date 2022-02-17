/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
// import Telegram from 'telegram-send-message';
// import ModalWindow from '../../../UI/modal-window';
import notification from '../../../../helpers/notifications';
import mobileWidth from '../../../../helpers/mobile-width';
import setIcon from './images/setIcon.png';
import style from './boxes.module.scss';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

const Boxes = () => {
    const { t } = useTranslation();
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 550, friction: 140 },
    }));

    const desctopWidth = window.innerWidth > 1024;

    const comingSoon = () => {
        notification('', t('comingSoon'), 'success');
    };

    const sendToTelegram = () => {
        console.log('sendToTelegram');
        // Telegram.setToken('1468522452:AAG6L6XjtG93ALdL1YMtKPh9vuBkg_o2MS8');
        // Telegram.setRecipient('503498105');
        // Telegram.setMessage('Имя: Никита, Телефон: 0934618577');
        // Telegram.send();
    };

    return (
        <Fragment>
            <div className={style.boxes} id="boxes" onClick={sendToTelegram}>
                <div className={style.boxes__leftSide}>
                    <h3 className={style.boxes__title}>{t('healthBox')}</h3>
                    <p className={style.boxes__subTitle}>{t('giveOralCare')}</p>
                    <img className={style.boxes__leftSide_img} src={setIcon} alt="setIcon" />
                    <div className={style.boxes__buttonWr}>
                        <button
                            type="button"
                            onClick={comingSoon}
                            className={style.boxes__buttonWr_link}
                        >
                            {t('moreDetails')}
                        </button>
                        <button
                            type="button"
                            onClick={comingSoon}
                            className={style.boxes__buttonWr_btn}
                        >
                            {t('buy')}
                        </button>
                    </div>
                </div>
                {!mobileWidth() ? (
                    <div
                        className={style.container}
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                    >
                        <animated.div
                            className={style.card1}
                            style={
                                desctopWidth
                                    ? { transform: props.xy.interpolate(trans1) }
                                    : {}
                            }
                        />
                        <animated.div
                            className={style.card2}
                            style={
                                desctopWidth
                                    ? { transform: props.xy.interpolate(trans2) }
                                    : {}
                            }
                        />
                        <animated.div
                            className={style.card3}
                            style={
                                desctopWidth
                                    ? { transform: props.xy.interpolate(trans3) }
                                    : {}
                            }
                        />
                        <animated.div
                            className={style.card4}
                            style={
                                desctopWidth
                                    ? { transform: props.xy.interpolate(trans4) }
                                    : {}
                            }
                        />
                        <animated.div
                            className={style.card5}
                            style={
                                desctopWidth
                                    ? { transform: props.xy.interpolate(trans5) }
                                    : {}
                            }
                        />
                    </div>
                ) : null}
            </div>
            {/*
            <ModalWindow
                triggerButton={(
                    <div className={style.address__qrCodeIcon}>
                       кнопка
                    </div>
                )}
            >
                <div className={style.modal}>
             вапавп
                    вапав
                </div>
            </ModalWindow>
                */}
        </Fragment>
    );
};

Boxes.defaultProps = {
    xy: {},
};

Boxes.propTypes = {
    xy: PropTypes.object,
};

export default Boxes;
