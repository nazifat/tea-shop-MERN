import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

type SliderData = {
    id: number;
    heading: string;
    text: string;
    image: string;
};

const Slider = () => {
    const [sliderData, setSliderData] = useState<SliderData[]>([]);

    useEffect(() => {
        fetch("sliderData.json")
            .then((res) => res.json())
            .then((data) => setSliderData(data));

    }, []);
    // console.log(sliderData)
    console.log("SLIDER FILE not loaded in 8080", Date.now());
    return (
        <div>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="h-screen w-full my-swiper"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}
                        className="relative h-screen bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>

                        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">

                            <div>

                                <h2 className="text-sm text-red-400 font-bold w-[3/4]">
                                    {slide.heading}
                                </h2>

                                <p className="mt-4 text-5xl">
                                    {slide.text}
                                </p>
                                <button className="btn text-gray-100 bg-black-600 mt-2 border-0 hover:bg-red-800">Explore More</button>
                               
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;