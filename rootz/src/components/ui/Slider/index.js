import {Component} from "react";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import './index.css';

import {A11y, EffectCards, Grid, Navigation, Pagination, Scrollbar} from "swiper";
import {SliderCard, SubTitleSlide, TitleSlide} from "./styles";

const title = [
    {id: 1, label: 'Save watter'},
    {id: 2, label: 'Plant trees'},
    {id: 3, label: 'Save energy'},
    {id: 4, label: 'Avoid plastic'},
    {id: 5, label: 'Choose organic'},
    {id: 6, label: 'Recycle'},
];

const descriptionText = [
    {
        id: 1,
        descriptions: 'Taking on the issue of ensuring access to safe water requires worldwide effort.'
    },
    {
        id: 2,
        descriptions: 'The world’s forests are disappearing at an alarming rate.'
    },
    {
        id: 3,
        descriptions: 'The energy sector is responsible for 70% of global greenhouse gas emissions.'
    },
    {
        id: 4,
        descriptions: 'Plastic is a major threat to the environment.'
    },
    {
        id: 5,
        descriptions: 'Organic farming is a system that avoids or largely excludes the use of synthetic inputs.'
    },
    {
        id: 6,
        descriptions: 'Recycling is the process of converting waste materials into new materials and objects.'
    },
];

const breakpoints = {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    },
    1200: {
        slidesPerView: 4,
    },
};

class SwiperBar extends Component {
    render() {
        return (
            <Swiper
                style={{
                    "--swiper-navigation-color": "#1E1A20",
                    "--swiper-pagination-color": "#1E1A20",
                    "--swiper-pagination-bottom": "25px",
                    "--swiper-navigation-size": "17px",
                    "height": "100%",
                }}
                breakpoints={breakpoints}
                modules={[Navigation, Pagination, Scrollbar, A11y, Grid, EffectCards]}
                spaceBetween={30}
                resistance={false}
                rewind={true}
                navigation
                resizeObserver={true}
                loop={true}
                centeredSlides={true}
                pagination={{type: "fraction"}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {title.map((item) => (
                    <SwiperSlide key={item.id} className="swiper">
                        <SliderCard>
                            <div className="slide-card">
                                {item.id === 1 && <img src={require('../../img/water.svg').default} alt="water"/>}
                                {item.id === 2 && <img src={require('../../img/forest.svg').default} alt="forest"/>}
                                {item.id === 3 && <img src={require('../../img/energy.svg').default} alt="energy"/>}
                                {item.id === 4 && <img src={require('../../img/plastic.svg').default} alt="plastic"/>}
                                {item.id === 5 && <img src={require('../../img/organic.svg').default} alt="organic"/>}
                                {item.id === 6 && <img src={require('../../img/plastic.svg').default} alt="recycling"/>}
                                <TitleSlide>{item.label}</TitleSlide>
                                <SubTitleSlide>{descriptionText[item.id - 1].descriptions}</SubTitleSlide>
                            </div>
                        </SliderCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default SwiperBar;