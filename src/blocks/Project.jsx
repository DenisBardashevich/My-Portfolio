import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Импортируйте стили
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Импорт изображений
import travel from '/Travel.jpg';
import convector from '/convector.jpg';
import friends from '/friends.jpg';
import portfolio_test from '/portfolio_test.jpg';
import regist from '/regist.jpg';
import weather from '/weather.jpg';
import quiz from '/Quiz.jpg';

const Project = () => {
    return (
        <div className="projects" id='projects'><p>My projects</p>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="3"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} 
            >
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/Travel-first/">
                        <img src={travel} alt="Travel" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/list_user/">
                        <img src={friends} alt="Friends" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/react-convector-app/">
                        <img src={convector} alt="Convector" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/weater/">
                        <img src={weather} alt="Weather" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/registration-form./">
                        <img src={regist} alt="Regist" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/denis/">
                        <img src={portfolio_test} alt="Portfolio Test" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://denisbardashevich.github.io/Test-Quiz/">
                        <img src={quiz} alt="Quiz" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Project;