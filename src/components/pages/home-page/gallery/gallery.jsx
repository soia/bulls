import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import img1 from './images/1.jpeg';
import img2 from './images/2.JPG';
import img3 from './images/3.JPG';
import img4 from './images/4.JPG';
import img5 from './images/5.JPG';
import img6 from './images/6.JPG';
import img7 from './images/7.JPG';
import img8 from './images/8.JPG';
import img9 from './images/9.JPG';
import img10 from './images/10.JPG';
import img11 from './images/11.JPG';
import img12 from './images/12.JPG';
import img13 from './images/13.JPG';
import img14 from './images/14.JPG';
import img15 from './images/15.jpeg';
import img16 from './images/16.jpeg';
import img17 from './images/17.jpeg';
import img18 from './images/18.jpeg';
import img19 from './images/19.jpeg';
import img20 from './images/20.jpeg';
import img21 from './images/21.jpeg';
import style from './style.module.scss';

const Gallery = () => {
    const { t } = useTranslation();

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };

    const gallery = [
        {
            img: img9,
            title: 'gallery',
        },
        {
            img: img10,
            title: 'gallery',
        },
        {
            img: img11,
            title: 'gallery',
        },
        {
            img: img1,
            title: 'gallery',
        },
        {
            img: img2,
            title: 'gallery',
        },
        {
            img: img3,
            title: 'gallery',
        },
        {
            img: img4,
            title: 'gallery',
        },
        {
            img: img5,
            title: 'gallery',
        },
        {
            img: img6,
            title: 'gallery',
        },
        {
            img: img7,
            title: 'gallery',
        },
        {
            img: img8,
            title: 'gallery',
        },
        {
            img: img12,
            title: 'gallery',
        },
        {
            img: img13,
            title: 'gallery',
        },
        {
            img: img14,
            title: 'gallery',
        },
        {
            img: img15,
            title: 'gallery',
        },
        {
            img: img16,
            title: 'gallery',
        },
        {
            img: img17,
            title: 'gallery',
        },
        {
            img: img18,
            title: 'gallery',
        },
        {
            img: img19,
            title: 'gallery',
        },
        {
            img: img20,
            title: 'gallery',
        },
        {
            img: img21,
            title: 'gallery',
        },
    ];

    return (
        <div className={style.container} id="gallery">
            <div className={style.wrapper}>
                <h3 className={style.wrapper__title}>{t('gallery')}</h3>
            </div>

            <div className={style.slick}>
                <Slider {...settings}>
                    {gallery.map(item => {
                        const { img, title } = item;
                        return <img key={img} src={img} alt={title} />;
                    })}
                </Slider>
            </div>
            <div className={style.wrapper__margin} />
        </div>
    );
};

export default Gallery;
