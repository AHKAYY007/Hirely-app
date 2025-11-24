import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../carousel.css";

import kid1 from "../assets/kids/kid1.jpeg";
import kid2 from "../assets/kids/kid2.jpeg";
import kid3 from "../assets/kids/kid3.jpeg";
import kid4 from "../assets/kids/kid4.jpeg";
import kid5 from "../assets/kids/kid5.jpeg";

// old guys
import old1 from "../assets/old/oldgizzer.webp";    
import old2 from "../assets/old/Pflege.jpg";

// staffs
import staff1 from "../assets/staffs/staff1.jpg";
import staff2 from "../assets/staffs/staff2.webp";
import staff3 from "../assets/staffs/staff3.webp";

const slides = [
    { name: "", src: kid1 },
    { name: "", src: old2 },
    { name: "", src: staff1 },
    { name: "", src: kid2 },
    { name: "", src: kid3 },
    { name: "", src: staff2 },
    { name: "", src: old1 },
    { name: "", src: kid4 },
    { name: "", src: kid5 },
    { name: "", src: staff3 }
];

const StudentSection = () => {
    return (
        <div className="mt-20 mb-20">
            {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-12 tracking-wide">
                Our{" "}
                <span className="bg-gradient-to-r from-green-500 to-teal-800 text-transparent bg-clip-text">
                    Students
                </span>
            </h2> */}
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                speed={600}
                effect="coverflow"
                rewind={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.name}
                        style={{
                            backgroundImage: `url(${slide.src})`,
                        }}
                    >
                        <div>
                            <h2>{slide.name}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default StudentSection;