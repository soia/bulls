/* eslint-disable */
import React, {
    Fragment, useCallback, useEffect, useRef,
} from 'react';
import { useSpring, animated as a, interpolate } from 'react-spring';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import useWindowScroll from '@react-hook/window-scroll';
import useScrollWidth from './useScrollWidth';
import slide1 from './images/slide-1.jpg';
import slide2 from './images/slide-2.jpg';
import slide3 from './images/slide-3.jpg';
import slide4 from './images/slide-4.jpeg';
import './styles.scss';

const ScrollCarousel = ({ children }) => {
    const { t } = useTranslation();
    const refHeight = useRef(null);
    const refTransform = useRef(null);

    const { scrollWidth } = useScrollWidth(refTransform);
    const scrollY = useWindowScroll(45);
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));

    useEffect(() => {
        set({ st: scrollY });
    }, [scrollY, set]);

    const halfWidth = window.innerWidth / 2;
    const lalfHeight = window.innerHeight / 2;

    const onMouseMove = useCallback(
        ({ clientX: x, clientY: y }) => set({ xy: [x - halfWidth, y - lalfHeight] }),
        [],
    );

    const top = refHeight.current ? refHeight.current.offsetTop : 0;
    const width = refHeight.current ? refHeight.current.offsetWidth : 0;
    const elHeight = scrollWidth - (window.innerWidth - window.innerHeight) + width * 0.5;
    const interpTransform = interpolate([st, xy], (o, xy) => {
        const mouseMoveDepth = 40;
        const x = width - (top - o) - width;
        if (x < -window.innerHeight - width * 0.5) {
            return `translate3d(${window.innerHeight}px, 0, 0)`;
        }

        if (Math.abs(x) > elHeight) {
            return `translate3d(${elHeight - 500}px, 0, 0)`;
        }

        const translate1 = `${-x + -xy[0] / mouseMoveDepth}px`;
        const translate2 = `${-xy[1] / mouseMoveDepth}px`;
        return `translate3d(${translate1}, ${translate2}, 0)`;
    });

    const desctopWidth = window.innerWidth > 1024;

    return (
        <Fragment>
            {desctopWidth ? (
                <div
                    onMouseMove={onMouseMove}
                    className="scroll-carousel"
                    ref={refHeight}
                    style={{ height: elHeight - 500 }}
                    id="specialization"
                >
                    <div className="sticky-box">
                        <h3 className="scroll-carousel-title">{t('specialization')}</h3>
                        <a.div
                            style={{ transform: interpTransform }}
                            className="transform-box"
                            ref={refTransform}
                        >
                            {children}
                        </a.div>
                    </div>
                </div>
            ) : (
                <div id="specialization">
                    <h3 className="specialization__title">{t('specialization')}</h3>
                    <div className="specializationWr">
                        <SliderImages />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

const SliderImages = () => {
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
        <Fragment>
            {data.map(item => {
                const { text, img } = item;

                return (
                    <div key={img} className="box">
                        <p className="box__text">{text}</p>
                        <img src={img} alt="slide" className="img" />
                    </div>
                );
            })}
        </Fragment>
    );
};

const StickySlider = () => (
    <div className="container">
        <ScrollCarousel>
            <SliderImages />
        </ScrollCarousel>
    </div>
);

ScrollCarousel.defaultProps = {
    children: '',
};

ScrollCarousel.propTypes = {
    children: PropTypes.node,
};

export default StickySlider;
