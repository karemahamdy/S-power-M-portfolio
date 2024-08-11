import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceCard = ({ title, description, isActive }) => (
  <div className={`p-6 rounded-lg shadow-md transition-all duration-300 ${isActive ? 'bg-green-500 text-white scale-105' : 'bg-white'}`}>
    <div className="text-3xl mb-4">📧</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const ServicesSwiper = () => {
  const services = [
    { title: 'CORPORATE IDENTITY', description: 'We came to add an inspiring value for how our clients not just can we came to add an inspiring value for how o' },
    { title: 'CONCEPT CREATION & ART WORK', description: 'We came to add an inspiring value for how our clients not just can we came to add an inspiring value for how o' },
    { title: 'MEDICAL SERVICES & MOH', description: 'We came to add an inspiring value for how our clients not just can we came to add an inspiring value for how o' },
    { title: 'WHO WE ARE', description: 'We came to add an inspiring value for how our clients not just can we came to add an inspiring value for how o' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <ServiceCard {...service} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="block mx-auto mt-8 px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300">
        See all Services
      </button>
    </div>
  );
};

export default ServicesSwiper;